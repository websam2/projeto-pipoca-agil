import Image from "next/image";
import Banner from "@/assets/images/Hero.png";
import Button1 from "@/components/Button1";

export default function Hero() {
  return (
    <div className="flex flex-row justify-center p-4 items-center max-w-7xl mt-24 relative">
      <section className="flex flex-col w-1/2">
        <h1 className="text-2xl font-black">PROJETO PODCAST PIPOCA ÁGIL</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <Button1 nameButton="Browse Podcasts" />
      </section>
      <div className="w-1/2">
        {/* <Image
          className="object-contain w-full h-full"
          width={1200}
          height={0}
          src={Banner}
          alt="Fundo"
        /> */}
      </div>
    </div>
  );
}
