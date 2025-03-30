const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const authMiddleware = require('../middleware/auth');

router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourse);
router.get('/:courseId/modules', authMiddleware, courseController.getCourseModules);
router.post('/:courseId/modules/:moduleId/complete', authMiddleware, courseController.completeModule);
router.get('/:courseId/check-completion', authMiddleware, courseController.checkCourseCompletion);

module.exports = router;