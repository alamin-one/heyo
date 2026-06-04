import icon from '../../assets/icon';
const UserInfo = () => {
  return (
    <>
      <div className="py-2.5 px-5 flex items-center justify-between gap-5">
        <div className="text-xl text-Steel cursor-pointer">{icon.bar}</div>
        <div className="text-Steel placeholder:text-Steel flex-1 relative">
          {' '}
          <span className="text-xl absolute top-1/2 left-3 transform -translate-y-1/2 ">
            {icon.search}
          </span>
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="pl-10 pr-5 py-2 text-[14px] rounded-full focus:outline-none focus:ring-1 ring-DuckBlue w-full bg-LigntGrey dark:bg-white/5"
          />
        </div>
      </div>
    </>
  );
};

export default UserInfo;
