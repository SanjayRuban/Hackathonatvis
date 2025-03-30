import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CourseCompletion = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="course-completion">
      <h2>Course Completed Successfully!</h2>
      <p>Congratulations on completing the course. You've earned a badge!</p>
      <div className="badge">🎖️</div>
      <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
      <button onClick={() => navigate('/freelance/do')}>Find Freelance Work</button>
    </div>
  );
};

export default CourseCompletion;