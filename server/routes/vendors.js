const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("businesses.db");

router.get("/", (req, res) => {
  const { search = "", category = "" } = req.query;

  let query = `SELECT * FROM vendors WHERE 1=1`;
  const params = [];

  if (search) {
    query += ` AND LOWER(category) LIKE ?`;
    params.push(`%${search.toLowerCase()}%`);
  }

  // If user clicked on a category button
  if (category && category !== "All") {
    query += ` AND category = ?`;
    params.push(category);
  }

  db.all(query, params, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    const vendors = rows.map(v => ({
      ...v,
      verified: Boolean(v.verified),
      badges: JSON.parse(v.badges)
    }));

    res.json(vendors);
  });
});

module.exports = router;
