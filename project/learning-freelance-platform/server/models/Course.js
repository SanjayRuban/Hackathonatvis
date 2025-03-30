const pool = require('../config/db');

class Course {
  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM courses');
    return rows;
  }

  static async getById(id) {
    const [rows] = await pool.query('SELECT * FROM courses WHERE id = ?', [id]);
    return rows[0];
  }

  static async getModules(courseId) {
    const [rows] = await pool.query('SELECT * FROM modules WHERE course_id = ? ORDER BY order_number', [courseId]);
    return rows;
  }
}

module.exports = Course;