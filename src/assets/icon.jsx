import { FaBars } from 'react-icons/fa6';
import { IoIosSearch } from 'react-icons/io';
import { FaImage } from 'react-icons/fa6';
import { FaCamera } from 'react-icons/fa';
import { RiCloseLargeLine } from 'react-icons/ri';

import { FaPhoneAlt } from 'react-icons/fa';
import { HiDotsVertical } from 'react-icons/hi';
import { BsEmojiSmile } from 'react-icons/bs';
import { IoSendSharp } from 'react-icons/io5';

const icon = {
  bar: <FaBars />,
  search: <IoIosSearch />,
  plus: <FaImage />,
  phon: <FaPhoneAlt />,
  dot: <HiDotsVertical />,
  emoji: <BsEmojiSmile />,
  send: <IoSendSharp />,
  camera: <FaCamera />,
  close: <RiCloseLargeLine />,
};
export default icon;
