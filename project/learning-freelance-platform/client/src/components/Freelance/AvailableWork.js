import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../../utils/api';

const AvailableWork = () => {
  const [works, setWorks] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const courseId = queryParams.get('courseId');

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const url = courseId 
          ? `/api/freelance/by-course/${courseId}`
          : '/api/freelance/available';
        const response = await axios.get(url);
        setWorks(response.data);
      } catch (error) {
        console.error('Error fetching works:', error);
      }
    };
    fetchWorks();
  }, [courseId]);

  const handleCompleteWork = async (workId) => {
    try {
      await axios.post(`/api/freelance/${workId}/complete`);
      navigate('/freelance');
    } catch (error) {
      console.error('Error completing work:', error);
    }
  };

  return (
    <div className="available-work">
      <h2>Available Freelance Work</h2>
      <div className="work-list">
        {works.map(work => (
          <div key={work.id} className="work-card">
            <h3>{work.title}</h3>
            <p>{work.description}</p>
            <p>Budget: ${work.budget}</p>
            <button onClick={() => handleCompleteWork(work.id)}>Complete Work</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableWork;