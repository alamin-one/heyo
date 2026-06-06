import { useEffect, useState } from 'react';
import { useAuthContext } from '../context/auth/AuthContextProvider';
import chating from '../lib/chating';
import icon from '../../assets/icon';

const UserInfo = ({ setIsOpenCanvas }) => {
  const { currentUser, allUser } = useAuthContext();
  const [searchIn, setSearchIn] = useState();
  const [suggested, setSuggested] = useState([]);

  /*  */
  const startChat = id => {
    chating(id, currentUser);
  };
  /* suggestion */
  const searchU = searchIn?.toLowerCase();
  useEffect(() => {
    const time = setTimeout(() => {
      if (searchU) {
        const filtered = allUser?.filter(u =>
          u.username?.toLowerCase().includes(searchU),
        );
        setSuggested(filtered);
      } else {
        setSuggested([]);
      }
    }, 100);

    return () => {
      clearTimeout(time);
    };
  }, [allUser, searchU]);

  return (
    <div className="py-2.5 mb-2 px-5 border-b border-gray-200  dark:border-gray-800 flex items-center justify-between gap-3 relative">
      {/* profile */}
      <div
        className="w-9 h-9 cursor-pointer"
        onClick={() => setIsOpenCanvas(prev => !prev)}
      >
        <img
          src={currentUser?.avatar}
          alt="useravater"
          className="rounded-full mr-1 w-full h-full object-contain"
        />
      </div>
      {/* search */}
      <div className="text-Steel placeholder:text-Steel flex-1 relative">
        <span className="text-xl absolute top-1/2 left-3 transform -translate-y-1/2 ">
          {icon.search}
        </span>
        <input
          type="search"
          name="search"
          placeholder="Search"
          className="pl-10 pr-5 py-2 text-[14px] rounded-full focus:outline-none 
          focus:ring-1 ring-DuckBlue w-full bg-LigntGrey dark:bg-white/5"
          value={searchIn}
          onChange={e => setSearchIn(e.target.value)}
        />
      </div>
      {/* seting */}
      <div
        className="text-xl text-Steel cursor-pointer"
        onClick={() => setIsOpenCanvas(prev => !prev)}
      >
        {icon.dot}
      </div>
      {/* search suggestion */}
      <div
        className={`w-full min-h-50 backdrop-blur-3xl absolute top-14 left-0 right-0 ${suggested.length > 0 ? 'block' : 'hidden'}`}
      >
        {suggested?.map((u, i) => (
          <div
            key={i}
            className="py-3 px-5 mb-0 border-b border-gray-200  dark:border-gray-800/60  flex items-center gap-2 hover:bg-LigntGrey dark:hover:bg-white/5 "
          >
            <div className="w-7 h-7">
              <img
                src={u?.avatar}
                alt="useravater"
                className="rounded-full w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <h2>{u?.username}</h2>
            </div>

            <button
              onClick={() => {
                (startChat(u?.id), setSuggested([]));
              }}
              className="px-4 py-1.5 text-xs text-white bg-LightGreen rounded-md cursor-pointer"
            >
              ADD
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfo;
