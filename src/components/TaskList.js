import React, { useState } from 'react';
import axios from '../api/axios';
import '../asthetics/task.css'

const TaskList = ({ tasks, setTasks, token }) => {
  const [title, setTitle] = useState('');

  const addTask = async () => {
    try {
      const res = await axios.post('/api/tasks', { title, completed: false }, { headers: { Authorization: token } });
      
      setTasks([...tasks, res.data]);
      setTitle('');
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  const updateTask = async (id, updates) => {
    try {
      const res = await axios.put(`/api/tasks/${id}`, updates, { headers: { Authorization: token } });

      setTasks(tasks.map(task => (task._id === id ? res.data : task)));
    } catch (err) {
      console.error('Error updating task:', err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`, { headers: { Authorization: token } });

      setTasks(tasks.filter(task => task._id !== id));
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  return (
    <div>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="New Task"
        aria-label="New Task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => updateTask(task._id, { completed: !task.completed })}
              aria-label={`Mark ${task.title} as ${task.completed ? 'incomplete' : 'complete'}`}
            />
            {task.title}
            <button
              onClick={() => deleteTask(task._id)}
              aria-label={`Delete ${task.title}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
