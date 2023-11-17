
export default function TodoElCopy(props) {

  return (
    <div className={`listElDiv ${props.isCompleted ? "completedEl" : ""}`}>
      <li>{parsedData.inputValue}</li>
      <div>
        <div
          className={`completeBtn ${props.isCompleted ? "on" : ""}`}
          // onClick={() => props.toggleFun(props.index)}
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