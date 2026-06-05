import img from '../assets/images/Image';
import UserInfo from '../components/sidebar/UserInfo';
import ChatItem from '../components/sidebar/ChatItem';
import ChatHeader from '../components/chat/ChatHeader';
import MessageList from '../components/chat/MessageList';
import MessageInput from '../components/chat/MessageInput';
import { useEffect, useMemo, useState } from 'react';
import Canvas from '../components/sidebar/Canvas';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuthContext } from '../components/context/auth/AuthContextProvider';

/*  */
const HomePage = () => {
  const { currentUser, allUser } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);
  const [messageID, setMessageID] = useState(null);
  const [chatListItm, setChatListItm] = useState();
  const [isOpenCanvas, setIsOpenCanvas] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState();
  const [currentChat, setCurrentChat] = useState();

  /* get receiver */
  const receiver = useMemo(
    () => allUser?.find(u => u.id === messageID?.receiverId),
    [allUser, messageID?.receiverId],
  );

  /* handle back */
  useEffect(() => {
    if (isOpen) {
      window.history.pushState(null, '', window.location.href);
      const handleBack = () => {
        setIsOpen(false);
      };
      window.addEventListener('popstate', handleBack);
      return () => window.removeEventListener('popstate', handleBack);
    }
  }, [isOpen]);

  /* get current user chat list */
  useEffect(() => {
    const docRef = doc(db, 'app', 'heyo', 'userchats', currentUser.id);
    const g = async () => {
      await onSnapshot(docRef, list => {
        if (list.exists()) {
          setChatListItm(list.data().chatlist);
        } else {
          setChatListItm(null);
        }
      });
    };
    g();
  }, [currentUser]);

  /* get current chat data */
  useEffect(() => {
    if (!receiver) return;
    const receiverDocRef = doc(db, 'app', 'heyo', 'userchats', receiver.id);
    /* get current chat data */
    const unsub = onSnapshot(receiverDocRef, res => {
      if (res.exists()) {
        setLoading(true);
        const data = res
          .data()
          .chatlist.find(i => i.receiverId === currentUser.id);
        setCurrentChat(data);
        /* get current message  */
        const chatDocRef = doc(db, 'app', 'heyo', 'chats', data.chatId);
        onSnapshot(chatDocRef, msg => {
          if (msg.exists()) {
            setMessage(msg.data().messages);
          }
        });
        setLoading(false);
      }
    });

    return () => unsub();
  }, [currentUser.id, receiver]);

  /*  */

  return (
    <>
      <section className="h-screen rounded-md flex items-center justify-cente ">
        <div
          className="max-w-360 md:rounded-xl w-full  mx-auto h-screen 
        xl:h-[90vh] flex flex-col md:flex-row justify-start overflow-hidden"
        >
          {/* sideBar */}
          <div
            className={`md:border-r md:border-gray-200 dark:md:border-gray-800 w-full h-full md:w-80 
              bg-white dark:bg-Dark flex-col overflow-hidden relative ${isOpen ? 'hidden md:flex' : 'flex'}`}
          >
            <UserInfo setIsOpenCanvas={setIsOpenCanvas} />
            <div className="flex-1 space-y-3 overflow-y-auto scrollbar-none">
              {chatListItm?.map((l, i) => (
                <ChatItem
                  setMessageID={setMessageID}
                  list={l}
                  key={i}
                  setIsOpen={setIsOpen}
                />
              ))}
            </div>
            <Canvas
              isOpenCanvas={isOpenCanvas}
              setIsOpenCanvas={setIsOpenCanvas}
            />
          </div>
          {/* chatWindow */}
          <div
            className={`relative w-full h-full md:flex-1 bg-DuckBlue dark:bg-Dark ${isOpen ? 'flex ' : 'hidden md:flex'}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-25 dark:opacity-8"
              style={{ backgroundImage: `url(${img.overlay})` }}
            />
            {/* content */}
            <div className="flex flex-col h-full w-full relative z-10">
              {messageID ? (
                <>
                  <ChatHeader user={messageID} />
                  <MessageList loading={loading} message={message} />
                  <MessageInput currentChat={currentChat} />
                </>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
