import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = () => {
    if (newTask.trim() === "") return;
    if (editingIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = newTask;
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, newTask]);
    }
    setNewTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index) => {
    setNewTask(tasks[index]);
    setEditingIndex(index);
  };

  const moveTaskUp = (index) => {
    if (index === 0) return;
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
    setTasks(updatedTasks);
  };

  const moveTaskDown = (index) => {
    if (index === tasks.length - 1) return;
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-md">
      <div className="flex gap-2 mb-4">
        <input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add a task..." />
        <button onClick={addTask}>{editingIndex !== null ? "Update" : "Add"}</button>
      </div>
      <div className="space-y-2">
        {tasks.map((task, index) => (
          <li key={index} className="p-2 flex justify-between items-center">
            {task}
            <div className="flex gap-2">
              <button onClick={() => moveTaskUp(index)}  >move up</button>
              <button onClick={() => moveTaskDown(index)}  >move down</button>
              <button onClick={() => editTask(index)}  >edit</button>
              <button onClick={() => deleteTask(index)} >delete</button>
              </div>
          </li>
        ))}
      </div>
    </div>
  );
}
