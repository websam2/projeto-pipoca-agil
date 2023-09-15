import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import LogoYoutube from "@/assets/icons/LogoYoutube.svg";
import LogoFacebook from "@/assets/icons/LogoFacebook.svg";
import LogoInstagram from "@/assets/icons/LogoInstagram.svg";
import LogoTwitter from "@/assets/icons/LogoTwitter.svg";
import CardSocial from "@/components/CardSocial";
import Chat from "@/layout/Chat";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-black w-full gap-4 relative">
      <section className="flex flex-row justify-center items-center mt-9">
        <h1 className="text-white text-lg">
          NOSSAS <span className="font-bold">REDES SOCIAIS</span>
        </h1>
        <Image src={Logo} alt="Logo" width={100} height={100} />
      </section>
      <div className="flex flex-row gap-4">
        <CardSocial
          title="NOSSO"
          subTitle="YOUTUBE"
          LogoYoutube={LogoYoutube}
        />
        <CardSocial
          title="NOSSO"
          subTitle="FACEBOOK"
          LogoYoutube={LogoFacebook}
        />
        <CardSocial
          title="NOSSO"
          subTitle="INSTAGRAM"
          LogoYoutube={LogoInstagram}
        />
        <CardSocial
          title="NOSSO"
          subTitle="TWITTER"
          LogoYoutube={LogoTwitter}
        />
      </div>
      <p className="text-white text-sm mt-9">
        © 2023 por Podcast Pipoca Ágil | Orgulhosamente criado por Ibson Cabral
      </p>
      <Chat />
    </div>
  );
}
