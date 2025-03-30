const FreelanceWork = require('../models/FreelanceWork');
const UserProgress = require('../models/UserProgress');

const freelanceController = {
  postWork: async (req, res) => {
    try {
      const { title, description, budget, required_course_id } = req.body;
      const work = await FreelanceWork.create({
        title,
        description,
        budget,
        posted_by: req.user.id,
        required_course_id
      });
      res.status(201).json(work);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  },

  getAvailableWork: async (req, res) => {
    try {
      const works = await FreelanceWork.getAllAvailable();
      res.json(works);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  },

  getWorkByCourse: async (req, res) => {
    try {
      const works = await FreelanceWork.getByCourse(req.params.courseId);
      res.json(works);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  },

  completeWork: async (req, res) => {
    try {
      await FreelanceWork.completeWork(req.params.workId, req.user.id);
      res.json({ message: 'Work completed successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  },

  getUserBadges: async (req, res) => {
    try {
      const badges = await UserProgress.getBadges(req.user.id);
      res.json(badges);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

module.exports = freelanceController;