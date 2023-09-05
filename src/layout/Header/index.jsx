import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import "animate.css";

export default function Header() {
  return (
    <nav
      className="flex bg-purple w-full shadow flex-row opacity-95 items-center justify-center fixed top-0 left-0 z-50"
      data-aos="flip-up"
    >
      <Image
        className="p-2"
        width={80}
        height={80}
        src={Logo}
        alt="Pipoca Ágil"
      />
      <ul className="flex">
        <li class="p-4">
          <a class="p-4 text-gray-light hover:text-yellow" href="#">
            Início
          </a>
        </li>
        <li class="p-4">
          <a class="p-4 text-gray-light hover:text-yellow" href="#">
            Projetos
          </a>
        </li>
        <li class="p-4">
          <a class="p-4 text-gray-light hover:text-yellow" href="#">
            Trilha de conhecimento
          </a>
        </li>
        <li class="p-4">
          <a class="p-4 text-gray-light hover:text-yellow" href="#">
            Carreira
          </a>
        </li>
        <li class="p-4">
          <a class="p-4 text-gray-light hover:text-yellow" href="#">
            Clube de assinantes
          </a>
        </li>
        <li class="p-4">
          <a class="p-4 text-gray-light hover:text-yellow" href="#">
            Galeria de fotos
          </a>
        </li>
        <li class="p-4">
          <a class="p-4 text-gray-light hover:text-yellow" href="#">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}