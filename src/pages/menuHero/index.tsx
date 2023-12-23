import Image from 'next/image';

import bgD4 from '../../../public/banner-hero/games/diablo-bg.png';

const MenuHero = () => {
  return (
    <>
      <Image
        src={bgD4}
        alt="Background Diablo IV"
        className="w-full absolute -z-10 object-cover h-[625px] brightness-75 md:h-[736px] xl:object-top"
      />
      <div className="md:grid md:grid-cols-2 xl:grid-cols-3 xl:w-[1300px] xl:mx-auto">
        <div className="hidden md:grid md:col-start-2 md:row-span-2 justify-end items-end mr-8 mb-16 xl:col-start-3">
          <Image
            src="/banner-hero/games/diablo-logo.png"
            alt="Diablo logo"
            width={280}
            height={154}
            className="mb-28 xl:mb-0 xl:mt-10"
          />

          <div className="relative hidden md:flex items-center justify-center xl:-m-6">
            <Image
              src="/icons-page/play.svg"
              alt="Icon play"
              width={51}
              height={51}
              className="absolute"
            />
            <Image
              src="/banner-hero/games/diablo-animation-cover.png"
              alt="Gif Diablo"
              width={280}
              height={158}
              className="rounded"
            />
            <p className="hidden text-white text-sm font-semibold uppercase absolute -top-7 right-0 xl:block xl:mr-7">
              Assista o trailer
            </p>
          </div>
        </div>

        <div className="w-64 pt-32 ml-6 mb-11 md:pt-48 md:row-start-1 xl:col-start-2 xl:-ml-24 ">
          <h1 className="text-white text-4xl font-bold leading-10 mb-4 md:text-[4rem] md:w-[562px] md:leading-[70px]">
            Retorne à escuridão com o game Diablo IV
          </h1>
          <p className="w-72 text-white text-lg mb-8 md:w-[525px]">
            O retorno de Lilith traz uma era de escuridão e sofrimento
          </p>
          <button className="px-8 py-5 btn font-semibold mb-2">
            Jogue Agora
          </button>
        </div>

        <div className="ml-6 mr-12 pb-[82px] md:pb-[70px] xl:grid xl:items-end xl:row-start-1 xl:mr-40">
          <ul className="flex gap-4 mt-3 xl:flex-col xl:ml-20">
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
        </div>
      </div>
      <hr className="border-b-[3px] border-sky-500 w-1/2  md:mt-4 xl:mt-[147px]" />
    </>
  );
};

export default MenuHero;
