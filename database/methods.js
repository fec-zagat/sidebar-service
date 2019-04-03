const { Restaurant } = require('./schema');

module.exports = {

  findOneRestaurant: (id, cb) => {
    Restaurant.findOne({ restaurant_id: id }).exec((err, docs) => {
      if (err) {
        cb(err);
      } else {
        cb(null, docs);
      }
    });
  },

};
