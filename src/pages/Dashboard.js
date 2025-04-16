import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import TaskList from '../components/TaskList';
import '../asthetics/dashboard.css';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('/api/tasks', { headers: { Authorization: token } })
      .then(res => setTasks(res.data));
  }, [token]);

  return (
    <div className="dashboard-container">
      <h2>Your Tasks</h2>
      <div className="task-box">
        <TaskList tasks={tasks} setTasks={setTasks} token={token} />
      </div>
    </div>
  );
};

export default Dashboard;
