import { useState } from "react";

function Input({ taskList, setTaskList }) {
  const [input, setInput] = useState("");

  function handleAdd() {
    if (input.length === 0) {
      alert("Input cannot be empty...");
    } else {
      setTaskList([...taskList, input]);
      setInput("");
    }
  }

  return (
    <div className="input-field">
      <input
        type="text"
        placeholder="Add a task"
        className="inpt"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="add-btn" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default Input;
