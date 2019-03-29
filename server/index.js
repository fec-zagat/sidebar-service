const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3333;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));


app.get('/r/side-bar', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`LISTENING ON ${port}`));
