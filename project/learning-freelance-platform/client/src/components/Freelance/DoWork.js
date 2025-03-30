import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DoWork = () => {
  const navigate = useNavigate();
  const [hasBadge, setHasBadge] = useState(false);

  const checkBadge = () => {
    // In a real app, we would check the user's badges from the backend
    setHasBadge(true);
    navigate('/freelance/upload-badge');
  };

  return (
    <div className="do-work">
      <h2>Find Freelance Work</h2>
      {hasBadge ? (
        <p>You have badges! Looking for work...</p>
      ) : (
        <div>
          <p>To access freelance work, you need to complete courses and earn badges.</p>
          <button onClick={checkBadge}>Check My Badges</button>
        </div>
      )}
    </div>
  );
};

export default DoWork;