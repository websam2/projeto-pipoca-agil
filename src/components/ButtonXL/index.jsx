export default function Button(props) {
  return (
    <button className="bg-dark hover:bg-gradient-to-r from-red via-orange2 to-orange text-white font-bold p-4 m-4 w-80 h-24 rounded-full">
      {props.nameButtonXL}
    </button>
  );
}
