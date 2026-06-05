import { useContext, useEffect, useState } from 'react';
import { auth, db } from '../../../firebase';
import AuthContext from './AuthContext';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import avatargenerator from '../../lib/avatargenerator';
import toast from 'react-hot-toast';

/* custom hook */
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext);
};

/* auth context provider */
const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [allUser, setAllUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  /* get current user form firestore */
  const getCurrentUser = async user => {
    if (user) {
      const docRef = doc(db, 'app', 'heyo', 'users', user?.uid);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        const data = snapshot;
        setCurrentUser({
          id: user?.uid,
          ...data.data(),
        });
        setLoading(false);
      } else {
        setCurrentUser(null);
      }
    } else {
      setCurrentUser(null);
    }
  };
  /* get current user form firestore */
  useEffect(() => {
    const u = async () => {
      const docRef = collection(db, 'app', 'heyo', 'users');
      const snapshot = await getDocs(docRef);
      if (!snapshot.empty) {
        const data = snapshot.docs.map(u => ({ id: u.id, ...u.data() }));
        setAllUser(data);
      } else {
        setAllUser(null);
      }
    };
    u();
  }, []);

  /* state change */
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      getCurrentUser(user);
      setLoading(false)
    });
  }, []);

  /* create user */ /* app > heyo > user userId */
  const signUP = async (username, email, password) => {
    try {
      setError(false);
      setLoading(true);
      const userC = await createUserWithEmailAndPassword(auth, email, password);
      const avatar = await avatargenerator(username);
      const docRef = doc(db, 'app', 'heyo', 'users', userC.user.uid);
      await setDoc(docRef, {
        username: username,
        email: email,
        avatar: avatar,
        block: [],
      });
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  /* login */
  const signIN = async (email, password) => {
    try {
      setError(false);
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setLoading(false);
      toast.error('Something went wrong!');
    }
  };

  /* logout */
  const signOUT = () => {
    signOut(auth);
  };

  /* privide */
  const value = {
    error,
    loading,
    currentUser,
    allUser,
    signUP,
    signIN,
    signOUT,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthContextProvider;
