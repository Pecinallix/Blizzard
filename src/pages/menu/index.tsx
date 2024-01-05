'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import MenuJogos from 'components/dropMenuGames/dropGames/MenuJogos';
import MenuSports from 'components/dropMenuGames/dropSports/MenuSports';

const Menu: React.FC = () => {
  const [games, setGames] = useState<boolean>(false);
  const [sports, setSports] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setGames(false);
        setSports(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menuRef]);

  const openMenuGames = () => {
    setGames(!games);
    setSports(false);
  };
  const openMenuSports = () => {
    setSports(!sports);
    setGames(false);
  };

  return (
    <div ref={menuRef}>
      <div
        className={`w-full absolute border-b-2 border-opacity-10 border-white md:h-[96px] flex items-center justify-center  ${
          games || sports === true
            ? 'xl:bg-black xl:bg-opacity-70 xl:backdrop-blur-sm xl:duration-1000'
            : ''
        } `}
      >
        <div className="flex items-center h-20 justify-between w-full xl:w-[1300px]">
          <Image
            src="/logo-blizzard.png"
            alt="logo"
            width={70}
            height={32}
            className="ml-6 md:w-[86px] xl:ml-28"
          />

          <div className="hidden xl:block">
            <ul className="flex gap-9">
              <li
                onClick={openMenuGames}
                className={` text-sm font-medium after:content-[''] after:border-r-[2px] after:border-b-[2px] after:inline-block after:p-1  after:ml-3 after:opacity-70 hover:cursor-pointer ${
                  games === true
                    ? 'after:rotate-[225deg] after:duration-500 duration-500 text-sky-400'
                    : 'after:rotate-45 text-white'
                }`}
              >
                Jogos
              </li>
              <li
                onClick={openMenuSports}
                className={` text-sm font-medium after:content-[''] after:border-r-[2px] after:border-b-[2px] after:inline-block after:p-1  after:ml-3 after:opacity-70 hover:cursor-pointer ${
                  sports === true
                    ? 'after:rotate-[225deg] after:duration-500 duration-500 text-sky-400'
                    : 'after:rotate-45 text-white'
                }`}
              >
                Esportes
              </li>
              <li className="text-white text-sm font-medium">Loja</li>
              <li className="text-white text-sm font-medium">Notícias</li>
              <li className="text-white text-sm font-medium">Suporte</li>
            </ul>
          </div>

          <div className="md:flex gap-4 mr-16 xl:mr-28">
            <button className="md:flex hidden btn hover:bg-white hover:text-black py-[10px] px-6 bg-transparent border text-sm font-medium">
              Criar Conta
            </button>

            <button className="hidden btn gap-2 py-[10px] px-6 items-center md:flex">
              <Image
                src="/icons-page/login.svg"
                alt="Icon Login"
                width={18}
                height={18}
              />
              Logar
            </button>

            <button
              className="after:content-['']
         after:block after:w-7 after:h-[2px] after:bg-white after:shadow-2xshadow xl:hidden md:ml-6"
            ></button>
          </div>
          <hr className="absolute border-b-2 border-sky-500 w-11 ml-6 -bottom-0.5 xl:ml-28" />
        </div>
      </div>

      {games === true ? <MenuJogos /> : sports === true ? <MenuSports /> : null}
    </div>
  );
};

export default Menu;
