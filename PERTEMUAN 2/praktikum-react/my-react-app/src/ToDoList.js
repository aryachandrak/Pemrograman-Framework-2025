import React, { useState } from "react";

const TodoItem = ({ task, onDelete }) => {
  return (
    <li className="flex justify-between items-center bg-gray-200 p-2 rounded">
      <span>{task}</span>
      <button
        className="bg-red-500 text-white px-2 py-1 rounded"
        onClick={onDelete}
      >
        Hapus
      </button>
    </li>
  );
};

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Tambahkan tugas..."
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">
          Tambah
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} onDelete={() => deleteTask(index)} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
