import '../styles/todoEl.css'

export default function TodoEl(props) {
  return (
    <div className="listElDiv">
      <li onClick={() => props.del(props.index)}>
        { props.test }
      </li>
    </div>
  );
}
