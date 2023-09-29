import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import "animate.css";
import Button from "@/components/ButtonLG";
import MenuHamburger from "@/assets/icons/menu-hamburger.svg";
import MenuClose from "@/assets/icons/close.svg";
import { useRef, useState } from "react";

export default function Header() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClickMenu = () => setIsActive(!isActive);

  return (
    <div className="flex flex-row bg-purple w-screen h-24 shadow opacity-90 justify-between items-center md:justify-center fixed md:top-0 md:left-0 z-50">
      <Image
        className="w-28 cursor-pointer inline"
        width={0}
        height={0}
        src={Logo}
        alt="Pipoca Ágil"
      />

      <Image
        className="w-20 cursor-pointer md:hidden mx-4"
        onClick={onClickMenu}
        ref={dropDownRef}
        width={0}
        height={0}
        src={MenuHamburger}
        alt="menuHamburger"
      />
      <nav
        id="menu"
        className={`z-[-1] md:opacity-100 opacity-0 absolute top-20 md:static bg-black md:bg-purple w-full md:w-auto md:py-0 py-4 md:pl-0 pl-7 
        ${isActive ? "opacity-100" : ""}`}
      >
        <ul
          id="guias"
          className="flex flex-col md:flex-row md:justify-center md:items-center"
        >
          <li className="mx-4 my-6 md:my-0 hover:bg-dark">
            <a className=" text-gray-light hover:text-yellow" href="#">
              Início
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0 hover:bg-dark">
            <a className=" text-gray-light hover:text-yellow" href="#">
              Projetos
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0 hover:bg-dark">
            <a className=" text-gray-light hover:text-yellow" href="#">
              Trilha de conhecimento
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0 hover:bg-dark">
            <a className=" text-gray-light hover:text-yellow" href="#">
              Carreira
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0 hover:bg-dark">
            <a className=" text-gray-light hover:text-yellow" href="#">
              Clube de assinantes
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0 hover:bg-dark">
            <a className=" text-gray-light hover:text-yellow" href="#">
              Galeria de fotos
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0 hover:bg-dark">
            <a className=" text-gray-light hover:text-yellow" href="#">
              Contato
            </a>
          </li>
          <Button nameButtonLG="Área de membros" />
        </ul>
      </nav>
    </div>
  );
}
