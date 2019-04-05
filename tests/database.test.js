import restaurantSampleData from '../database/seed';

test('generate 100 sample data', () => {
  expect(restaurantSampleData.length).toBe(100);
});
