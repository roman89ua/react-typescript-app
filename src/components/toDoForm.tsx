import React, { useState } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

let TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const inputChenging = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onMouseDown = () => {
    props.onAdd(title);
    setTitle("");
  };
  const onEnterPres = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onMouseDown();
    }
  };

  return (
    <div className="input-fiel margins2RemTop">
      <label htmlFor="title" className="active">
        Your new task
      </label>
      <span className="one__line">
        <input
          onChange={inputChenging}
          onKeyPress={onEnterPres}
          value={title}
          type="text"
          id="title"
          placeholder="New task title"
        />
        <button
          className="btn waves-effect waves-light margins2RemLeft"
          type="submit"
          name="action"
          onClick={onMouseDown}
        >
          add
          <i className="material-icons right">add</i>
        </button>
      </span>
    </div>
  );
};
export default TodoForm;
