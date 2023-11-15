import TodoEl from "./TodoEl";

export default function TodoRender(props) {
  if (props.sort == "completed") {
    return props.todos.map((todo, idx) => {
      if (todo.isCompleted == true) {
        return (
          <TodoEl
            isCompleted={true}
            index={idx}
            del={() => props.deleteTodo(idx)}
            data={JSON.stringify(todo)}
            key={idx}
            toggleFun={props.completeToggle}
          />
        );
      }
    });
  } else if (props.sort == "ongoing") {
    return props.todos.map((todo, idx) => {
      if (todo.isCompleted == false) {
        return (
          <TodoEl
            isCompleted={false}
            index={idx}
            del={() => props.deleteTodo(idx)}
            data={JSON.stringify(todo)}
            key={idx}
            toggleFun={props.completeToggle}
          />
        );
      }
    });
  } else {
    return props.todos.map((todo, idx) => {
        return (
          <TodoEl
            // isCompleted={false}
            index={idx}
            del={() => props.deleteTodo(idx)}
            data={JSON.stringify(todo)}
            key={idx}
            toggleFun={props.completeToggle}
          />
        );
    });
  }
}
