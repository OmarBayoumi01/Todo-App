import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const toggleComplet = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };
  return (
    <div className="TodoWrapper">
      <h1>Your Taskes</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo
          task={todo}
          key={index}
          toggleComplet={toggleComplet}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoWrapper;
