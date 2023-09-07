export default function Button1(props) {
  return (
    <button className="bg-yellow hover:bg-gradient-to-r from-red via-orange2 to-orange hover:text-white font-bold p-4 m-4 w-64 rounded-full">
      {props.nameButton}
    </button>
  );
}
