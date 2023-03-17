import React, { ChangeEvent, FormEvent, useState } from "react";
import { AddTodo } from "../types";

interface TodoFormProps {
  addTodo: AddTodo;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
  };

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter to do list here"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
