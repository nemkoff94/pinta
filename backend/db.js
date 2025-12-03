const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const dbFile = process.env.DB_FILE || path.join(dataDir, 'pinta.sqlite');
const db = new sqlite3.Database(dbFile);

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT UNIQUE,
    password_hash TEXT,
    role TEXT
  )`);

  // Ensure legacy installations get the new column
  db.all("PRAGMA table_info(users)", (err, rows) => {
    if (err) {
      console.error('Failed to read users table info:', err)
      return
    }
    const cols = rows.map(r => r.name)
    if (!cols.includes('password_hash')) {
      console.log('Adding missing column `password_hash` to users table')
      db.run('ALTER TABLE users ADD COLUMN password_hash TEXT', (alterErr) => {
        if (alterErr) console.error('Failed to add password_hash column:', alterErr)
        else console.log('password_hash column added')
      })
    }
  })
});

module.exports = db;
