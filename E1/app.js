const express = require('express');

const port = 3000;

const app = express();

app.get('/date', (req, res) => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  today = mm + '/' + dd + '/' + yyyy;
  res.json({ date: today });
});

app.listen(port, () => {
  console.log('listening at port', port);
});
