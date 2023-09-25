import Image from "next/image";

export default function CardSocial(props) {
  return (
    <section className="card card-body justify-center items-center bg-white bg-opacity-50 w-10 h-10 sm:w-28 sm:h-28 sm:p-8">
      <Image
        className=""
        src={props.LogoYoutube}
        alt="Logo"
        width={0}
        height={0}
      />
      <p className="text-white text-center text-xs sm:text-sm">
        {props.title} <span className="font-bold">{props.subTitle}</span>
      </p>
    </section>
  );
}
