import { User } from '../src/planet-age-calculator.js';

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User();
  });

  test('Should create a new user object', () => {
    console.log(reusableUser);
  });
});