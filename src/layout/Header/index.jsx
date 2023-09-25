import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import "animate.css";
import Button from "@/components/ButtonLG";
import Menu from "@/assets/icons/menu-hamburger.svg";
import { useOutsideClick } from "./useOutsideClick";
import { useRef, useState } from "react";
import "/src/layout/Header/useOutsideClick.module.css";

export default function Header() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="flex flex-row bg-purple w-screen h-24 shadow opacity-90 justify-between sm:items-center sm:justify-center fixed sm:top-0 sm:left-0 z-50">
      <Image
        className="w-28 cursor-pointer"
        width={0}
        height={0}
        src={Logo}
        alt="Pipoca Ágil"
      />

      <Image
        className="w-20 cursor-pointer visible sm:invisible m-4"
        onClick={onClick}
        width={0}
        height={0}
        src={Menu}
        alt="Menu"
      />

      <nav
        ref={dropDownRef}
        className={`menuHamburger ${
          isActive ? "active" : "inactive"
        } flex flex-col sm:flex-row invisible sm:visible`}
      >
        <ul className="flex flex-col sm:flex-row justify-center items-center">
          <li className="sm:p-4 hover:bg-dark">
            <a className=" text-gray-light hover:text-yellow" href="#">
              Início
            </a>
          </li>
          <li className="sm:p-4 hover:bg-dark">
            <a className=" text-gray-light hover:text-yellow" href="#">
              Projetos
            </a>
          </li>
          <li className="sm:p-4 hover:bg-dark">
            <a className=" text-gray-light hover:text-yellow" href="#">
              Trilha de conhecimento
            </a>
          </li>
          <li className="sm:p-4 hover:bg-dark">
            <a className=" text-gray-light hover:text-yellow" href="#">
              Carreira
            </a>
          </li>
          <li className="sm:p-4 hover:bg-dark">
            <a className=" text-gray-light hover:text-yellow" href="#">
              Clube de assinantes
            </a>
          </li>
          <li className="sm:p-4 hover:bg-dark">
            <a className=" text-gray-light hover:text-yellow" href="#">
              Galeria de fotos
            </a>
          </li>
          <li className="sm:p-4 hover:bg-dark">
            <a className=" text-gray-light hover:text-yellow" href="#">
              Contato
            </a>
          </li>
        </ul>
        <Button nameButtonLG="Área de membros" />
      </nav>
    </div>
  );
}
