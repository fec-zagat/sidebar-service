const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const { find, findID } = require('../database/Restaurant');

const app = express();
const port = 3333;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));


app.get('/id/:id', (req, res) => {
  findID('5c9eda85d2be340ad53466fe', (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(results);
    }
  });
});


app.listen(port, () => console.log(`LISTENING ON ${port}`));
