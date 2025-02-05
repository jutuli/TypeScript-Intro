export type ToDo = {
  id: number;
  toDo: string;
  isCompleted: boolean;
};

export const todos: ToDo[] = [
  { id: 1, toDo: "Laundry", isCompleted: false },
  { id: 2, toDo: "Buy Groceries", isCompleted: false },
  { id: 3, toDo: "Clean Living Room", isCompleted: true },
];
