import { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';

/*  */
const MessageList = ({ loading, message }) => {
  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [message]);

  return (
    <>
      <div className="py-2.5 px-5 h-full flex-1 flex flex-col  space-y-4 lg:space-y-5 overflow-auto scrollbar-none">
        {loading
          ? 'loading'
          : message?.length > 0 &&
            message.map((msg, msi) => <MessageBubble msg={msg} key={msi} />)}
        <div ref={endRef} />
      </div>
    </>
  );
};

export default MessageList;
