const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const { findOneRestaurant } = require('../database/methods');

const app = express();
const port = 3003;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use('/r/:restaurant', express.static(path.join(__dirname, '/../public')));

app.get('/restaurants/:id', (req, res) => {
  const requestedID = req.params.id;
  findOneRestaurant(requestedID, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => console.log(`LISTENING ON ${port}`));

module.exports = app;
