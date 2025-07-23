import { useState } from "react";

export function TodoInput(props) {
  const { handleAddTodo, editText, setEditText } = props;
  const [inputValue, setInputValue] = useState("");

  // Use editText when it's provided, otherwise use local inputValue
  const currentValue = editText || inputValue;

  return (
    <div className="input-container">
      <input
        value={currentValue}
        onChange={(e) => {
          if (editText) {
            setEditText(e.target.value);
          } else {
            setInputValue(e.target.value);
          }
        }}
        placeholder="Add task"
      />
      <button
        onClick={() => {
          if (!currentValue) {
            return;
          }
          handleAddTodo(currentValue);
          if (editText) {
            setEditText("");
          } else {
            setInputValue("");
          }
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
