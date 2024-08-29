const express = require('express');
const app2 = express();

app2.use(express.json());

let users = [
  { id: 1, name: 'Name1', email: 'name1@example.com' },
  { id: 2, name: 'Name2', email: 'name2@example.com' },
];

app2.get('/users', async (req, res) => {
  res.json(users);
});

app2.get('/users/:id', async (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

app2.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

app2.put('/users/:id', async (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });

  const { name, email } = req.body;
  user.name = name || user.name;
  user.email = email || user.email;

  res.json(user);
});

app2.delete('/users/:id', async (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.status(204).send();
});

module.exports = app2;
