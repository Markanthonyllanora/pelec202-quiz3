import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "./features/task/taskSlice";

function App() {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);

  const handleAdd = () => {
    if (task.trim() === "") return;

    dispatch(addTask(task));
    setTask("");
  };

  return (
    <div className="app">
      <div className="header">Task Manager</div>

      <div className="container">


        <div className="input-card">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task..."
          />

          <button onClick={handleAdd}>Add Task</button>
        </div>

        
        <div className="task-card">
          <h3>Your Tasks</h3>

          {tasks.length === 0 ? (
            <p>No tasks yet</p>
          ) : (
            tasks.map((t, i) => (
              <div className="task-item" key={i}>
                <span>{t}</span>

                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeTask(i))}
                >
                  ❌
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default App;