import Collapse from "@/components/Collapse";
import Image from "next/image";
import Microfone from "@/assets/images/Microfone.png";
import Title from "@/components/Title4xl";

export default function FAQ() {
  return (
    <section className="flex flex-col justify-center items-center w-full p-4 pt-20 pb-16 bg-yellow relative">
      <Title title="PERGUNTAS FREQUENTES SOBRE O " titlePurple="PODCAST" />
      <div className="flex flex-col justify-center items-center max-w-7xl mt-10 gap-6">
        <Collapse title="Sobre o que é o podcast?" subTitle="Falta dados" />
        <Collapse
          title="Posso sugerir tópicos ou enviar perguntas para o podcast?"
          subTitle="Falta dados"
        />
        <Collapse
          title="Como posso assinar o podcast para receber atualizações automáticas?"
          subTitle="Falta dados"
        />
        <Collapse
          title="Existe uma comunidade ou fórum associado ao podcast?"
          subTitle="Falta dados"
        />
      </div>
      <Image
        className="w-[8%] absolute top-0 right-4"
        width={0}
        height={0}
        src={Microfone}
        alt="microfone"
      />
      <Image
        className="w-[8%] absolute bottom-0 left-4 -scale-y-100 -scale-x-100"
        width={0}
        height={0}
        src={Microfone}
        alt="microfone"
      />
    </section>
  );
}
