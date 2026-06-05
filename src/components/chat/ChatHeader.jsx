import { useAuthContext } from '../context/auth/AuthContextProvider';
import icon from '../../assets/icon';

const ChatHeader = ({ user }) => {
  const { allUser } = useAuthContext();
  const receiver = allUser?.find(u => u.id === user?.receiverId);

  return (
    <>
      <div className="py-2.5 px-5 border-b border-gray-200  dark:border-gray-800 flex items-center gap-2 bg-white dark:bg-Dark w-full">
        <div className="w-10 h-10">
          <img src={receiver.avatar} alt="useravater" className="rounded-full w-full h-full object-contain"
          />
        </div>
        <div className="flex-1">
          <h2>{receiver?.username}</h2>
          <p className="line-clamp-1 ">@{receiver.username}</p>
        </div>
        <div className="flex gap-5">
          <span className="text-xl text-Steel">{icon.search}</span>
          <span className="text-base text-Steel">{icon.phon}</span>
          <span className="text-xl text-Steel">{icon.dot}</span>
        </div>
      </div>
    </>
  );
};

export default ChatHeader;
