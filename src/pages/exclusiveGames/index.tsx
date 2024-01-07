'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Games {
  name: string;
  category: string;
  image: string;
  logo: string;
}

const ExclusiveGames = () => {
  const [array, setArray] = useState<Games[]>([]);
  const [hover, setHover] = useState<number | null>(null);

  const cardHover = (k: number) => {
    setHover(k);
  };
  const cardHoverLeave = () => {
    setHover(null);
  };

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
    <div className="pt-14 pb-16 xl:w-[1250px] xl:mx-auto">
      <div className="flex items-end justify-between mx-2 mb-14">
        <h1 className="text-white text-3xl md:text-[32px] font-bold leading-8">
          Jogos
          <br />
          exclusivos
        </h1>
        <div className="hidden md:flex gap-6">
          <Image
            src="/icons-console/blizzard.svg"
            alt="blizzard"
            width={22}
            height={22}
          />
          <Image
            src="/icons-console/nintendo.svg"
            alt="nintendo"
            width={22}
            height={22}
          />
          <Image
            src="/icons-console/xbox.svg"
            alt="xbox"
            width={22}
            height={22}
          />
          <Image
            src="/icons-console/playstation.svg"
            alt="playstation"
            width={22}
            height={22}
          />
        </div>
        <div className="flex gap-3">
          <Image
            src="/icons-page/cube-4.svg"
            alt="4 cubos"
            width={12}
            height={12}
          />
          <a
            href="/"
            className="text-sky-500 text-sm md:text-base font-semibold"
          >
            Ver todos Jogos
          </a>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8  ">
        {array.map((item, key) => (
          <div key={key} className=" relative flex-col ">
            <div className="flex items-end justify-center mb-5 overflow-hidden">
              <Image
                className={`rounded-lg w-auto md:w-[206px] md:h-[283px] xl:w-[287px] xl:h-[393px] duration-500 ${
                  hover === key ? 'scale-125' : ''
                }`}
                src={item.image}
                alt={item.name}
                width={160}
                height={218}
              />

              <Image
                className="absolute mb-2 xl:w-36 xl:h-24"
                src={item.logo}
                alt={item.name}
                width={82}
                height={54}
              />
              <div
                onMouseOver={() => cardHover(key)}
                onMouseLeave={cardHoverLeave}
                className="hover:bg-gradient-to-b hover:from-transparent hover:to-black opacity-70 w-full h-[217px] md:h-[283px] xl:h-[393px] absolute duration-500"
              ></div>
            </div>

            <div className="hidden md:block text-neutral-200">
              <h2 className="text-base font-semibold">{item.name}</h2>
              <p className="opacity-80 text-sm">{item.category}</p>
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-4 border-neutral-800 rounded border w-40 h-[208px] justify-center items-center md:w-52 md:h-[283px] xl:w-[287px] xl:h-[393px]">
          <Image
            className="w-auto mb-8 md:w-[86px] md:h-10 "
            src="/logo-blizzard.png"
            alt="logo"
            width={86}
            height={40}
            quality={100}
          />
          <div className="flex gap-3">
            <Image
              src="/icons-page/cube-4-white.svg"
              alt="4 cubos"
              width={12}
              height={12}
              className="hidden md:block"
            />
            <a
              href="/"
              className="text-white text-sm md:text-base font-semibold"
            >
              Ver todos Jogos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveGames;
