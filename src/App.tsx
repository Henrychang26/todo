import React, { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { AddTodo, Todo, ToggleComplete, RemoveTodo, EditTodo } from "./types";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  const todoToRemove: RemoveTodo = (todoToRemove) => {
    let updatedTodos: Array<Todo> = todos.filter(
      (todo) => todo.text !== todoToRemove.text
    );
    setTodos(updatedTodos);
  };

  const editTodo: EditTodo = (todoToEdit) => {
    let target: number = todos.findIndex(
      (todo) => todo.text === todoToEdit.text
    );
    console.log(target);
    // todos[target].text = todoToEdit.text;
  };

  return (
    <div className="todo-app">
      <h1>hello</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        onRemoveTodo={todoToRemove}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
