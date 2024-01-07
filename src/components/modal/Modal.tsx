import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

type loginClose = {
  openModal: () => void;
};
const Modal: React.FC<loginClose> = ({ openModal }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        openModal();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [modalRef]);

  return (
    <div className=" flex  justify-center  items-center bg-black bg-opacity-60 z-30 w-full h-full fixed">
      <div
        ref={modalRef}
        className=" absolute z-50 flex flex-col justify-center items-center w-[696px] h-[600px]"
        style={{
          backgroundImage:
            'linear-gradient(to left, rgba(0, 0, 0, 0.8) 60%, transparent 100%), url(/bg-modal.png)   '
        }}
      >
        <Image
          src="/icons-page/x.svg"
          alt="X icon"
          width={38}
          height={38}
          className="absolute top-6 right-6 cursor-pointer "
          onClick={openModal}
        />
        <Image
          src="/logo-battle-net.png"
          alt=""
          width={166}
          height={20}
          className="mb-10"
        />
        <form action="" className="gap-4 mb-6 flex flex-col w-[426px]">
          <input
            type="text"
            placeholder="E-mail ou telefone"
            className="h-12 rounded pl-4 focus:border-sky-500 focus:border-2 outline-none focus:placeholder-black
            hover:border-sky-500 hover:border-2  hover:placeholder-black"
          />
          <input
            type="text"
            placeholder="Senha"
            className="h-12 rounded pl-4 focus:border-sky-500 focus:border-2 outline-none focus:placeholder-black
            hover:border-sky-500 hover:border-2  hover:placeholder-black"
          />
        </form>
        <button className="btn mb-10 w-[426px] px-16  py-5 ">
          Conectar-se
        </button>
        <div className="mb-9">
          <p className="mb-4 text-white">ou conecte-se com </p>
          <div className="flex gap-4">
            <Image
              src="/icons-page/google.svg"
              alt="google icon"
              width={48}
              height={48}
              className="cursor-pointer"
            />

            <Image
              src="/icons-page/apple-black.svg"
              alt="apple icon"
              width={48}
              height={48}
              className="cursor-pointer"
            />

            <Image
              src="/icons-page/facebook.svg"
              alt="facebook icons"
              width={48}
              height={48}
              className="cursor-pointer"
            />
          </div>
        </div>
        <h2 className="text-white text-base font-medium mb-4">
          <span className="text-sky-500 text-base font-medium underline cursor-pointer">
            Crie uma conta
          </span>{' '}
          Battle.net de graça
        </h2>
        <h2 className="text-sky-500 text-base font-medium underline cursor-pointer">
          Não consegue logar?{' '}
        </h2>
      </div>
    </div>
  );
};

export default Modal;
