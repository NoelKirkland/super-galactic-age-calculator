import { User } from '../src/planet-age-calculator.js';

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User("Noel", 27, "Male", 10, "less than 1000 miles", 100, null, null);
  });

  test('Should create a new user object with a life expectancy, a Mars age and a Mars life expectancy', () => {
    console.log(reusableUser);
  });
  test('Should correctly calculate life expectancy for user', () => {
    reusableUser.lifeExpectancyCalculator();
    expect(reusableUser.lifeExpectancy).toBe(68);
    console.log(reusableUser);
  });
  test('Should correctly calculate ag and life expectancy on Murcury', () => {
    reusableUser.murcuryCalculator();
    expect(reusableUser.planetaryLifeExpectancy, reusableUser.planetaryAge).toBe(32, 50);
    console.log(reusableUser);
  });
});