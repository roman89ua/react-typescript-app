import React, { useState } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

let TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const inputChenging = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onEnterPres = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(title);
      setTitle("");
    }
  };

  return (
    <div className="input-fiel margins2RemTop">
      <label htmlFor="title" className="active">
        Your new task
      </label>
      <input
        onChange={inputChenging}
        onKeyPress={onEnterPres}
        value={title}
        type="text"
        id="title"
        placeholder="New task title"
      />
    </div>
  );
};
export default TodoForm;
