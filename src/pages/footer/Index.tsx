'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import bg from '../../../public/footer-background.png';
import app from '../../../public/ilustrations/app.png';
import appMini from '../../../public/ilustrations/app-mini.png';

import logoBattle from '../../../public/logo-battle-net.png';
import mac from '../../../public/icons-page/apple.svg';
import win from '../../../public/icons-page/win.svg';
import linux from '../../../public/icons-page/linux.svg';
import file from '../../../public/icons-page/file.svg';
import threeCircles from '../../../public/icons-page/three-circles.svg';
import buy from '../../../public/icons-page/buy.svg';
import phone from '../../../public/icons-page/phone.svg';

const Footer = () => {
  const [type, setType] = useState('');

  useEffect(() => {
    const system = window.navigator.platform;
    setType(system);
  }, []);

  return (
    <div className="md:flex">
      <Image
        src={bg}
        alt="Footer Backgound"
        placeholder="blur"
        className="absolute -z-10 object-cover brightness-75 h-[890px] w-full md:h-[607px]"
      />

      <div className="pt-16 ml-6">
        <Image src={logoBattle} alt="Logo battle net" className="h-4 w-auto" />
        <h1 className="w-72 my-8 text-white text-3xl font-bold  leading-8">
          Baixe agora o battle.net
        </h1>

        <p className="text-neutral-300 text-opacity-70 text-lg leading-loose flex gap-4 md:w-96">
          <Image
            src={file}
            alt="Icon aquivos"
            width={18}
            height={18}
            className="w-auto"
          />
          Seus jogos em um só lugar
        </p>

        <p className="flex text-neutral-300 text-opacity-70 text-lg leading-loose my-6 gap-4">
          <Image
            src={threeCircles}
            alt="Icon três círculos"
            width={18}
            height={18}
            className="w-auto"
          />
          Conecte-se aos seus amigos
        </p>

        <p className="text-neutral-300 text-opacity-70 text-lg leading-loose flex gap-4">
          <Image
            src={buy}
            alt="Icon buy"
            width={18}
            height={18}
            className="w-auto"
          />{' '}
          Compre jogos e itens digitais
        </p>

        <div className="flex gap-4">
          {type.includes('Win') ? (
            <button className="btn my-10 py-3 px-8 gap-2 font-semibold">
              <Image
                src={win}
                alt="Logo Windows"
                width={24}
                height={24}
                className="w-auto"
              />
              Baixar para o Windows
            </button>
          ) : type.includes('Mac') ? (
            <button className="btn my-10 py-3 px-8 gap-2 font-semibold">
              <Image
                src={mac}
                alt="Logo MacOS"
                width={24}
                height={24}
                className="w-auto"
              />
              Baixar para o MacOS
            </button>
          ) : (
            <button className="btn my-10 py-3 px-8 gap-2 font-semibold">
              <Image
                src={linux}
                alt="Logo Linux"
                width={24}
                height={24}
                className="w-auto"
              />
              Baixar para o Linux
            </button>
          )}
        </div>

        <div className="flex gap-4">
          <Image
            src={phone}
            alt="Logo Apple"
            width={13}
            height={20}
            className="w-auto"
          />
          <p className="text-neutral-200 text-sm font-semibold">
            Também disponível como
            <br />
            <a href="/" className="underline">
              aplicativo móvel
            </a>
          </p>
        </div>
      </div>
      <div className="overflow-hidden md:-ml-36">
        <div className="relative w-[558px] h-[330px] md:w-[831.57px] md:h-[607px] md:ml-10">
          <Image
            src={app}
            alt="Print da home"
            width={520}
            height={298}
            className="md:w-[897px] md:h-[506px]"
          />

          <Image
            src={appMini}
            alt="Print da instalação"
            width={350}
            height={168}
            className="absolute -bottom-8 right-24 md:w-[568px] md:h-[285px] md:right-20 md:bottom-28"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
