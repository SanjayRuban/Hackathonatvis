const pool = require('../config/db');

class FreelanceWork {
  static async create(work) {
    const { title, description, budget, posted_by, required_course_id } = work;
    const [result] = await pool.query(
      'INSERT INTO freelance_work (title, description, budget, posted_by, required_course_id, posted_at) VALUES (?, ?, ?, ?, ?, NOW())',
      [title, description, budget, posted_by, required_course_id]
    );
    return result.insertId;
  }

  static async getByCourse(courseId) {
    const [rows] = await pool.query(
      'SELECT * FROM freelance_work WHERE required_course_id = ? AND completed_by IS NULL',
      [courseId]
    );
    return rows;
  }

  static async completeWork(workId, userId) {
    await pool.query(
      'UPDATE freelance_work SET completed_by = ?, completed_at = NOW() WHERE id = ?',
      [userId, workId]
    );
  }

  static async getAllAvailable() {
    const [rows] = await pool.query(
      'SELECT * FROM freelance_work WHERE completed_by IS NULL'
    );
    return rows;
  }
}

module.exports = FreelanceWork;