export default function Card({ id }) {
  return (
    <section>
      <a
        href={`https://www.youtube.com/watch?v=${id}`}
        rel="noreferrer noopener"
        target="_blank"
      >
        <img
          className="w-56 rounded-lg"
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
          alt="Capa"
        />
      </a>
    </section>
  );
}
