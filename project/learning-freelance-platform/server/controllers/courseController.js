const Course = require('../models/Course');
const Module = require('../models/Module');
const UserProgress = require('../models/UserProgress');

const courseController = {
  getAllCourses: async (req, res) => {
    try {
      const courses = await Course.getAll();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  },

  getCourse: async (req, res) => {
    try {
      const course = await Course.getById(req.params.id);
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.json(course);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  },

  getCourseModules: async (req, res) => {
    try {
      const modules = await Course.getModules(req.params.courseId);
      const modulesWithStatus = await Promise.all(modules.map(async module => {
        const isCompleted = await Module.isModuleCompleted(req.user.id, module.id);
        return { ...module, isCompleted };
      }));
      res.json(modulesWithStatus);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  },

  completeModule: async (req, res) => {
    try {
      const { score } = req.body;
      if (score < 60) {
        return res.status(400).json({ message: 'Score must be at least 60 to pass' });
      }
      
      await Module.completeModule(req.user.id, req.params.moduleId, score);
      res.json({ message: 'Module completed successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  },

  checkCourseCompletion: async (req, res) => {
    try {
      const modules = await Course.getModules(req.params.courseId);
      const completedModules = await Promise.all(modules.map(async module => {
        return await Module.isModuleCompleted(req.user.id, module.id);
      }));
      
      const allCompleted = completedModules.every(Boolean);
      res.json({ completed: allCompleted });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

module.exports = courseController;