export default function Button(props) {
  return (
    <button className="bg-yellow hover:bg-gradient-to-r from-red via-orange2 to-orange hover:text-white font-bold p-4 m-4 sm:w-64 rounded-full">
      {props.nameButtonLG}
    </button>
  );
}
