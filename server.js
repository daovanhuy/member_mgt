import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Connect to SQLite database
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    console.log('Connected to the SQLite database.');
    initDatabase();
  }
});

// Initialize database tables
function initDatabase() {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    birthDate TEXT,
    address TEXT,
    idNumber TEXT,
    phone TEXT,
    email TEXT,
    workUnit TEXT,
    position TEXT,
    issueDate TEXT,
    joinDate TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS fees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    lastPaymentDate TEXT,
    status TEXT,
    dueDate TEXT,
    FOREIGN KEY(userId) REFERENCES users(id)
  )`);
}

// API Routes

// Get all users
app.get('/api/users', (req, res) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Add a new user
app.post('/api/users', (req, res) => {
  const { name, birthDate, address, idNumber, phone, email, workUnit, position, issueDate, joinDate } = req.body;
  db.run(`INSERT INTO users (name, birthDate, address, idNumber, phone, email, workUnit, position, issueDate, joinDate) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [name, birthDate, address, idNumber, phone, email, workUnit, position, issueDate, joinDate],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID });
    });
});

// Get all fees
app.get('/api/fees', (req, res) => {
  db.all('SELECT fees.*, users.name FROM fees JOIN users ON fees.userId = users.id', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Add a new fee
app.post('/api/fees', (req, res) => {
  const { userId, lastPaymentDate, status, dueDate } = req.body;
  db.run('INSERT INTO fees (userId, lastPaymentDate, status, dueDate) VALUES (?, ?, ?, ?)',
    [userId, lastPaymentDate, status, dueDate],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID });
    });
});

// Update fee status
app.put('/api/fees/:id', (req, res) => {
  const { status, lastPaymentDate } = req.body;
  db.run('UPDATE fees SET status = ?, lastPaymentDate = ? WHERE id = ?',
    [status, lastPaymentDate, req.params.id],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ changes: this.changes });
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});