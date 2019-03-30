const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost/restaurants';

mongoose.connect(mongoURL, { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to mongoDB');
});

db.on('error', () => console.log('Error connecting to mongoDB'));

module.exports = db;
