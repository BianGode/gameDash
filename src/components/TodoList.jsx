import { useEffect, useState } from "react";
import "../styles/todo.css";
import TodoRender from "./TodoRender";
import TodoRenderCopy from "./TodoRenderCopy";

export default function TodoList() {
  // const [todos, setTodo] = useState(
  //   JSON.parse(localStorage.getItem("todos"))
  //   ? JSON.parse(localStorage.getItem("todos"))
  //   : []
  //  );
   const [todos, setTodo] = useState(
    localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : []
   );
  const [sort, setSort] = useState("all");
  const [inp, setInp] = useState({
    inputValue: "",
    isCompleted: false
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  // useEffect(() => {
  //   const retrieveTodos = JSON.parse(localStorage.getItem("todos"))
  //   if(retrieveTodos) {
  //     setTodo(retrieveTodos)
  //   }
  // }, [])

  function handleClick() {
    if (inp !== "") {
      setTodo([...todos, inp]);
      // localStorage.setItem("todos", todos.toString());
      setInp({
        inputValue: "",
        isCompleted: false,
      });
    }
  }

  if(localStorage.getItem("todos")) {
    
  }

  // handle enter input click
  function handleKeyDown(event) {
    if (event.key == "Enter" && event.target.value !== "") {
      setTodo([...todos, inp])
      // console.log(todos);
      setInp({
        inputValue: "",
        isCompleted: false,
      });
      // localStorage.setItem("todos", );
      // console.log(localStorage.getItem("todos"));
    }
  }

  function deleteTodo(id) {
    // make a temporary array to delete the clicked value via array.splice()
    const tempTodoList = todos;
    tempTodoList.splice(id, 1);
    setTodo([...tempTodoList]);
  }

  function completeToggle(id) {
    const tempTodos = todos;
    tempTodos[id].isCompleted
      ? (tempTodos[id].isCompleted = false)
      : (tempTodos[id].isCompleted = true);
    // todos[id].isCompleted
    setTodo([...tempTodos]);
  }

  const sortCompleted = () => {
    setSort("completed");
  };

  return (
    <div className="todoPageWrap">
      <div className="addTodoWrap">
        <input
          id="addTodo"
          type="text"
          name="todos"
          value={inp.inputValue}
          onChange={(e) =>
            setInp({
              inputValue: e.target.value,
              isCompleted: false,
            })
          }
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button onClick={() => handleClick()}>add</button>
      </div>
      <div className="sortWrap">
        <p onClick={() => setSort("completed")}>Completed</p>
        <p onClick={() => setSort("ongoing")}>on Going</p>
        <p onClick={() => setSort("all")}>All</p>
      </div>
      <div className="todoListWrap">
        <ul>
          {todos.length > 0 ? (
            <TodoRenderCopy
              todos={todos}
              sort={sort}
              completeToggle={completeToggle}
              deleteTodo={deleteTodo}
            />
          ) : (
            <p>no tasks yet</p>
          )}
        </ul>
      </div>
    </div>
  );
}

// was bezig met goed toevoegen van TodoEl en de clickboxxes werkend maken
