import React, { useState, useEffect } from "react";
import TodoForm from "../components/toDoForm";
import TodoList from "../components/TodoList";
import { ITodo } from "../Todo.inteface";

const Tasks: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: todos.length + 1,
      completed: false,
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
    const shouldRemove = global.confirm(
      "Are you sure want to delete this item?"
    );
    if (shouldRemove) setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <React.Fragment>
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={todos}
        onCheckboxToggle={toggleCheckbox}
        onRemove={removeTodo}
      />
    </React.Fragment>
  );
};

export default Tasks;
