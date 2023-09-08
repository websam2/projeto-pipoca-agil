import CardFeedback from "@/components/CardFeedback";

export default function Feedback() {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-4xl m-4">Veja o que falaram sobre o podcast</h1>
      <div className="carousel rounded-box">
        <div className="carousel-item">
          <CardFeedback
            name="Tatiane"
            feedback="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nibh arcu, eget finibus arcu molestie non.”"
          />
        </div>
        <div className="carousel-item">
          <CardFeedback
            name="Tatiane"
            feedback="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nibh arcu, eget finibus arcu molestie non.”"
          />
        </div>
        <div className="carousel-item">
          <CardFeedback
            name="Tatiane"
            feedback="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nibh arcu, eget finibus arcu molestie non.”"
          />
        </div>
      </div>
    </section>
  );
}
