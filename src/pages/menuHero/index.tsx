import Image from 'next/image';

import bgD4 from '../../../public/banner-hero/games/diablo-bg.png';

const MenuHero = () => {
  return (
    <>
      <Image
        src={bgD4}
        alt="Background Diablo IV"
        quality={100}
        className="w-full absolute -z-20 object-cover h-[625px] brightness-75 md:h-[736px]"
      />
      <Image
        src="/banner-hero/games/diablo-logo.png"
        alt=""
        width={280}
        height={154}
        className="hidden md:block absolute right-0 top-[100px] mr-8"
      />
      <div className="w-64 pt-32 ml-6 mb-11 md:mb-0 md:pt-48">
        <h1 className="text-white text-4xl font-bold leading-10 mb-4 md:text-[4rem] md:w-[562px] md:leading-[70px]">
          Retorne à escuridão com o game Diablo IV
        </h1>
        <p className="w-72 text-white text-lg mb-8 md:w-[525px]">
          O retorno de Lilith traz uma era de escuridão e sofrimento
        </p>
        <button className="px-8 py-5 btn font-semibold ">Jogue Agora</button>
      </div>

      <div className="ml-6 mr-12 flex justify-between items-center">
        <ul className="flex gap-4 mt-3">
          <li>
            <Image
              src="/banner-hero/icons/game-1.png"
              alt="Diablo IV"
              width={51}
              height={51}
            />
          </li>
          <li>
            <Image
              src="/banner-hero/icons/game-2.png"
              alt="Hearthstone"
              width={51}
              height={51}
              className="grayscale"
            />
          </li>
          <li>
            <Image
              src="/banner-hero/icons/game-3.png"
              alt="World of Warcraft"
              width={51}
              height={51}
              className="grayscale"
            />
          </li>
          <li>
            <Image
              src="/banner-hero/icons/game-4.png"
              alt="Diablo III"
              width={51}
              height={51}
              className="grayscale-[80%] "
            />
          </li>
          <li>
            <Image
              src="/banner-hero/icons/game-5.png"
              alt="StarCraft II"
              width={51}
              height={51}
              className="grayscale"
            />
          </li>
        </ul>

        <div className="hidden md:flex justify-center items-center relative mb-10">
          <Image
            src="/banner-hero/games/diablo-animation-cover.png"
            alt="Gif Diablo"
            width={280}
            height={158}
            className=""
          />
          <Image
            src="/icons-page/play.svg"
            alt="Icon play"
            width={51}
            height={51}
            className="absolute"
          />
        </div>
      </div>
      <hr className="border-b-[3px] border-sky-500 w-1/2 mt-[70px] md:mt-0.5" />
    </>
  );
};

export default MenuHero;
