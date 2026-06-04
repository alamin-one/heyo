const MessageBubble = ({ user }) => {
  const style = {
    recUser: { borderRadius: '0px 15px 15px 15px' },
    curUser: { borderRadius: '15px 0px 15px 15px' },
  };

  return (
    <>
      <div
        className={`w-full flex  ${user === 'user' ? 'justify-start' : 'justify-end'} `}
      >
        <p
          className="p-2 bg-white dark:bg-[#121B35] w-6/7 md:w-3/6"         style={user === 'user' ? style.recUser : style.curUser}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          incidunt illo id quidem ea necessitatibus facilis inventore minus
          praesentium tempora qui provident quibusdam totam in deserunt ex
          voluptatem. Illum, est?
        </p>
      </div>
    </>
  );
};

export default MessageBubble;
