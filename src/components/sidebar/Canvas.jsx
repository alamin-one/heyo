import { useState } from 'react';
import { useAuthContext } from '../context/auth/AuthContextProvider';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import toast from 'react-hot-toast';
import urlGenerator from '../lib/urlGenerator';
import icon from '../../assets/icon';

const Canvas = ({ isOpenCanvas, setIsOpenCanvas }) => {
  const { currentUser, signOUT } = useAuthContext();
  const [preview, setPreview] = useState(null);
  const [avatarURl, setAvatarURl] = useState();
  const [loading, setLoading] = useState(true);

  /* preview profile img and generate url with cloudinary */
  const handleInput = async e => {
    const file = e.target.files[0];
    setPreview(URL.createObjectURL(file));
    setLoading(true);
    const url = await urlGenerator(file);
    setAvatarURl(url);
    setLoading(false);
  };
  /* uupdate avatar */
  const updateAvatar = async e => {
    e.preventDefault();
    const docRef = doc(db, 'app', 'heyo', 'users', currentUser?.id);
    if (preview) {
      try {
        loading
          ? 'Loading'
          : await updateDoc(docRef, {
              avatar: avatarURl,
            });
        toast.success('Submission Successfull');
        // eslint-disable-next-line no-unused-vars
      } catch (err) {
        toast.error('Something is wrong');
        //
      }
    } else {
      toast.error('Input Picture ');
    }
  };

  return (
    <div
      className={`px-5 py-4 w-full h-full flex flex-col items-center justify-start bg-white dark:bg-Dark backdrop-blur-2xl 
    transform  ${isOpenCanvas ? 'translate-x-0' : '-translate-x-full'} absolute `}
    >
      <div
        className="text-Dark dark:text-white absolute right-5 cursor-pointer"
        onClick={() => setIsOpenCanvas(prev => !prev)}
      >
        {icon.close}
      </div>
      <div className="mb-5 w-25 h-25 relative">
        <img
          src={preview || currentUser.avatar}
          alt="useravater"
          className="mb-4 border border-LightGreen rounded-full mr-1 w-full h-full object-contain"
        />
        <label
          htmlFor="file"
          className=" text-xl text-Dark dark:text-white  absolute -right-2 bottom-3 cursor-pointer"
        >
          <input
            type="file"
            name="image"
            accept="image/*"
            id="file"
            className="hidden"
            onChange={e => handleInput(e)}
          />
          <span>{icon.camera}</span>
        </label>
      </div>
      <h2 className="text-2xl ">{currentUser.username}</h2>
      <p>{currentUser.email}</p>
      <button
        onClick={e => updateAvatar(e)}
        className="px-5 py-2 mt-3 text-white rounded-md w-full bg-LightGreen cursor-pointer"
      >
        Save Chenge
      </button>
      <button
        onClick={() => signOUT()}
        className="px-5 py-2 mt-3 text-white rounded-md w-full bg-LightGreen cursor-pointer"
      >
        LogOut
      </button>
    </div>
  );
};

export default Canvas;
