import React from "react";
import { Todo, ToggleComplete, RemoveTodo, EditTodo } from "../types";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
  editTodo: EditTodo;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  onRemoveTodo,
  editTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          toggleComplete={toggleComplete}
          onRemoveTodo={onRemoveTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};
