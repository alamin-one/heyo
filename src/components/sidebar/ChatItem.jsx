import { useAuthContext } from '../context/auth/AuthContextProvider';

const ChatItem = ({ setMessageID, list, setIsOpen }) => {
  const { allUser } = useAuthContext();
  const user = allUser?.find(u => u.id === list.receiverId);
  const date = new Date(list?.updatedAt);
  /* console.log(list); */
  return (
    <>
      <div
        className="py-3 px-5 mb-0 border-b border-gray-200  dark:border-gray-800/60  flex items-center gap-2 hover:bg-LigntGrey dark:hover:bg-white/5"
        onClick={() => {
          (setIsOpen(prev => !prev), setMessageID(list));
        }}
      >
        <div className="w-12 md:w-11  h-12 md:h-11">
          <img
            src={user?.avatar}
            alt="useravater"
            className="rounded-full w-full h-full object-contain"
          />
        </div>
        <div className="flex-1">
          <h2>{user?.username}</h2>
          <p className="line-clamp-1">{list?.lastMessage}</p>
        </div>
        <div className="space-y-1 flex flex-col items-end">
          <div className="pxs">
            {date.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
         {/*  <div className="pxs text-white  w-5 h-5 rounded-full flex justify-center items-center bg-LightGreen">
            1
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ChatItem;
