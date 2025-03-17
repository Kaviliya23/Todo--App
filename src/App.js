import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./App.css";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleComplete = (index) => {
    setTasks(tasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">To-Do List</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          className="border p-2 w-full rounded"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-2 border-b ${t.completed ? "line-through text-gray-500" : ""}`}
          >
            <span onClick={() => toggleComplete(index)} className="cursor-pointer">
              {t.text}
            </span>
            <button onClick={() => deleteTask(index)} className="text-red-500">
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
