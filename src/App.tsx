import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import TodoForm from "./components/toDoForm";
import TodoList from "./components/TodoList";
import { ITodo } from "./Todo.inteface";

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: todos.length + 1,
      completed: true,
    };
    setTodos((todos) => [newTodo, ...todos]);
  };
  const toggleCheckbox = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };
  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addTodo} />
        <TodoList
          todos={todos}
          onCheckboxToggle={toggleCheckbox}
          onRemove={removeTodo}
        />
      </div>
    </>
  );
};

export default App;
