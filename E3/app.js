const express = require('express');

const port = 5000;

const app = express();

app.get('/random', (req, res) => {
  res.json({ random: Math.floor(100000 + Math.random() * 900000) });
});

app.listen(port, () => {
  console.log('listening at port', port);
});
