import img from '../assets/images/Image';
import UserInfo from '../components/sidebar/UserInfo';
import ChatItem from '../components/sidebar/ChatItem';
import ChatHeader from '../components/chat/ChatHeader';
import MessageList from '../components/chat/MessageList';
import MessageInput from '../components/chat/MessageInput';
import { useEffect, useState } from 'react';

/*  */
const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              bg-white dark:bg-Dark flex-col overflow-hidden ${isOpen ? 'hidden md:flex' : 'flex'}`}
          >
            <UserInfo />
            <div className="flex-1 space-y-3 overflow-y-auto scrollbar-none">
              <ChatItem setIsOpen={setIsOpen} />
              <ChatItem setIsOpen={setIsOpen} />
            </div>
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
            <div className="flex flex-col h-full relative z-10">
              <ChatHeader />
              <MessageList />
              <MessageInput />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
