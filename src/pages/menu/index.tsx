'use client';

import logo from '../../../public/logo-blizzard.png';
import Image from 'next/image';

const Menu = () => {
  return (
    <div className="w-full h-20 absolute flex items-center justify-between border-b-2 border-opacity-10 border-white">
      <Image
        className="ml-6 w-auto"
        src={logo}
        alt="logo"
        width={70}
        height={32}
      />
      <hr className=" absolute border-b-2 border-sky-500 w-11 mt-[78px]  ml-6" />

      <div className="md:flex gap-4 ">
        <button className="md:flex hidden btn py-[10px] px-6 bg-transparent border text-sm font-medium">
          Criar Conta
        </button>

        <button className="md:flex hidden btn gap-2 py-[10px] px-6 items-center mr-16">
          <Image
            src="/icons-page/login.svg"
            alt="Icon Login"
            width={18}
            height={18}
          />
          Logar
        </button>

        <button
          className="mr-6 after:content-['']
         after:block after:w-7 after:h-[2px] after:bg-white after:shadow-2xshadow"
        ></button>
      </div>
    </div>
  );
};

export default Menu;
