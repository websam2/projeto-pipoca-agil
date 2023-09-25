import Title from "@/components/Title3xl";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Ray from "@/assets/icons/energia.svg";
import Image from "next/image";

export default function FormHome() {
  return (
    <div className="flex justify-center items-center w-full bg-yellow pt-20 pb-20">
      <div className="flex flex-col sm:flex-row justify-center items-center max-w-7xl">
        <section className="flex flex-col p-4 sm:w-1/2 relative">
          <div className="gap-6 z-40">
            <Title title="Venha fazer parte do clube de assinantes do pipoca ágil" />
            <p className="text-lg text-center m-4">
              Para fazer parte , preencha o formulário ao lado.
            </p>
          </div>
          <Image
            className="absolute -top-20 sm:-left-20 z-0"
            width={100}
            height={100}
            src={Ray}
            alt="ray"
          />
        </section>

        <section className="flex flex-col w-1/2">
          <Card
            className="flex justify-center items-center"
            color="transparent"
            shadow={false}
          >
            <form className="flex flex-col sm:mt-8 items-center">
              <div className="sm:mb-4 flex flex-col gap-6 w-full">
                <Input
                  className="bg-gray-light"
                  size="lg"
                  label="Nome"
                  color="black"
                />
                <Input
                  className="bg-gray-light"
                  size="lg"
                  label="E-mail"
                  color="black"
                />
                <Input
                  className="bg-gray-light"
                  size="lg"
                  label="Whatsapp"
                  color="black"
                />
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    Eu, aceito receber conteúdos do Pipoca ágil.
                  </Typography>
                }
                className="bg-gray-dark"
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button className="bg-purple w-48 mt-6" fullWidth>
                Enviar
              </Button>
            </form>
          </Card>
        </section>
      </div>
    </div>
  );
}
