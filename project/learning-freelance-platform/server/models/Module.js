const pool = require('../config/db');

class Module {
  static async getById(id) {
    const [rows] = await pool.query('SELECT * FROM modules WHERE id = ?', [id]);
    return rows[0];
  }

  static async completeModule(userId, moduleId, score) {
    await pool.query(
      'INSERT INTO user_progress (user_id, module_id, score, completed_at) VALUES (?, ?, ?, NOW())',
      [userId, moduleId, score]
    );
  }

  static async isModuleCompleted(userId, moduleId) {
    const [rows] = await pool.query(
      'SELECT * FROM user_progress WHERE user_id = ? AND module_id = ?',
      [userId, moduleId]
    );
    return rows.length > 0;
  }
}

module.exports = Module;