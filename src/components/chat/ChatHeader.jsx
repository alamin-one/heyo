import icon from '../../assets/icon';

const ChatHeader = () => {
  return (
    <>
      <div className="py-2.5 px-5 border-b border-gray-200  dark:border-gray-800 flex items-center gap-2 bg-white dark:bg-Dark w-full">
        <img
          src="https://placehold.co/40x40/0094AD/FFFFFF?text=A"
          alt="useravater"
          className="rounded-full"
        />
        <div className="flex-1">
          <h2>David Moore</h2>
          <p className="line-clamp-1">last seen 5 mins ago</p>
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
