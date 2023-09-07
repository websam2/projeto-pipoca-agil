import Image from "next/image";
import Banner from "@/assets/images/Hero.png";
import Button1 from "@/components/Button1";

export default function Hero() {
  return (
    <div className="flex flex-row bg-gradient-to-r from-purple via-purple2 via-60% to-purple justify-center items-center w-full overflow-hidden h-96 mt-24 relative">
      <section className="flex flex-col max-w-7xl gap-6">
        <h1 className="text-4xl font-semibold z-10">
          PROJETO PODCAST PIPOCA ÁGIL
        </h1>
        <p className="z-20 w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <Button1 nameButton="Browse Podcasts" />
      </section>
      <Image
        className="absolute -right-52 -top-40  z-0"
        width={900}
        height={0}
        src={Banner}
        alt="Fundo"
      />
    </div>
  );
}
