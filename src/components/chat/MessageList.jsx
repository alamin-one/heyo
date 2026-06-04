import MessageBubble from './MessageBubble';

const MessageList = () => {
  return (
    <>
      <div className="py-2.5 px-5 h-full flex-1 space-y-2 lg:space-y-5 overflow-auto scrollbar-none">
        <MessageBubble user={'currentUser'} />
        <MessageBubble user={'user'} />
        <MessageBubble user={'currentUser'} />
        <MessageBubble user={'user'} />
        <MessageBubble user={'currentUser'} />
        <MessageBubble user={'user'} />
        <MessageBubble user={'currentUser'} />
        <MessageBubble user={'user'} />
        <MessageBubble user={'currentUser'} />
        <MessageBubble user={'user'} />
        <MessageBubble user={'user'} />
        <MessageBubble user={'user'} />
        <MessageBubble user={'currentUser'} />
      </div>
    </>
  );
};

export default MessageList;
