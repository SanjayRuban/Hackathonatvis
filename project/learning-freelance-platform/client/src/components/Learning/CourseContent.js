import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../utils/api';

const CourseContent = () => {
  const { id } = useParams();
  const [modules, setModules] = useState([]);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [assessmentSubmitted, setAssessmentSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await axios.get(`/api/courses/${id}/modules`);
        setModules(response.data);
        
        // Find the first incomplete module
        const firstIncomplete = response.data.findIndex(module => !module.isCompleted);
        setCurrentModuleIndex(firstIncomplete !== -1 ? firstIncomplete : 0);
      } catch (error) {
        console.error('Error fetching modules:', error);
      }
    };
    fetchModules();
  }, [id]);

  const handleSubmitAssessment = async () => {
    if (score < 60) {
      alert('You need at least 60% to pass');
      return;
    }
    
    try {
      await axios.post(`/api/courses/${id}/modules/${modules[currentModuleIndex].id}/complete`, { score });
      setAssessmentSubmitted(true);
      
      // Check if all modules are completed
      const response = await axios.get(`/api/courses/${id}/check-completion`);
      if (response.data.completed) {
        navigate(`/courses/${id}/complete`);
      }
    } catch (error) {
      console.error('Error submitting assessment:', error);
    }
  };

  const goToNextModule = () => {
    if (currentModuleIndex < modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setScore(0);
      setAssessmentSubmitted(false);
    }
  };

  if (modules.length === 0) return <div>Loading...</div>;

  const currentModule = modules[currentModuleIndex];

  return (
    <div className="course-content">
      <h2>Module {currentModuleIndex + 1}: {currentModule.title}</h2>
      
      <div className="module-content">
        <h3>Video</h3>
        <div className="video-placeholder">
          <p>Video content would be displayed here</p>
        </div>
        
        <h3>PDF Material</h3>
        <div className="pdf-placeholder">
          <p>PDF content would be displayed here</p>
        </div>
        
        <h3>Assessment</h3>
        {!assessmentSubmitted ? (
          <div className="assessment">
            <p>Score: {score}%</p>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={score} 
              onChange={(e) => setScore(parseInt(e.target.value))} 
            />
            <button onClick={handleSubmitAssessment}>Submit Assessment</button>
          </div>
        ) : (
          <div className="assessment-result">
            <p>You scored {score}% on this module!</p>
            {currentModuleIndex < modules.length - 1 ? (
              <button onClick={goToNextModule}>Next Module</button>
            ) : (
              <p>You've completed all modules!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseContent;