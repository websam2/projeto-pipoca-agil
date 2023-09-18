import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import "animate.css";
import Button from "@/components/ButtonLG";
import Menu from "@/assets/icons/menu-hamburger.png";
import { useOutsideClick } from "./useOutsideClick";
import { useRef, useState } from "react";
import "/src/layout/Header/useOutsideClick.module.css";

export default function Header() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  console.log(isActive);

  return (
    <div className="flex bg-purple sm:w-full shadow sm:flex-row flex-col opacity-90 items-center justify-center sm:fixed sm:top-0 sm:left-0 z-50">
      <button className="cursor-pointer hidden sm:visible" onClick={onClick}>
        <Image width={50} height={0} src={Menu} alt="menu" />
      </button>
      <Image width={110} height={0} src={Logo} alt="Pipoca Ágil" />
      <nav
        ref={dropDownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <ul className="flex">
          <li class="sm:p-4 hover:bg-dark">
            <a class=" text-gray-light hover:text-yellow" href="#">
              Início
            </a>
          </li>
          <li class="sm:p-4 hover:bg-dark">
            <a class=" text-gray-light hover:text-yellow" href="#">
              Projetos
            </a>
          </li>
          <li class="sm:p-4 hover:bg-dark">
            <a class=" text-gray-light hover:text-yellow" href="#">
              Trilha de conhecimento
            </a>
          </li>
          <li class="sm:p-4 hover:bg-dark">
            <a class=" text-gray-light hover:text-yellow" href="#">
              Carreira
            </a>
          </li>
          <li class="sm:p-4 hover:bg-dark">
            <a class=" text-gray-light hover:text-yellow" href="#">
              Clube de assinantes
            </a>
          </li>
          <li class="sm:p-4 hover:bg-dark">
            <a class=" text-gray-light hover:text-yellow" href="#">
              Galeria de fotos
            </a>
          </li>
          <li class="sm:p-4 hover:bg-dark">
            <a class=" text-gray-light hover:text-yellow" href="#">
              Contato
            </a>
          </li>
        </ul>
      </nav>
      <Button nameButtonLG="Área de membros" />
    </div>
  );
}
