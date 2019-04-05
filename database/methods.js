const { Restaurant } = require('./schema');

module.exports = {

  findOneRestaurant: (id, cb) => {
    Restaurant.findOne({ restaurantID: id }).exec((err, docs) => {
      if (err) {
        cb(err);
      } else {
        cb(null, docs);
      }
    });
  },

};
