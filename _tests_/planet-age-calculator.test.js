import { User } from '../src/planet-age-calculator.js';

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User("Noel", 27, "Male", 10, 20, 78, 14, 41);
  });

  test('Should create a new user object with a life expectancy, a Mars age and a Mars life expectancy', () => {
    console.log(reusableUser);
  });
});