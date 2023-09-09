import Title from "@/components/Title3xl";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function FormHome() {
  return (
    <div className="flex justify-center items-center w-full bg-yellow">
      <div className="flex flex-row justify-center items-center max-w-7xl ">
        <section className="flex flex-col w-1/2 gap-4">
          <Title
            color="red"
            title="Venha fazer parte do clube de assinantes do pipoca ágil"
          />
          <p className="text-lg">
            Para fazer parte , preencha o formulário ao lado.
          </p>
        </section>
        <section className="flex flex-col w-1/2">
          <Card
            className="flex justify-center items-center"
            color="transparent"
            shadow={false}
          >
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  className="bg-deep-purple-100"
                  size="lg"
                  label="Nome"
                  color="purple"
                />
                <Input
                  className="bg-deep-purple-100"
                  size="lg"
                  label="E-mail"
                  color="purple"
                />
                <Input
                  className="bg-deep-purple-100"
                  size="lg"
                  label="Whatsapp"
                  color="purple"
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
                className="bg-purple"
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button className="bg-purple w-48 mt-6 mb-6" fullWidth>
                Enviar
              </Button>
            </form>
          </Card>
        </section>
      </div>
    </div>
  );
}
