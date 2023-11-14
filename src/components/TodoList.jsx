import { useState } from "react";
import "../styles/todo.css";
import TodoEl from "./TodoEl";

export default function TodoList() {
  const [todos, setTodo] = useState([]);
  const [inp, setInp] = useState({
    inputValue: '',
    isCompleted: ''
  });

  function handleClick() {
    if (inp !== "") {
      setTodo([...todos, inp]);
      setInp({
        inputValue: '',
        isCompleted: ''
      });
    }
  }

  // handle enter input click
  function handleKeyDown(event) {
    if (event.key == "Enter" && event.target.value !== "") {
      setTodo([...todos, inp]);
      setInp({
        inputValue: '',
        isCompleted: ''
      });
    }
  }

  function deleteTodo(id) {
    // make a temporary array to delete the clicked value via array.splice()
    const tempTodoList = todos;
    tempTodoList.splice(id, 1);
    setTodo([...tempTodoList]);
  }

  return (
    <div className="todoPageWrap">
      <div className="addTodoWrap">
        <input
          id="addTodo"
          type="text"
          name="todos"
          value={inp.inputValue}
          onChange={(e) => setInp({
            inputValue: e.target.value,
            isCompleted: ''
          })}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button onClick={() => handleClick()}>add</button>
      </div>
      <div className="sortWrap">
        <p>Completed</p>
        <p>on Going</p>
        <p>All</p>
      </div>
      <div className="todoListWrap">
        <ul>
          {todos.length > 0 ? (
            todos.map((todo, idx) => (
              <>
              <TodoEl index={idx} del={()=> deleteTodo(idx)} data={JSON.stringify(todo)} key={idx} /> 
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
