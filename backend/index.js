const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
app.use(express.json());

// Simple API
app.get('/api/roles', (req, res) => {
  res.json(['client', 'cashier', 'admin']);
});

app.post('/api/login', (req, res) => {
  const { role, username } = req.body;
  if (['client', 'cashier', 'admin'].includes(role)) {
    // NOTE: demo token only — replace with real auth later
    return res.json({ ok: true, role, token: 'demo-token', username: username || 'guest' });
  }
  res.status(400).json({ ok: false });
});

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
