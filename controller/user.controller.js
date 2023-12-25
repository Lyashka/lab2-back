const db = require("../db");
class UserController {
  async createSugJournal(req, res) {
    const {
      equipment_id,
      schedule_date,
      repair_type,
      actual_date,
      sug_detalis_id,
      comment_,
      repair_mark,
      end_date,
    } = req.body;
    const newSugJournal = await db.query(
      `SELECT * FROM INS_SUG_JOURNAL($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        equipment_id,
        schedule_date,
        repair_type,
        actual_date,
        sug_detalis_id,
        comment_,
        repair_mark,
        end_date,
      ]
    );
    res.json(newSugJournal.rows[0]);
  }

  async createSugReport(req, res) {
    const { id_mounth } = req.body;
    const newSugReport = await db.query(`SELECT * FROM INS_SUG_REPORT($1)`, [
      id_mounth,
    ]);
    res.json(newSugReport.rows[0]);
  }

  async createComJournal(req, res) {
    const {
      equipment_id,
      schedule_date,
      repair_type,
      actual_date,
      comment_,
      repair_mark,
      end_date,
    } = req.body;
    const newComJournal = await db.query(
      `SELECT * FROM INS_COMPONENT_JOURNAL($1, $2, $3, $4, $5, $6, $7)`,
      [
        equipment_id,
        schedule_date,
        repair_type,
        actual_date,
        comment_,
        repair_mark,
        end_date,
      ]
    );
    res.json(newComJournal.rows[0]);
  }

  async createComReport(req, res) {
    const { id_mounth } = req.body;
    const newComReport = await db.query(
      `SELECT * FROM INS_COMPONENT_REPORT($1)`,
      [id_mounth]
    );
    res.json(newComReport.rows[0]);
  }
}

module.exports = new UserController();
