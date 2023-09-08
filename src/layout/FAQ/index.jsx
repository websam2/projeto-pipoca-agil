import Collapse from "@/components/Collapse";
import Image from "next/image";
import Microfone from "@/assets/images/Microfone.png";

export default function FAQ() {
  return (
    <section className="flex flex-col justify-center items-center w-full p-4 bg-yellow relative">
      <h1 className="text-4xl m-4">PERGUNTAS FREQUENTES SOBRE O PODCAST</h1>
      <div className="flex flex-col justify-center items-center w-full gap-6">
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
        className="absolute top-0 right-4"
        width={100}
        height={0}
        src={Microfone}
        alt="microfone"
      />
      <Image
        className="absolute bottom-0 left-4 -scale-y-100 -scale-x-100"
        width={100}
        height={0}
        src={Microfone}
        alt="microfone"
      />
    </section>
  );
}
