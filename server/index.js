const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const { findOneRestaurant } = require('../database/methods');

const app = express();
const port = 3333;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/../public')));

const randomRestaurantID = Math.floor(Math.random() * 100);


app.get('/r', (req, res) => {
  findOneRestaurant(randomRestaurantID, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => console.log(`LISTENING ON ${port}`));

module.exports = app;
