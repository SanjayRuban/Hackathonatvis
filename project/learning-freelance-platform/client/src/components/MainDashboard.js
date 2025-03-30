import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainDashboard = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');

  return (
    <div className="dashboard">
      <h2>Welcome, {userName}!</h2>
      <div className="dashboard-options">
        <button onClick={() => navigate('/courses')}>Learn Courses</button>
        <button onClick={() => navigate('/freelance')}>Freelance</button>
      </div>
    </div>
  );
};

export default MainDashboard;