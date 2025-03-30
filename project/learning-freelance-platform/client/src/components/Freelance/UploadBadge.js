import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/api';

const UploadBadge = () => {
  const [badges, setBadges] = useState([]);
  const [selectedBadge, setSelectedBadge] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const response = await axios.get('/api/freelance/badges');
        setBadges(response.data);
      } catch (error) {
        console.error('Error fetching badges:', error);
      }
    };
    fetchBadges();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedBadge) return;
    navigate(`/freelance/available-work?courseId=${selectedBadge}`);
  };

  return (
    <div className="upload-badge">
      <h2>Select Your Badge</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select a badge to find related work:</label>
          <select 
            value={selectedBadge} 
            onChange={(e) => setSelectedBadge(e.target.value)} 
            required
          >
            <option value="">Select a badge</option>
            {badges.map(badge => (
              <option key={badge.id} value={badge.id}>{badge.title}</option>
            ))}
          </select>
        </div>
        <button type="submit">Find Work</button>
      </form>
    </div>
  );
};

export default UploadBadge;