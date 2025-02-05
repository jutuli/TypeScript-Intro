type ToDoItemProps = {
  toDo: string;
  checked: boolean;
};

function ToDoItem(props: ToDoItemProps) {
  return (
    <li className="flex gap-2">
      <input type="checkbox" checked={props.checked} />
      <p>{props.toDo}</p>
    </li>
  );
}

export default ToDoItem;
