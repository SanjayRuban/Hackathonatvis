import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/api';

const CourseList = () => {
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

  return (
    <div className="course-list">
      <h2>Available Courses</h2>
      <div className="courses">
        {courses.map(course => (
          <div key={course.id} className="course-card" onClick={() => navigate(`/courses/${course.id}`)}>
            <h3>{course.title}</h3>
            <p>{course.description.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;