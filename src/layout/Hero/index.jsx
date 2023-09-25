import Image from "next/image";
import Banner from "@/assets/images/Hero.png";
import Button from "@/components/ButtonLG";
import Title from "@/components/Title4xl";

export default function Hero() {
  return (
    <div className="flex flex-col sm:flex-row bg-gradient-to-r from-purple via-purple2 via-60% to-purple sm:justify-center sm:items-center w-full overflow-hidden h-[550px] sm:h-96 mt-24 p-4 relative">
      <section className="flex flex-col sm:max-w-7xl gap-6 mt-7 sm:mt-7">
        <Title title="PROJETO PODCAST PIPOCA ÁGIL" />
        <p className="z-20 text-sm sm:text-xl sm:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <Button nameButtonLG="Browse Podcasts" />
      </section>
      <Image
        className="absolute -right-10 top-80 sm:-right-52 sm:-top-40 z-0"
        width={900}
        height={900}
        src={Banner}
        alt="Fundo"
      />
    </div>
  );
}
