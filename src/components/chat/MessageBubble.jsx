import { useAuthContext } from '../context/auth/AuthContextProvider';

const MessageBubble = ({ msg }) => {
  const { currentUser } = useAuthContext();

  /* style */
  const style = {
    recUser: { borderRadius: '0px 15px 15px 15px' },
    curUser: { borderRadius: '15px 0px 15px 15px' },
  };

  return (
    <>
      <div
        className={`w-full flex  ${msg.senderId === currentUser.id ? 'justify-end ' : 'justify-start'}`}
      >
        <div
          className={` bg-white  backdrop-blur-2xl w-5/7 md:w-3/6  ${msg.senderId === currentUser.id ? ' dark:bg-LightGreen/30' : 'dark:bg-LightGreen/50'}`}
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
