'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import games from './Games.json';

interface MenuGames {
  description: string;
  image: string;
}

const MenuJogos = () => {
  const [dados, setDados] = useState<MenuGames[]>([]);

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
    <div className="flex flex-col items-center justify-end z-10 w-full h-[640px] absolute top-0 bg-black bg-opacity-70 backdrop-blur-sm mt-[96px]">
      <div className="flex justify-center items-end">
        <ul className="flex flex-wrap w-full gap-8 mx-28 justify-center items-center">
          {dados.map((item, key) => (
            <li
              key={key}
              className="w-44 h-44 flex flex-col justify-center items-center"
            >
              <Image src={item.image} alt="d3" width={69} height={69} />
              <p className="w-28 text-center text-neutral-400 text-sm font-medium mt-2 leading-4">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-[70px] flex items-center justify-center border-t border-black gap-44 bg-zinc-900 opacity-70">
        <div className="flex gap-3">
          <Image
            src="/icons-page/cube-4-white.svg"
            alt="4 cubos"
            width={12}
            height={12}
          />
          <a href="/" className="text-white text-base font-semibold">
            Ver todos Jogos
          </a>
        </div>
        <div className="flex gap-3">
          <Image
            src="/icons-console/blizzard.svg"
            alt="4 cubos"
            width={12}
            height={12}
          />
          <a href="/" className="text-white text-base font-semibold">
            Aplicativo Battle.net
          </a>
        </div>
        <div className="flex gap-3">
          <Image
            src="/icons-page/cube-4-white.svg"
            alt="4 cubos"
            width={12}
            height={12}
          />
          <a href="/" className="text-white text-base font-semibold">
            Downloads
          </a>
        </div>
        <div className="flex gap-3">
          <Image
            src="/icons-page/cube-4-white.svg"
            alt="4 cubos"
            width={12}
            height={12}
          />
          <a href="/" className="text-white text-base font-semibold">
            Fóruns dos jogos
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuJogos;
