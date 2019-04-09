const faker = require('faker');
const schema = require('./schema');
const db = require('./index');

faker.locale = 'en_CA';
const restaurantSampleData = [];

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};


for (let i = 1; i <= 100; i += 1) {
  const sampleData = {
    restaurantID: i,
    name: `${capitalize(faker.lorem.word())} ${capitalize(faker.lorem.word())} `,
    headerDescription: faker.lorem.words(3),
    bodyDescription: faker.lorem.paragraph(5, 8),
    cuisine: faker.random.arrayElement(['Argentina', 'Cajun', 'Estonian', 'Chinese', 'Filipino',
      'Italian', 'Korean', 'Mexican', 'Polish', 'Romanian', 'Russian', 'Thai', 'Pakistani',
      'Japanese', 'Nepalese', 'Peruvian', 'Portuguese', 'Brazilian', 'Malaysian', 'Indian',
    ]),
    price: faker.random.arrayElement(['$', '$$', '$$$']),
    zagatReview: {
      food: faker.finance.amount(3, 5, 1),
      decor: faker.finance.amount(3, 5, 1),
      service: faker.finance.amount(3, 5, 1),
    },
    address:
      {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        zipcode: faker.address.zipCode(),
        district: faker.lorem.words(),
        country: faker.address.country(),
        latitude: faker.address.latitude(),
        longtitude: faker.address.longitude(),
      },
    phoneNumber: faker.phone.phoneNumberFormat(),
    officialWebsite: faker.internet.domainName(),
    openHours: {
      MonOH: faker.random.arrayElement(['8:00AM', '9:00AM', '10:00AM']),
      TuesOH: faker.random.arrayElement(['8:00AM', '9:00AM', '10:00AM']),
      WedOH: faker.random.arrayElement(['8:00AM', '9:00AM', '10:00AM']),
      ThursOH: faker.random.arrayElement(['8:00AM', '9:00AM', '10:00AM']),
      FriOH: faker.random.arrayElement(['8:00AM', '9:00AM', '10:00AM']),
      SatOH: faker.random.arrayElement(['8:00AM', '9:00AM', '10:00AM']),
      SunOH: faker.random.arrayElement(['8:00AM', '9:00AM', '10:00AM']),
    },
    closeHours: {
      MonCH: faker.random.arrayElement(['8:00PM', '9:00PM', '10:00PM']),
      TuesCH: faker.random.arrayElement(['8:00PM', '9:00PM', '10:00PM']),
      WedCH: faker.random.arrayElement(['8:00PM', '9:00PM', '10:00PM']),
      ThursCH: faker.random.arrayElement(['8:00PM', '9:00PM', '10:00PM']),
      FriCH: faker.random.arrayElement(['8:00PM', '9:00PM', '10:00PM']),
      SatCH: faker.random.arrayElement(['8:00PM', '9:00PM', '10:00PM']),
      SunCH: faker.random.arrayElement(['8:00PM', '9:00PM', '10:00PM']),
    },
    knownFor: {
      breakfast: faker.random.boolean(),
      lunch: faker.random.boolean(),
      dinner: faker.random.boolean(),
      takeout: faker.random.boolean(),
      quickbites: faker.random.boolean(),
      kids: faker.random.boolean(),
      onlineReservations: faker.random.boolean(),
      groups: faker.random.boolean(),
      outdoorSeating: faker.random.boolean(),
    },
  };
  restaurantSampleData.push(sampleData);
}

const insertSampleData = function () {
  schema.Restaurant.create(restaurantSampleData)
    .then(() => db.close());
};

insertSampleData();

module.exports = restaurantSampleData;
