const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost/r';

const db = mongoose.connect(mongoURL);

module.exports = db;
