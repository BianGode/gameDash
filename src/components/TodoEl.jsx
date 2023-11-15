import "../styles/todoEl.css";

export default function TodoEl(props) {
  const parsedData = JSON.parse(props.data);

  return (
    <div className={`listElDiv ${props.isCompleted ? "completedEl" : ""}`}>
      <li>{parsedData.inputValue}</li>
      <div>
        <div
          className={`completeBtn ${props.isCompleted ? "on" : ""}`}
          onClick={() => props.toggleFun(props.index)}
        ></div>
        <div className="deleteBtn" onClick={() => props.del(props.index)}>X</div>
      </div>
    </div>
  );
}


// TodoList > TodoRender > TodoEl
                      //   TodoEl
                      //   TodoEl
                      //   TodoEl