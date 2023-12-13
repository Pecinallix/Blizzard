'use client';

import logo from '../../../public/logo-blizzard.png';
import Image from 'next/image';

const Menu = () => {
  return (
    <div className="w-full h-20 fixed bg-transparent flex items-center justify-between border-b-2 border-opacity-10 border-white">
      <Image className="ml-6 " src={logo} alt="logo" width={70} height={32} />
      <hr className=" absolute border-b-2 border-sky-500 w-11 mt-[78px]  ml-6" />
      <button
        id="btn"
        className="mr-6 after:content-['']
         after:block after:w-7 after:h-[2px] after:bg-white after:shadow-2xshadow"
      ></button>
    </div>
  );
};

export default Menu;
