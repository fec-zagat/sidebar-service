const mongoose = require('mongoose');

// eslint-disable-next-line no-unused-vars
const db = require('./index.js');

mongoose.Promise = global.Promise;

const restaurantSchema = new mongoose.Schema({
  restaurantID: Number,
  name: String,
  headerDescription: String,
  bodyDescription: String,
  cuisine: String,
  price: String,
  zagatReview: {
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
  phoneNumber: String,
  officialWebsite: String,
  openHours: {
    MonOH: String,
    TuesOH: String,
    WednOH: String,
    ThursOH: String,
    FriOH: String,
    SatOH: String,
    SunOH: String,
  },
  closeHours: {
    MonCH: String,
    TuesCH: String,
    WedCH: String,
    ThursCH: String,
    FriCH: String,
    SatCH: String,
    SunCH: String,
  },
  knownFor: {
    breakfast: Boolean,
    lunch: Boolean,
    dinner: Boolean,
    takeout: Boolean,
    quickbites: Boolean,
    kids: Boolean,
    onlineReservations: Boolean,
    groups: Boolean,
    outdoorSeating: Boolean,
  },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = { Restaurant };
