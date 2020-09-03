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
  if (todos.length === 0) {
    return <h4 className="center">No tasks yet...</h4>;
  }
  return (
    <ul>
      {todos.map((todo) => {
        const deleteHandler = (event: React.MouseEvent, id: number) => {
          event.preventDefault();
          onRemove(id);
        };

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
              <span>{todo.id}</span>
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={(event) => deleteHandler(event, todo.id)}
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
