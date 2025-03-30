import React from 'react';
import { useNavigate } from 'react-router-dom';

const FreelanceOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="freelance-options">
      <h2>Freelance Options</h2>
      <div className="options">
        <button onClick={() => navigate('/freelance/post')}>Post Work</button>
        <button onClick={() => navigate('/freelance/do')}>Do Work</button>
      </div>
    </div>
  );
};

export default FreelanceOptions;