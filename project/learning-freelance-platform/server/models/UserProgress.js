const pool = require('../config/db');

class UserProgress {
  static async getCompletedCourses(userId) {
    const [rows] = await pool.query(`
      SELECT c.id, c.title, c.description 
      FROM courses c
      JOIN modules m ON c.id = m.course_id
      JOIN user_progress up ON m.id = up.module_id
      WHERE up.user_id = ?
      GROUP BY c.id
      HAVING COUNT(DISTINCT m.id) = (SELECT COUNT(*) FROM modules WHERE course_id = c.id)
    `, [userId]);
    return rows;
  }

  static async getBadges(userId) {
    return this.getCompletedCourses(userId);
  }
}

module.exports = UserProgress;