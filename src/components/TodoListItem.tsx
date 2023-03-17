import React, { useState } from "react";
import { Todo, ToggleComplete, RemoveTodo, EditTodo, Option } from "../types";
import { Dropdown } from "./Dropdown";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
  editTodo: EditTodo;
}
export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  onRemoveTodo,
  editTodo,
}) => {
  const [isEditOn, setIsEditOn] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(todo.text);

  const onEdit = () => {
    console.log("edit");
  };

  const onDelete = () => {
    onRemoveTodo(todo);
  };

  const onTodoUpdate = (e: any) => {
    let text = e.target.value;
    setInputText(text);
    editTodo(text);
  };

  const dropdownOptions: Array<Option> = [
    {
      value: "Delete",
      onClick: onDelete,
      color: "red",
    },
    {
      value: "Edit",
      onClick: onEdit,
      color: "blue",
    },
  ];

  return (
    <li className={todo.complete ? "todo-row completed" : "todo-row"}>
      <label>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
        {isEditOn ? (
          <input
            type="text"
            value={inputText}
            onChange={(e) => onTodoUpdate(e)}
          />
        ) : (
          todo.text
        )}
      </label>
      <Dropdown options={dropdownOptions} />
    </li>
  );
};
