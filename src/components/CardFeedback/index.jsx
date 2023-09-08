import Image from "next/image";
import Woman from "@/assets/images/woman.png";

export default function CardFeedback(props) {
  return (
    <div className="card items-center w-96 m-4 bg-yellow p-4 shadow-xl rounded-lg">
      <figure className="bg-gradient-to-b from-purple to-white w-32 h-32 rounded-full">
        <Image width={110} height={0} src={Woman} alt="woman" />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">{props.name}</h2>
        <p className="text-center">{props.feedback}</p>
      </div>
    </div>
  );
}
