import icon from '../../assets/icon';

const MessageInput = () => {
  const style = {
    icon: 'text-Steel absolute top-1/2 transform -translate-y-1/2',
  };

  return (
    <>
      <div className="py-2.5 px-5  relative">
        <span className={`${style.icon} left-10 `}>{icon.plus}</span>
        <span className={`${style.icon} left-18 `}>{icon.emoji}</span>
        <span className={`${style.icon} right-10 `}>{icon.send}</span>
        <input
          type="text"
          name="message"
          placeholder="Message"
          className="pl-22 pr-12 py-4 text-xs text-Steel placeholder:text-[15px] placeholder:text-Steel 
         focus:outline-none rounded-full w-full bg-white dark:bg-[#121B35]"
        />
      </div>
    </>
  );
};

export default MessageInput;
