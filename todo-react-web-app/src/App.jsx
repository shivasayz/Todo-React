import "./App.css";
import "./components/input";
import Input from "./components/input";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);

  function handleDelete(index) {
    setTaskList(taskList.filter((_, i) => i !== index));
  }

  return (
    <>
      <div className="App">
        <h1>Todo</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
        <div className="tasks-container">
          <h3>{taskList.length > 0 ? "Your Tasks" : "Add Tasks"}</h3>
          <div className="tasks-board">
            {taskList.map((el, i) => (
              <div className="task-in" key={i + 1}>
                <span>{el}</span>
                <button className="delete-btn" onClick={() => handleDelete(i)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
