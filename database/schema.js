const mongoose = require('mongoose');

// eslint-disable-next-line no-unused-vars
const db = require('./index.js');

mongoose.Promise = global.Promise;

const restaurantSchema = new mongoose.Schema({
  name: String,
  header_description: String,
  body_description: String,
  cuisine: String,
  price: String,
  zagat_review: {
    food: Number,
    decor: Number,
    service: Number,
  },
  address: {
    street: String,
    city: String,
    zipcode: Number,
    district: String,
    country: String,
    latitude: Number,
    longtitude: Number,
  },
  phone_number: String,
  official_website: String,
  open_hours: {
    Monday: String,
    Tuesday: String,
    Wednesday: String,
    Thursday: String,
    Friday: String,
    Saturday: String,
    Sunday: String,
  },
  close_hours: {
    Monday: String,
    Tuesday: String,
    Wednesday: String,
    Thursday: String,
    Friday: String,
    Saturday: String,
    Sunday: String,
  },
  known_for: {
    breakfast: Boolean,
    lunch: Boolean,
    dinner: Boolean,
    takeout: Boolean,
    quickbites: Boolean,
    kids: Boolean,
    online_reservations: Boolean,
    groups: Boolean,
    outdoor_seating: Boolean,
  },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = { Restaurant };
