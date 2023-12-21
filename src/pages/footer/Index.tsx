'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import bg from '../../../public/footer-background.png';

const Footer = () => {
  const [type, setType] = useState('');

  useEffect(() => {
    const system = window.navigator.platform;
    setType(system);
  }, []);

  return (
    <div className="md:flex xl:items-center xl:justify-center">
      <Image
        src={bg}
        alt="Footer Backgound"
        placeholder="blur"
        className="absolute -z-10 object-cover brightness-75 h-[890px] w-full md:h-[607px]"
      />

      <div className="pt-16 ml-6 ">
        <Image
          src="/logo-battle-net.png"
          width={150}
          height={16}
          alt="Logo battle net"
          className="h-4 w-auto xl:w-44 xl:h-6"
        />
        <h1 className="w-72 my-8 text-white text-3xl font-bold  leading-8">
          Baixe agora o battle.net
        </h1>

        <p className="text-neutral-300 text-opacity-70 text-lg leading-loose flex gap-4 md:w-96">
          <Image
            src="/icons-page/file.svg"
            alt="Icon aquivos"
            width={18}
            height={18}
            className="w-auto"
          />
          Seus jogos em um só lugar
        </p>

        <p className="flex text-neutral-300 text-opacity-70 text-lg leading-loose my-6 gap-4">
          <Image
            src="/icons-page/three-circles.svg"
            alt="Icon três círculos"
            width={18}
            height={18}
            className="w-auto"
          />
          Conecte-se aos seus amigos
        </p>

        <p className="text-neutral-300 text-opacity-70 text-lg leading-loose flex gap-4">
          <Image
            src="/icons-page/buy.svg"
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
                src="/icons-page/win.svg"
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
                src="/icons-page/apple.svg"
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
                src="/icons-page/linux.svg"
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
            src="/icons-page/phone.svg"
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
      <div className="overflow-hidden md:-ml-36 ">
        <div className="relative w-[558px] h-[330px] md:w-[831.57px] md:h-[607px] md:ml-10 xl:w-[1053px] ">
          <Image
            src="/ilustrations/app.png"
            alt="Print da home"
            width={520}
            height={298}
            className="md:w-[897px] md:h-[506px] xl:w-[1053px] xl:h-[693px]"
          />

          <Image
            src="/ilustrations/app-mini.png"
            alt="Print da instalação"
            width={350}
            height={168}
            className="absolute -bottom-8 right-24 md:w-[568px] md:h-[285px] md:right-20 md:bottom-28 xl:w-[662px] xl:h-[403px] xl:-bottom-20 xl:-right-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
