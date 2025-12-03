const express = require('express');
const path = require('path');
const db = require('./db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret';

// Seed an admin user if not exists (username: admin, password: admin)
function seedAdmin(){
  const adminUser = 'admin'
  db.get('SELECT id FROM users WHERE username = ?', [adminUser], (err, row) => {
    if(err) return console.error('DB error checking admin:', err)
    if(row) return console.log('Admin user already exists')
    const password = 'admin'
    const hash = bcrypt.hashSync(password, 10)
    db.run('INSERT INTO users (username, password_hash, role) VALUES (?,?,?)', [adminUser, hash, 'admin'], function(err){
      if(err) return console.error('Failed to create admin user:', err)
      console.log('Created admin user: admin')
    })
  })
}

seedAdmin()

// Public API
app.get('/api/roles', (req, res) => {
  res.json(['client', 'cashier', 'admin']);
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body || {}
  if(!username || !password) return res.status(400).json({ ok:false, error: 'username & password required' })

  db.get('SELECT id, username, password_hash, role FROM users WHERE username = ?', [username], (err, row) => {
    if(err) return res.status(500).json({ ok:false })
    if(!row) return res.status(401).json({ ok:false, error: 'Invalid credentials' })

    const ok = bcrypt.compareSync(password, row.password_hash || '')
    if(!ok) return res.status(401).json({ ok:false, error: 'Invalid credentials' })

    const token = jwt.sign({ id: row.id, username: row.username, role: row.role }, JWT_SECRET, { expiresIn: '7d' })
    res.json({ ok: true, username: row.username, role: row.role, token })
  })
});

// middleware to protect routes
function authMiddleware(req, res, next){
  const auth = req.headers.authorization || ''
  const m = auth.match(/^Bearer (.+)$/)
  if(!m) return res.status(401).json({ ok:false })
  const token = m[1]
  try{
    const payload = jwt.verify(token, JWT_SECRET)
    req.user = payload
    next()
  }catch(e){
    return res.status(401).json({ ok:false })
  }
}

app.get('/api/me', authMiddleware, (req, res) => {
  res.json({ ok:true, user: { id: req.user.id, username: req.user.username, role: req.user.role } })
})

app.get('/api/menu', (req, res) => {
  res.json([
    { id: 1, name: 'Pint of Ale', price: 200 },
    { id: 2, name: 'Classic Burger', price: 350 },
    { id: 3, name: 'Fries', price: 120 }
  ]);
});

// Serve frontend build if present
const clientDist = path.join(__dirname, '..', 'frontend', 'dist');
app.use(express.static(clientDist));
app.get('*', (req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Pinta backend listening on ${PORT}`));
