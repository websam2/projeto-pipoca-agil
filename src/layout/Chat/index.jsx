import whatsapp from "@/assets/icons/whatsapp.svg";
import Image from "next/image";

export default function Chat() {
  return (
    <>
      <a
        className="absolute bottom-0 right-0 p-4"
        href="https://wa.me/5513981331262"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image width={100} height={100} src={whatsapp} alt="whatsapp" />
      </a>
    </>
  );
}
