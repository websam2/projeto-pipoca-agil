import Button2 from "@/components/Button2";
import Image from "next/image";
import Effect from "@/assets/icons/effect.svg";
import Loudspeaker from "@/assets/icons/loudspeaker.svg";

export default function Breadcrumbs() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center w-screen bg-yellow h-80 relative">
        <div className="flex flex-row justify-between max-w-7xl">
          <section className="flex flex-row items-center">
            <Image
              className=""
              width={80}
              height={80}
              src={Effect}
              alt="effect"
            />
            <h1 className="font-bold text-gray-dark text-5xl">
              Conheça nosso clube de assinantes
            </h1>
          </section>
          <Button2 nameButton="QUERO CONHECER" />
        </div>
        <div className="flex flex-row justify-between w-full absolute top-28">
          <Image
            className="m-8"
            width={175}
            height={175}
            src={Loudspeaker}
            alt="loudspeaker"
          />
          <Image
            className="m-8 -scale-x-100"
            width={175}
            height={175}
            src={Loudspeaker}
            alt="loudspeaker"
          />
        </div>
      </div>
    </main>
  );
}
