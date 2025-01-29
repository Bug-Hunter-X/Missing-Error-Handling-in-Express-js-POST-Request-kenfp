const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  //Further validation can be added here, like checking email format
  // ... more data processing ...
  console.log(req.body);
  res.status(201).json({ message: 'User created' });
});

app.listen(3000, () => console.log('Server listening on port 3000'));