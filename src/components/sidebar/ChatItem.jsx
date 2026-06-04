const ChatItem = ({ setIsOpen,  }) => {
  return (
    <>
      <div
        className="py-2.5 px-5 flex items-center gap-2 hover:bg-LigntGrey dark:hover:bg-white/5"
        onClick={() => setIsOpen(prev => !prev)}
        
      >
        <img
          src="https://placehold.co/40x40/0094AD/FFFFFF?text=A"
          alt="useravater"
          className="rounded-full"
        />
        <div className="flex-1">
          <h2>David Moore</h2>
          <p className="line-clamp-1">You: i don't remember anything 😄.</p>
        </div>
        <div className="space-y-1">
          <div className="pxs">18:16</div>
          <div className="pxs text-white  w-5 h-5 rounded-full flex justify-center items-center bg-LightGreen">
            1
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatItem;
