'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import games from './Games.json';

interface MenuGames {
  description: string;
  image: string;
}

const MenuGames = () => {
  const [dados, setDados] = useState<MenuGames[]>([]);
  const [hover, setHover] = useState<number | null>(null);

  const Hover = (h: number) => {
    setHover(h);
  };

  const HoverLeave = () => {
    setHover(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDados(games);
      } catch (error) {
        console.error('Erro:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="hidden overflow-hidden xl:flex flex-col items-center justify-end z-30 w-full h-[570px] absolute top-0 bg-black bg-opacity-70 backdrop-blur-sm mt-[96px] animate-games">
      <div className="flex justify-center items-end w-[1500px]">
        <ul className="flex flex-wrap gap-8 mx-28 my-14 justify-center items-center">
          {dados.map((item, key) => (
            <li
              key={key}
              onMouseOver={() => Hover(key)}
              onMouseLeave={HoverLeave}
              className="w-44 h-44 flex flex-col justify-center items-center hover:bg-black hover:bg-opacity-50 rounded-md "
            >
              <Image
                src={item.image}
                alt="d3"
                width={69}
                height={69}
                className={`duration-300 ${hover === key ? 'scale-125' : ''}`}
              />
              <p className="w-28 text-center text-neutral-400 text-sm font-medium mt-2 leading-4">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-[70px] flex items-center justify-center  gap-20 bg-zinc-900">
        <div className="flex gap-3">
          <Image
            src="/drop-down/cube-4-blue.svg"
            alt="4 cubos"
            width={14}
            height={14}
          />
          <a href="/" className="text-white text-base font-semibold">
            Ver todos Jogos
          </a>
        </div>
        <div className="flex gap-3">
          <Image
            src="/drop-down/blizzard.svg"
            alt="logo blizzard"
            width={22}
            height={22}
          />
          <a href="/" className="text-white text-base font-semibold">
            Aplicativo Battle.net
          </a>
        </div>
        <div className="flex gap-3">
          <Image
            src="/drop-down/download.svg"
            alt="Download"
            width={24}
            height={24}
          />
          <a href="/" className="text-white text-base font-semibold">
            Downloads
          </a>
        </div>
        <div className="flex gap-3">
          <Image
            src="/drop-down/speak.svg"
            alt="Balão de fala"
            width={24}
            height={24}
          />
          <a href="/" className="text-white text-base font-semibold">
            Fóruns dos jogos
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuGames;
