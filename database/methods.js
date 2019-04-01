const { Restaurant } = require('./schema');

module.exports = {

  getAllData: (cb) => {
    Restaurant.find().exec((err, docs) => {
      if (err) {
        cb(err);
      } else {
        cb(null, docs);
      }
    });
  },

  findID: (_id, cb) => {
    Restaurant.findById(_id).exec((err, docs) => {
      if (err) {
        cb(err);
      } else {
        cb(null, docs);
      }
    });
  },

};
