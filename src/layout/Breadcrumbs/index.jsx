import Button from "@/components/ButtonXL";
import Image from "next/image";
import Effect from "@/assets/icons/effect.svg";
import Loudspeaker from "@/assets/icons/loudspeaker.svg";

export default function Breadcrumbs() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center w-screen bg-yellow h-56 sm:h-80 relative">
        <div className="flex flex-col sm:flex-row justify-between max-w-7xl z-10">
          <section className="flex flex-col sm:flex-row items-center">
            <Image
              className="w-10 sm:w-36 top-10 sm:top-20 left-2 sm:left-14 absolute"
              width={0}
              height={0}
              src={Effect}
              alt="effect"
            />
            <h1 className="font-bold text-gray-dark text-base sm:text-5xl">
              Conheça nosso clube de assinantes
            </h1>
          </section>
          <Button nameButtonXL="QUERO CONHECER" />
        </div>

        <Image
          className="w-16 sm:w-[10%] bottom-0 left-0 absolute z-0"
          width={0}
          height={0}
          src={Loudspeaker}
          alt="loudspeaker"
        />
        <Image
          className="w-16 sm:w-[10%] bottom-0 right-0 -scale-x-100 absolute z-0"
          width={0}
          height={0}
          src={Loudspeaker}
          alt="loudspeaker"
        />
      </div>
    </main>
  );
}
