import Image from "next/image";

export default function CardSocial(props) {
  return (
    <section className="card card-body justify-center items-center bg-white bg-opacity-50 w-28 h-28 p-8">
      <Image src={props.LogoYoutube} alt="Logo" width={100} height={100} />
      <p className="text-white text-center text-sm">
        {props.title} <span className="font-bold">{props.subTitle}</span>
      </p>
    </section>
  );
}
