import { db } from '../../firebase';
import { useAuthContext } from '../context/auth/AuthContextProvider';
import { arrayUnion, doc, setDoc } from 'firebase/firestore';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';
import urlGenerator from '../lib/urlGenerator';
import icon from '../../assets/icon';


/*  */
const MessageInput = ({ currentChat }) => {
  const { currentUser } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);
  const [prev, setPrev] = useState(null);
  const [message, setMessage] = useState({
    img: null,
    text: '',
  });

  /* handle input */
  const handaleInput = async (type, value) => {
    if (type === 'file') {
      setPrev(() => URL.createObjectURL(value));
      const url = await urlGenerator(value);
      setMessage(prev => ({
        ...prev,
        img: url,
      }));
    } else {
      setMessage(prev => ({
        ...prev,
        [type]: value,
      }));
    }
  };

  /* handle submit */
  const handleSubmit = async () => {
    const docRef = doc(db, 'app', 'heyo', 'chats', currentChat.chatId);
    await setDoc(
      docRef,
      {
        messages: arrayUnion({
          senderId: currentUser.id,
          text: message.text,
          img: message.img,
          createdAt: Date.now(),
        }),
      },
      { merge: true },
    );
    setMessage({
      img: null,
      text: '',
    });
    setPrev(null);
  };
  const style = {
    icon: 'text-Steel absolute top-1/2 transform -translate-y-1/2',
  };

  return (
    <>
      <div className="py-2.5 px-5  relative">
        <div className={`${style.icon} left-10 cursor-pointer`}>
          <label>
            {icon.plus}
            <input
              onInput={e => handaleInput('file', e.target.files[0])}
              type="file"
              name="image"
              accept="image/*"
              className="hidden"
            />
          </label>
        </div>
        <div
          onClick={() => setIsOpen(prev => !prev)}
          className={`${style.icon} left-18 cursor-pointer hidden md:flex`}
        >
          {icon.emoji}
        </div>
        <div
          onClick={() => handleSubmit()}
          className={`${style.icon} right-10 cursor-pointer`}
        >
          {icon.send}
        </div>
        <input
          type="text"
          name="message"
          placeholder="Message"
          className="pl-13 md:pl-22 pr-12 py-5 text-xs text-Steel placeholder:text-[15px] placeholder:text-Steel 
         focus:outline-none rounded-full w-full bg-white dark:bg-[#121B35]"
          value={message.text}
          onChange={e => handaleInput('text', e.target.value)}
        />
      </div>
      <div className="px-0 w-full ">
        <EmojiPicker
          onEmojiClick={e =>
            setMessage(prev => ({
              ...prev,
              text: prev.text + e.emoji,
            }))
          }
          open={isOpen}
          theme="dark"
          width="100%"
          height={400}
        />
      </div>
      {prev && (
        <div className="absolute bottom-16 left-0 right-0 px-5">
          <div className="relative w-fit">
            <img
              src={prev}
              alt="preview"
              className="max-h-40 rounded-xl object-cover border border-gray-200 dark:border-gray-700"
            />
            <button
              onClick={() => setPrev(null)}
              className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center"
            >
              {icon.close}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageInput;
