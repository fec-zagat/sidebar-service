const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost/restaurants';

mongoose.connect(mongoURL, { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', () => {
  console.log('CONNECTED');
});

db.on('error', () => console.log('ERRRORRRR'));

module.exports = db;
