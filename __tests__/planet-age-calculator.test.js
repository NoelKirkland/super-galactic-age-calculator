import { User } from '../src/planet-age-calculator.js';

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User("Noel", 27, "Male", 10, "less than 1000 miles", null, null, null);
  });

  test('Should create a new user object with a life expectancy, a Mars age and a Mars life expectancy', () => {
  });
  test('Should correctly calculate life expectancy for user', () => {
    reusableUser.lifeExpectancyCalculator();
    expect(reusableUser.lifeExpectancy).toBe(68);
  });
  test('Should correctly calculate age on Murcury', () => {
    reusableUser.murcuryCalculator();
    expect(reusableUser.planetaryAge).toBe(113);
  });
  test('Should correctly calculate life expectancy on Murcury', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.murcuryCalculator();
    expect(reusableUser.planetaryLifeExpectancy).toBe(283);
  });
  test('Should correctly calculate age on Venus', () => {
    reusableUser.venusCalculator();
    expect(reusableUser.planetaryAge).toBe(44);
  });
  test('Should correctly calculate life expectancy on Venus', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.venusCalculator();
    expect(reusableUser.planetaryLifeExpectancy).toBe(110);
  });
  test('Should correctly calculate age on Venus', () => {
    reusableUser.marsCalculator();
    expect(reusableUser.planetaryAge).toBe(14);
  });
  test('Should correctly calculate life expectancy on Venus', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.marsCalculator();
    expect(reusableUser.planetaryLifeExpectancy).toBe(36);
  });
  test('Should correctly calculate age on Venus', () => {
    reusableUser.jupiterCalculator();
    expect(reusableUser.planetaryAge).toBe(2);
  });
  test('Should correctly calculate life expectancy on Venus', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.jupiterCalculator();
    expect(reusableUser.planetaryLifeExpectancy).toBe(6);
  });
});