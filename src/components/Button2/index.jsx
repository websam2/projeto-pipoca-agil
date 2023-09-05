export default function Button2(props) {
  return (
    <button className="bg-gradient-to-r from-red via-orange2 to-orange hover:bg-red text-white font-bold p-4 m-4 w-80 h-24 rounded-full">
      {props.nameButton}
    </button>
  );
}
