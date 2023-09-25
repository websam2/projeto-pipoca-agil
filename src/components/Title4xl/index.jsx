export default function Title(props) {
  return (
    <h4 className="text-center text-base sm:text-4xl font-semibold">
      {props.title}
      <span className="text-yellow">{props.titleYellow}</span>
      <span className="text-purple">{props.titlePurple}</span>
    </h4>
  );
}
