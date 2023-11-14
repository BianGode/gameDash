import { useState } from "react";
import "../styles/todo.css";
import TodoEl from "./TodoEl";

export default function TodoList() {
  const [todos, setTodo] = useState([]);
  const [inp, setInp] = useState("");

  function handleClick() {
    if (inp !== "") {
      setTodo([...todos, inp]);
      setInp("");
    }
  }

  // handle enter input click
  function handleKeyDown(event) {
    if (event.key == "Enter" && event.target.value !== "") {
      setTodo([...todos, inp]);
      setInp("");
    }
  }

  function deleteTodo(id) {
    // make a temporary array to delete the clicked value via array.splice()
    const tempTodoList = todos;
    tempTodoList.splice(id, 1);
    setTodo([...tempTodoList]);
    console.log(todos);
  }

  return (
    <div className="todoPageWrap">
      <div className="addTodoWrap">
        <input
          id="addTodo"
          type="text"
          name="todos"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button onClick={() => handleClick()}>add</button>
      </div>
      <div className="todoListWrap">
        <ul>
          {todos.length > 0 ? (
            todos.map((todo, idx) => (
              <>
              <TodoEl index={idx} del={()=> deleteTodo(idx)} test={todo} key={idx} /> 
               {/* <li key={idx} onClick={() => deleteTodo(idx)}>
                 {todo}
               </li> */}
              </>
            ))
          ) : (
            <p></p>
          )}
        </ul>
      </div>
    </div>
  );
}
