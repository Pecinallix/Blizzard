import Image from 'next/image';

import d4 from '../../../public/banner-hero/icons/game-1.png';
import hs from '../../../public/banner-hero/icons/game-2.png';
import wow from '../../../public/banner-hero/icons/game-3.png';
import d3 from '../../../public/banner-hero/icons/game-4.png';
import sc2 from '../../../public/banner-hero/icons/game-5.png';

import bgD4 from '../../../public/banner-hero/games/diablo-bg.png';

const MenuHero = () => {
  return (
    <>
      <Image
        src={bgD4}
        alt="Background Diablo IV"
        placeholder="blur"
        quality={100}
        className="w-full absolute -z-10 object-cover h-[625px] brightness-75"
      />
      <div className="w-64 pt-32 ml-6 mb-12">
        <h1 className="text-white text-4xl font-bold leading-10 mb-4">
          Retorne à escuridão com o game Diablo IV
        </h1>
        <p className="w-72 text-white text-lg mb-8">
          O retorno de Lilith traz uma era de escuridão e sofrimento
        </p>
        <button className="w-44 h-14 btn font-semibold">Jogue Agora</button>
      </div>

      <div className="ml-6">
        <ul className="flex gap-4">
          <li>
            <Image src={d4} alt="Diablo IV" width={48} height={48} />
          </li>
          <li>
            <Image src={hs} alt="Hearthstone" width={48} height={48} />
          </li>
          <li>
            <Image src={wow} alt="World of Warcraft" width={48} height={48} />
          </li>
          <li>
            <Image src={d3} alt="Diablo III" width={48} height={48} />
          </li>
          <li>
            <Image src={sc2} alt="StarCraft II" width={48} height={48} />
          </li>
        </ul>
      </div>
      <hr className="border-b-[3px] border-sky-500 w-1/2 mt-[77px]" />
    </>
  );
};

export default MenuHero;
