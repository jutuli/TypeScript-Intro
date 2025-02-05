import { todos } from "../data";
import ToDoItem from "./ToDoItem";

function ToDoList() {
  return (
    <ul className="m-4">
      {todos.map((toDo) => {
        return (
          <ToDoItem key={toDo.id} toDo={toDo.toDo} checked={toDo.isCompleted} />
        );
      })}
    </ul>
  );
}

export default ToDoList;
