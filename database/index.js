const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/restaurants';

mongoose.connect(mongoURI, { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to mongoDB');
});

db.on('error', () => console.log('Error connecting to mongoDB'));

module.exports = db;
