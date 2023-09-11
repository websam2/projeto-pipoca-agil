import CardFeedback from "@/components/CardFeedback";
import Title from "@/components/Title4xl";

export default function Feedback() {
  return (
    <section className="flex flex-col text-white justify-center items-center max-w-7xl gap-10 pt-20 pb-20">
      <Title title="VEJA O QUE FALARAM SOBRE O " titleYellow="PODCAST" />
      <div className="carousel rounded-box ">
        <div className="carousel-item text-black">
          <CardFeedback
            name="Tatiane"
            feedback="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nibh arcu, eget finibus arcu molestie non.”"
          />
        </div>
        <div className="carousel-item text-black">
          <CardFeedback
            name="Tatiane"
            feedback="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nibh arcu, eget finibus arcu molestie non.”"
          />
        </div>
        <div className="carousel-item text-black">
          <CardFeedback
            name="Tatiane"
            feedback="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nibh arcu, eget finibus arcu molestie non.”"
          />
        </div>
      </div>
    </section>
  );
}
