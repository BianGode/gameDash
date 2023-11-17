import TodoElCopy from "./TodoElCopy";
import "../styles/todoEl.css";

export default function TodoRenderCopy(props) {
  if (props.sort == "completed") {
    return props.todos.map((todo, idx) => {
      if (todo.isCompleted == true) {
        // const parsedData = JSON.parse(props.data);

        return (
          <div
            className={`listElDiv ${todo.isCompleted ? "completedEl" : ""}`}
          >
            <li>{todo.inputValue}</li>
            <div>
              <div
                className={`completeBtn ${todo.isCompleted ? "on" : ""}`}
                onClick={() => props.completeToggle(idx)}
              ></div>
              <div className="deleteBtn" onClick={() => props.deleteTodo(idx)}>
                X
              </div>
            </div>
          </div>
        );
      } else return ""
    });
  } else if (props.sort == "ongoing") {
    return props.todos.map((todo, idx) => {
      if (todo.isCompleted == false) {
  // const parsedData = JSON.parse(props.data);
        
        return (
          <div
            className={`listElDiv ${todo.isCompleted ? "completedEl" : ""}`}
          >
            <li>{todo.inputValue}</li>
            <div>
              <div
                className={`completeBtn ${todo.isCompleted ? "on" : ""}`}
                onClick={() => props.completeToggle(idx)}
              ></div>
              <div className="deleteBtn" onClick={() => props.deleteTodo(idx)}>
                X
              </div>
            </div>
          </div>
        );
      } else return ""
    });
  } else {
    return props.todos.map((todo, idx) => {
      return (
        <div className={`listElDiv ${todo.isCompleted ? "completedEl" : ""}`}>
          <li>{todo.inputValue}</li>
          <div>
            <div
              className={`completeBtn ${todo.isCompleted ? "on" : ""}`}
              onClick={() => props.completeToggle(idx)}
            ></div>
            <div className="deleteBtn" onClick={() => props.deleteTodo(idx)}>
              X
            </div>
          </div>
        </div>
      );
    });
  }
}
