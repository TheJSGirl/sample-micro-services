const express = require('express');

const port = 4040;

const app = express();

app.get('/time', (req, res) => {
  res.json({ time: new Date().getTime() });
});

app.listen(port, () => {
  console.log('listening at port', port);
});
