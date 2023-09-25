import Image from "next/image";
import Spotify from "@/assets/icons/1-spotify-logo.svg";
import Podcasts from "@/assets/icons/2-podcasts-logo.svg";
import Google from "@/assets/icons/3-google-logo.svg";
import Overcast from "@/assets/icons/4-overcast-logo.svg";
import Canal from "@/assets/icons/5-canal-logo.svg";

export default function Platform() {
  return (
    <section className="flex flex-col justify-center items-center w-full h-96 bg-dark">
      <h1 className="text-center sm:text-3xl text-white m-4">
        Ouça agora em nossas plataformas de áudio digitais
      </h1>
      <div className="flex flex-row justify-center items-center m-4 gap-8">
        <Image
          className="w-11 sm:w-24"
          width={0}
          height={0}
          src={Spotify}
          alt="Logo"
        />
        <Image
          className="w-11 sm:w-24"
          width={0}
          height={0}
          src={Podcasts}
          alt="Logo"
        />
        <Image
          className="w-11 sm:w-24"
          width={0}
          height={0}
          src={Google}
          alt="Logo"
        />
        <Image
          className="w-11 sm:w-24"
          width={0}
          height={0}
          src={Overcast}
          alt="Logo"
        />
        <Image
          className="w-11 sm:w-24"
          width={0}
          height={0}
          src={Canal}
          alt="Logo"
        />
      </div>
    </section>
  );
}
