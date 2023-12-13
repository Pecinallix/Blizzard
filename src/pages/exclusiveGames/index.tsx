'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import logo from '../../../public/logo-blizzard.png';

interface Games {
  name: string;
  category: string;
  image: string;
  logo: string;
}

const ExclusiveGames = () => {
  const [array, setArray] = useState<Games[]>([]);

  useEffect(() => {
    fetch('https://api.brchallenges.com/api/blizzard/games')
      .then(async (response) => {
        const games = await response.json();
        setArray(games);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <div className="pt-14 bg-black">
      <div className="flex items-center justify-between mx-6 mb-14">
        <h1 className="text-white text-2xl font-bold leading-8">
          Jogos
          <br />
          exclusivos
        </h1>
        <span className="">
          <a href="/" className="text-sky-500 text-sm font-semibold">
            Ver todos Jogos
          </a>
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {array.map((item, key) => (
          <div key={key}>
            <Image
              className="rounded-lg"
              src={item.image}
              alt={item.name}
              width={160}
              height={218}
            />
          </div>
        ))}
        <div className="flex border-neutral-800 rounded border w-40 h-56 justify-center items-center">
          <Image src={logo} width={86} alt="logo" height={40} />
          <span>
            <a href="/" className="text-white text-sm font-semibold">
              Ver todos Jogos
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveGames;
