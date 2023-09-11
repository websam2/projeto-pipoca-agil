export default function Title(props) {
  return (
    <h4 className="text-4xl font-semibold">
      {props.title}
      <span className="text-yellow">{props.titleYellow}</span>
      <span className="text-purple">{props.titlePurple}</span>
    </h4>
  );
}
