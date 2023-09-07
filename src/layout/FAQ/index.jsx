import Collapse from "@/components/Collapse";

export default function FAQ() {
  return (
    <div className="flex flex-col justify-center items-center w-full p-4 bg-yellow">
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
    </div>
  );
}
