import {
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { db } from '../../firebase';

const chating = async (userID, currentUser) => {
  console.log(currentUser);
  console.log(userID);
  /* set chat */
  const docRef = doc(collection(db, 'app', 'heyo', 'chats'));
  await setDoc(docRef, {
    createdAt: serverTimestamp(),
    messages: [],
  });

  /* set chetlist */
  const cuRUserDocRef = doc(db, 'app', 'heyo', 'userchats', currentUser.id);
  await setDoc(
    cuRUserDocRef,
    {
      chatlist: arrayUnion({
        chatId: docRef.id,
        receiverId: userID,
        lastMessage: '',
        isSeen: false,
        updatedAt: Date.now(),
      }),
    },
    { merge: true },
  );

  const userDocRef = doc(db, 'app', 'heyo', 'userchats', userID);
  await setDoc(
    userDocRef,
    {
      chatlist: arrayUnion({
        chatId: docRef.id,
        receiverId: currentUser.id,
        lastMessage: '',
        isSeen: false,
        updatedAt: Date.now(),
      }),
    },
    { merge: true },
  );
  /*  console.log(userID); */
};

export default chating;
