import React from "react";
import { ITodo } from "../Todo.inteface";

type TodoListProps = {
  todos: ITodo[];
  onCheckboxToggle(id: number): void;
  onRemove: (id: number) => void;
};

const TodoList: React.FunctionComponent<TodoListProps> = ({
  todos,
  onCheckboxToggle,
  onRemove,
}) => {
  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }
        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onCheckboxToggle.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={() => onRemove(todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
export default TodoList;
