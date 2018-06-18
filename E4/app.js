const express = require('express');
const axios = require('axios');
const port = 5050;

const app = express();

app.get('/', (req, res) =>
  res.json({ message: 'Welcome to ddate-time service' })
);

app.get('/date-time', (req, res) => {
  let date, time;
  // get date from date service
  axios
    .get('http://localhost:3000/date')
    .then(response => {
      console.log(response.data);
      date = response.data.date;

      // get time from time service
      axios
        .get('http://localhost:4040/time')
        .then(response => {
          console.log(response.data.time);
          time = response.data.time;
          return res.json({
            date,
            time
          });
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

app.listen(port, () => {
  console.log('listening at port', port);
});
