import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import MainDashboard from './components/MainDashboard';
import CourseList from './components/Learning/CourseList';
import CourseDescription from './components/Learning/CourseDescription';
import CourseContent from './components/Learning/CourseContent';
import CourseCompletion from './components/Learning/CourseCompletion';
import FreelanceOptions from './components/Freelance/FreelanceOptions';
import PostWork from './components/Freelance/PostWork';
import DoWork from './components/Freelance/DoWork';
import UploadBadge from './components/Freelance/UploadBadge';
import AvailableWork from './components/Freelance/AvailableWork';

function App() {
  return (
    <Router>
      <Routes>
        {/*<Route path="/" element={<Login />} />*/}
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/:id" element={<CourseDescription />} />
        <Route path="/courses/:id/learn" element={<CourseContent />} />
        <Route path="/courses/:id/complete" element={<CourseCompletion />} />
        <Route path="/freelance" element={<FreelanceOptions />} />
        <Route path="/freelance/post" element={<PostWork />} />
        <Route path="/freelance/do" element={<DoWork />} />
        <Route path="/freelance/upload-badge" element={<UploadBadge />} />
        <Route path="/freelance/available-work" element={<AvailableWork />} />
      </Routes>
    </Router>
  );
}

export default App;
