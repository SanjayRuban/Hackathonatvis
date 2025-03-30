const express = require('express');
const router = express.Router();
const freelanceController = require('../controllers/freelanceController');
const authMiddleware = require('../middleware/auth');

router.post('/post', authMiddleware, freelanceController.postWork);
router.get('/available', authMiddleware, freelanceController.getAvailableWork);
router.get('/by-course/:courseId', authMiddleware, freelanceController.getWorkByCourse);
router.post('/:workId/complete', authMiddleware, freelanceController.completeWork);
router.get('/badges', authMiddleware, freelanceController.getUserBadges);

module.exports = router;