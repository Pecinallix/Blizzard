'use client';

import Image from 'next/image';

import bgD4 from '../../../public/banner-hero/games/diablo-bg.png';
import hos from '../../../public/banner-hero/games/hearthstone-bg.png';
import wow from '../../../public/banner-hero/games/wow-bg.png';
import React, { ReactEventHandler, useState } from 'react';

const MenuHero: React.FC = () => {
  const [listGames] = useState([
    { src: '/banner-hero/icons/game-1.png', alt: 'Diablo IV' },
    { src: '/banner-hero/icons/game-2.png', alt: 'Hearthstone' },
    { src: '/banner-hero/icons/game-3.png', alt: 'World of Warcraft' },
    { src: '/banner-hero/icons/game-4.png', alt: 'Diablo III' },
    { src: '/banner-hero/icons/game-5.png', alt: 'StarCraft II' }
  ]);

  const [banner, setBanner] = useState('');
  const [gif, setGif] = useState(
    '/banner-hero/games/diablo-animation-cover.png'
  );
  const [play, setPlay] = useState('/icons-page/play.svg');
  const [selectedGame, setSelectedGame] = useState('Diablo IV');

  const tradeBanner: ReactEventHandler<HTMLImageElement> = (e) => {
    setBanner(e.currentTarget.alt);
    setGif(
      e.currentTarget.alt === 'Hearthstone'
        ? '/banner-hero/games/hearthstone-animation-cover.png'
        : e.currentTarget.alt === 'World of Warcraft'
          ? '/banner-hero/games/wow-animation-cover.png'
          : '/banner-hero/games/diablo-animation-cover.png'
    );
    setSelectedGame(e.currentTarget.alt);
  };
  const tradeGif = () => {
    setGif(
      banner === 'Hearthstone'
        ? '/banner-hero/games/hearthstone-animation.gif'
        : banner === 'World of Warcraft'
          ? '/banner-hero/games/wow-animation.gif'
          : '/banner-hero/games/diablo-animation.gif'
    );
    setPlay('/icons-page/play-blue.svg');
  };
  const tradeGifLeave = () => {
    setGif(
      banner === 'Hearthstone'
        ? '/banner-hero/games/hearthstone-animation-cover.png'
        : banner === 'World of Warcraft'
          ? '/banner-hero/games/wow-animation-cover.png'
          : '/banner-hero/games/diablo-animation-cover.png'
    );
    setPlay('/icons-page/play.svg');
  };

  return (
    <div className="relative h-[625px] md:h-[736px] ">
      <Image
        src={
          banner === 'Hearthstone'
            ? hos
            : banner === 'World of Warcraft'
              ? wow
              : bgD4
        }
        alt="Background Diablo IV"
        className="w-full h-[625px] md:h-[736px] absolute -z-10 object-cover brightness-75 xl:object-top"
      />
      <div className="md:grid md:grid-cols-2 xl:grid-cols-3 xl:w-[1300px] xl:mx-auto ">
        <div className="hidden md:grid md:col-start-2 md:row-span-2 justify-end items-end mr-8 mb-16 xl:col-start-3">
          <Image
            src={
              banner === 'Hearthstone'
                ? '/banner-hero/games/hearthstone-logo.png'
                : banner === 'World of Warcraft'
                  ? '/banner-hero/games/wow-logo.png'
                  : '/banner-hero/games/diablo-logo.png'
            }
            alt="Diablo logo"
            width={280}
            height={154}
            className="mb-28 xl:mb-0 xl:mt-10 "
          />

          <div
            onMouseEnter={tradeGif}
            onMouseLeave={tradeGifLeave}
            className="relative flex items-center justify-center xl:-m-6 cursor-pointer w-72 h-40 "
          >
            <Image
              src={play}
              alt="Icon play"
              width={55}
              height={55}
              className={`absolute ${
                play === '/icons-page/play-blue.svg'
                  ? 'rounded-full border-4 border-sky-400 border-opacity-60'
                  : ''
              }`}
            />
            <Image
              src={gif}
              alt="Gif Diablo"
              width={280}
              height={158}
              className="rounded h-[158px]"
            />
            <p className="text-white text-sm font-semibold uppercase absolute -top-7 right-0 xl:block xl:mr-7">
              Assista o trailer
            </p>
          </div>
        </div>

        <div className="w-64 pt-32 ml-6 mb-11 md:pt-48 md:row-start-1 xl:col-start-2 xl:-ml-24 ">
          <h1
            className={`text-white font-bold  leading-10 mb-4 text-4xl md:text-[4rem] md:w-[562px]  ${
              banner === 'Hearthstone'
                ? 'md:leading-[60px]'
                : banner === 'World of Warcraft'
                  ? 'md:w-[600px] md:leading-[70px]'
                  : 'md:leading-[70px]'
            }`}
          >
            {banner === 'Hearthstone'
              ? 'Novo pacote de expansão de Hearthstone'
              : banner === 'World of Warcraft'
                ? 'Desbrave as Terras Sombrias em Shadowlands!'
                : 'Retorna à escuridão com o game Diablo IV'}
          </h1>
          <p className="w-72 text-white text-lg mb-8 md:w-[525px]">
            {banner === 'Hearthstone'
              ? 'A Horda e a Aliança se encontraram no Vale Alterac para lutar'
              : banner === 'World of Warcraft'
                ? 'O que jaz além do mundo que você conhece?'
                : 'O retorno de Lilith traz uma era de escuridão e sofrimento'}
          </p>
          <button
            className={`px-8 py-5  btn font-semibold mb-2 hover:scale-125 ${
              banner === 'Hearthstone'
                ? 'text-xs '
                : banner === 'World of Warcraft'
                  ? 'text-xs '
                  : ''
            }`}
          >
            {banner === 'Hearthstone'
              ? 'Reserve agora na pré-venda'
              : banner === 'World of Warcraft'
                ? 'Reserve agora na pré-venda'
                : 'Jogue Agora'}
          </button>
        </div>

        <div className="ml-6 mr-12 pb-[82px] md:pb-[70px] xl:grid xl:items-end xl:row-start-1 xl:mr-40">
          <ul className="flex gap-4 mt-3 xl:flex-col xl:ml-20">
            {listGames.map(({ src, alt }) => (
              <li key={alt}>
                <Image
                  src={src}
                  alt={alt}
                  width={51}
                  height={51}
                  className={`hover:scale-125 hover:grayscale-0 cursor-pointer  ${
                    selectedGame === alt ? 'grayscale-0' : 'grayscale'
                  }`}
                  onClick={tradeBanner}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr
        className={`absolute bottom-0 border-[2px] border-sky-500
        ${
          banner === 'Hearthstone'
            ? 'w-2/4'
            : banner === 'World of Warcraft'
              ? 'w-3/4'
              : banner === 'Diablo IV'
                ? 'w-1/4'
                : banner === ''
                  ? 'w-1/4'
                  : 'w-full'
        } transition-all duration-500  `}
      />
    </div>
  );
};

export default MenuHero;
