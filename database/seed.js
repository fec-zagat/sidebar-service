const faker = require('faker');
const Restaurant = require('./Restaurant');
const db = require('./index');

faker.locale = 'de';
const restaurantSampleData = [];

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

for (let i = 0; i < 100; i += 1) {
  const sampleData = {
    name: `${capitalize(faker.lorem.word())} ${capitalize(faker.lorem.word())} `,
    header_description: faker.lorem.words(3),
    body_description: faker.lorem.paragraph(5, 8),
    cuisine: faker.random.arrayElement(['Argentina', 'Cajun', 'Estonian', 'Chinese', 'Filipino',
      'Italian', 'Korean', 'Mexican', 'Polish', 'Romanian', 'Russian', 'Thai', 'Pakistani',
      'Japanese', 'Nepalese', 'Peruvian', 'Portuguese', 'Brazilian', 'Malaysian', 'Indian',
    ]),
    price: faker.random.arrayElement(['$', '$$', '$$$']),
    zagat_review: {
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
    phone_number: faker.phone.phoneNumberFormat(),
    official_website: faker.internet.domainName(),
    open_hours: {
      Monday: faker.random.arrayElement(['8:00AM', '9:00AM', '10:00AM']),
      Tuesday: faker.random.arrayElement(['8:00AM', '9:00AM', '10:00AM']),
      Wednesday: faker.random.arrayElement(['8:00AM', '9:00AM', '10:00AM']),
      Thursday: faker.random.arrayElement(['8:00AM', '9:00AM', '10:00AM']),
      Friday: faker.random.arrayElement(['8:00AM', '9:00AM', '10:00AM']),
      Saturday: faker.random.arrayElement(['8:00AM', '9:00AM', '10:00AM']),
      Sunday: faker.random.arrayElement(['8:00AM', '9:00AM', '10:00AM']),
    },
    close_hours: {
      Monday: faker.random.arrayElement(['8:00PM', '9:00PM', '10:00PM']),
      Tuesday: faker.random.arrayElement(['8:00PM', '9:00PM', '10:00PM']),
      Wednesday: faker.random.arrayElement(['8:00PM', '9:00PM', '10:00PM']),
      Thursday: faker.random.arrayElement(['8:00PM', '9:00PM', '10:00PM']),
      Friday: faker.random.arrayElement(['8:00PM', '9:00PM', '10:00PM']),
      Saturday: faker.random.arrayElement(['8:00PM', '9:00PM', '10:00PM']),
      Sunday: faker.random.arrayElement(['8:00PM', '9:00PM', '10:00PM']),
    },
    known_for: {
      breakfast: faker.random.boolean(),
      lunch: faker.random.boolean(),
      dinner: faker.random.boolean(),
      takeout: faker.random.boolean(),
      quickbites: faker.random.boolean(),
      kids: faker.random.boolean(),
      online_reservations: faker.random.boolean(),
      groups: faker.random.boolean(),
      outdoor_seating: faker.random.boolean(),
    },
  };
  restaurantSampleData.push(sampleData);
}

const insertSampleData = function () {
  Restaurant.Restaurant.create(restaurantSampleData)
    .then(() => db.close());
};

insertSampleData();
