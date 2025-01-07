import React, { useState } from 'react';
import ReactDOM from "react-dom/client";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      if (newTask.trim()) {
        setTasks(prev => [...prev, newTask.trim()]);
        setNewTask('');
      }
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={addTask}
        placeholder="What needs to be done?"
        className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-blue-300"
        autoComplete="off"
      />

      <div className="mt-4 space-y-2">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded group">
            <span className="text-gray-700">{task}</span>
            <button
              onClick={() => removeTask(index)}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="w-5 h-5 text-red-500 hover:text-red-700" />
            </button>
          </div>
        ))}
      </div>
      
      {tasks.length > 0 && (
        <div className="mt-4 text-sm text-gray-400">
          {tasks.length} {tasks.length === 1 ? 'item' : 'items'} left
        </div>
      )}
    </div>
  );
};

export default TodoList;