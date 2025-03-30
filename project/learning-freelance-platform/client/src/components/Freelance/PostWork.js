import React, { useState, useEffect } from 'react'; // Add useEffect here
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/api';

const PostWork = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [requiredCourseId, setRequiredCourseId] = useState('');
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/api/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/freelance/post', {
        title,
        description,
        budget,
        required_course_id: requiredCourseId
      });
      navigate('/freelance');
    } catch (error) {
      console.error('Error posting work:', error);
    }
  };

  return (
    <div className="post-work">
      <h2>Post Freelance Work</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Budget:</label>
          <input 
            type="number" 
            value={budget} 
            onChange={(e) => setBudget(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Required Course:</label>
          <select 
            value={requiredCourseId} 
            onChange={(e) => setRequiredCourseId(e.target.value)} 
            required
          >
            <option value="">Select a course</option>
            {courses.map(course => (
              <option key={course.id} value={course.id}>{course.title}</option>
            ))}
          </select>
        </div>
        <button type="submit">Post Work</button>
      </form>
    </div>
  );
};

export default PostWork;