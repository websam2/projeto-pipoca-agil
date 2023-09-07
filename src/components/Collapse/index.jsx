export default function Collapse(props) {
  return (
    <div className="collapse collapse-arrow bg-yellow w-1/2">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-purple text-primary-content peer-checked:bg-orange2 peer-checked:text-secondary-content">
        {props.title}
      </div>
      <div className="collapse-content bg-purple text-primary-content peer-checked:bg-orange peer-checked:text-secondary-content">
        <p>{props.subTitle}</p>
      </div>
    </div>
  );
}
