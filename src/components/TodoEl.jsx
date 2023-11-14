import '../styles/todoEl.css'

export default function TodoEl(props) {

  const parsedData = JSON.parse(props.data);

  return (
    <div className="listElDiv greenEl">
      <li onClick={() => props.del(props.index)}>
        { parsedData.inputValue }
      </li>
      <div className='completeBtn'></div>
    </div>
  );
}
