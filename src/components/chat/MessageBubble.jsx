import { useAuthContext } from '../context/auth/AuthContextProvider';

const MessageBubble = ({ msg }) => {
  const { currentUser } = useAuthContext();

  /* style */
  const style = {
    recUser: { borderRadius: '0px 20px 20px 20px' },
    curUser: { borderRadius: '20px 0px 20px 20px' },
  };

  return (
    <>
      <div
        className={`w-full flex  ${msg.senderId === currentUser.id ? 'justify-end ' : 'justify-start'}`}
      >
        <div
          className={`border border-Steel/50 backdrop-blur-[2px]  w-5/7 md:w-3/6  ${msg.senderId === currentUser.id ? '' : ''}`}
          style={
            msg.senderId === currentUser.id ? style.curUser : style.recUser
          }
        >
          {msg.text && (
            <p
              className={`px-4 py-6 ${msg.senderId === currentUser.id ? 'dark:text-white' : 'dark:text-white'}`}
            >
              {msg.text}
            </p>
          )}
          {msg.img && (
            <img src={msg.img} alt="img" className="w-full rounded-md" />
          )}
        </div>
      </div>
    </>
  );
};

export default MessageBubble;

/*  */
