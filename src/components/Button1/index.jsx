export default function Button1(props) {
  return (
    <button className="bg-yellow hover:bg-red font-bold p-4 m-4 w-64 rounded-full">
      {props.nameButton}
    </button>
  );
}
