import { todos } from "../data";
import ToDoItem from "./ToDoItem";

function ToDoList() {
  return (
    <ul className="m-4">
      {todos.map((toDo) => {
        return (
          <li>
            <ToDoItem toDo={toDo.toDo} checked={toDo.isCompleted} />
          </li>
        );
      })}
    </ul>
  );
}

export default ToDoList;
