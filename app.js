const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Welcome! Try /app-A or /app-B');
});

app.get('/app-A', (req, res) => {
  res.send("Hi, I'm app A");
});

app.get('/app-B', (req, res) => {
  res.send("Hi, I'm app B");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
