import { User } from '../src/planet-age-calculator.js';

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User("Noel", 27, "Male", 10, "less than 1000 miles");
  });

  test('Should create a new user object with a life expectancy, a Mars age and a Mars life expectancy', () => {
  });
  test('Should correctly calculate life expectancy for user', () => {
    reusableUser.lifeExpectancyCalculator();
    expect(reusableUser.lifeExpectancy).toBe(68);
  });
  test('Should correctly calculate age on Mercury', () => {
    reusableUser.planetCalculator("Mercury");
    expect(reusableUser.planetaryAge).toBe(113);
  });
  test('Should correctly calculate life expectancy on Mercury', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mercury");
    expect(reusableUser.planetaryLifeExpectancy).toBe(283);
  });
  test('Should correctly calculate how much longer the user has left to live on Mercury', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mercury");
    expect(reusableUser.planetaryLifeSpan).toEqual(170);
  });
  test('Should correctly calculate age on Venus', () => {
    reusableUser.planetCalculator("Venus");
    expect(reusableUser.planetaryAge).toBe(44);
  });
  test('Should correctly calculate life expectancy on Venus', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Venus");
    expect(reusableUser.planetaryLifeExpectancy).toBe(110);
  });
  test('Should correctly calculate how much longer the user has left to live on Venus', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Venus");
    expect(reusableUser.planetaryLifeSpan).toEqual(66);
  });
  test('Should correctly calculate age on Mars', () => {
    reusableUser.planetCalculator("Mars");
    expect(reusableUser.planetaryAge).toBe(14);
  });
  test('Should correctly calculate life expectancy on Mars', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mars");
    expect(reusableUser.planetaryLifeExpectancy).toBe(36);
  });
  test('Should correctly calculate how much longer the user has left to live on Mars', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mars");
    expect(reusableUser.planetaryLifeSpan).toEqual(22);
  });
  test('Should correctly calculate age on Jupiter', () => {
    reusableUser.planetCalculator("Jupiter");
    expect(reusableUser.planetaryAge).toBe(2);
  });
  test('Should correctly calculate life expectancy on Jupiter', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Jupiter");
    expect(reusableUser.planetaryLifeExpectancy).toBe(6);
  });
  test('Should correctly calculate how much longer the user has left to live on Jupiter', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Jupiter");
    expect(reusableUser.planetaryLifeSpan).toEqual(4);
  });
});

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User("Laurel", 26, "Female", 10, "less than 1000 miles");
  });

  test('Should create a new user object with a life expectancy, a Mars age and a Mars life expectancy', () => {
  });
  test('Should correctly calculate life expectancy for user', () => {
    reusableUser.lifeExpectancyCalculator();
    expect(reusableUser.lifeExpectancy).toBe(76);
  });
  test('Should correctly calculate age on Mercury', () => {
    reusableUser.planetCalculator("Mercury");
    expect(reusableUser.planetaryAge).toBe(108);
  });
  test('Should correctly calculate life expectancy on Mercury', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mercury");
    expect(reusableUser.planetaryLifeExpectancy).toBe(317);
  });
  test('Should correctly calculate how much longer the user has left to live on Mercury', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mercury");
    expect(reusableUser.planetaryLifeSpan).toEqual(209);
  });
  test('Should correctly calculate age on Venus', () => {
    reusableUser.planetCalculator("Venus");
    expect(reusableUser.planetaryAge).toBe(42);
  });
  test('Should correctly calculate life expectancy on Venus', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Venus");
    expect(reusableUser.planetaryLifeExpectancy).toBe(123);
  });
  test('Should correctly calculate how much longer the user has left to live on Venus', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Venus");
    expect(reusableUser.planetaryLifeSpan).toEqual(81);
  });
  test('Should correctly calculate age on Mars', () => {
    reusableUser.planetCalculator("Mars");
    expect(reusableUser.planetaryAge).toBe(14);
  });
  test('Should correctly calculate life expectancy on Mars', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mars");
    expect(reusableUser.planetaryLifeExpectancy).toBe(40);
  });
  test('Should correctly calculate how much longer the user has left to live on Mars', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mars");
    expect(reusableUser.planetaryLifeSpan).toEqual(26);
  });
  test('Should correctly calculate age on Jupiter', () => {
    reusableUser.planetCalculator("Jupiter");
    expect(reusableUser.planetaryAge).toBe(2);
  });
  test('Should correctly calculate life expectancy on Jupiter', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Jupiter");
    expect(reusableUser.planetaryLifeExpectancy).toBe(6);
  });
  test('Should correctly calculate how much longer the user has left to live on Jupiter', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Jupiter");
    expect(reusableUser.planetaryLifeSpan).toEqual(4);
  });
});

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User("Laurel", 26, "Female", 7, "less than 1000 miles");
  });

  test('Should create a new user object with a life expectancy, a Mars age and a Mars life expectancy', () => {
  });
  test('Should correctly calculate life expectancy for user', () => {
    reusableUser.lifeExpectancyCalculator();
    expect(reusableUser.lifeExpectancy).toBe(79);
  });
  test('Should correctly calculate age on Mercury', () => {
    reusableUser.planetCalculator("Mercury");
    expect(reusableUser.planetaryAge).toBe(108);
  });
  test('Should correctly calculate life expectancy on Mercury', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mercury");
    expect(reusableUser.planetaryLifeExpectancy).toBe(329);
  });
  test('Should correctly calculate how much longer the user has left to live on Mercury', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mercury");
    expect(reusableUser.planetaryLifeSpan).toEqual(221);
  });
  test('Should correctly calculate age on Venus', () => {
    reusableUser.planetCalculator("Venus");
    expect(reusableUser.planetaryAge).toBe(42);
  });
  test('Should correctly calculate life expectancy on Venus', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Venus");
    expect(reusableUser.planetaryLifeExpectancy).toBe(127);
  });
  test('Should correctly calculate how much longer the user has left to live on Venus', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Venus");
    expect(reusableUser.planetaryLifeSpan).toEqual(85);
  });
  test('Should correctly calculate age on Mars', () => {
    reusableUser.planetCalculator("Mars");
    expect(reusableUser.planetaryAge).toBe(14);
  });
  test('Should correctly calculate life expectancy on Mars', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mars");
    expect(reusableUser.planetaryLifeExpectancy).toBe(42);
  });
  test('Should correctly calculate how much longer the user has left to live on Mars', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mars");
    expect(reusableUser.planetaryLifeSpan).toEqual(28);
  });
  test('Should correctly calculate age on Jupiter', () => {
    reusableUser.planetCalculator("Jupiter");
    expect(reusableUser.planetaryAge).toBe(2);
  });
  test('Should correctly calculate life expectancy on Jupiter', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Jupiter");
    expect(reusableUser.planetaryLifeExpectancy).toBe(7);
  });
  test('Should correctly calculate how much longer the user has left to live on Jupiter', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Jupiter");
    expect(reusableUser.planetaryLifeSpan).toEqual(5);
  });
});

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User("Kathryn", 63, "Female", 10, "less than 100 miles");
  });

  test('Should create a new user object with a life expectancy, a Mars age and a Mars life expectancy', () => {
  });
  test('Should correctly calculate life expectancy for user', () => {
    reusableUser.lifeExpectancyCalculator();
    expect(reusableUser.lifeExpectancy).toBe(70);
  });
  test('Should correctly calculate age on Mercury', () => {
    reusableUser.planetCalculator("Mercury");
    expect(reusableUser.planetaryAge).toBe(263);
  });
  test('Should correctly calculate life expectancy on Mercury', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mercury");
    expect(reusableUser.planetaryLifeExpectancy).toBe(292);
  });
  test('Should correctly calculate how much longer the user has left to live on Mercury', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mercury");
    expect(reusableUser.planetaryLifeSpan).toEqual(29);
  });
  test('Should correctly calculate age on Venus', () => {
    reusableUser.planetCalculator("Venus");
    expect(reusableUser.planetaryAge).toBe(102);
  });
  test('Should correctly calculate life expectancy on Venus', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Venus");
    expect(reusableUser.planetaryLifeExpectancy).toBe(113);
  });
  test('Should correctly calculate how much longer the user has left to live on Venus', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Venus");
    expect(reusableUser.planetaryLifeSpan).toEqual(11);
  });
  test('Should correctly calculate age on Mars', () => {
    reusableUser.planetCalculator("Mars");
    expect(reusableUser.planetaryAge).toBe(34);
  });
  test('Should correctly calculate life expectancy on Mars', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mars");
    expect(reusableUser.planetaryLifeExpectancy).toBe(37);
  });
  test('Should correctly calculate how much longer the user has left to live on Mars', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mars");
    expect(reusableUser.planetaryLifeSpan).toEqual(3);
  });
  test('Should correctly calculate age on Jupiter', () => {
    reusableUser.planetCalculator("Jupiter");
    expect(reusableUser.planetaryAge).toBe(5);
  });
  test('Should correctly calculate life expectancy on Jupiter', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Jupiter");
    expect(reusableUser.planetaryLifeExpectancy).toBe(6);
  });
  test('Should correctly calculate how much longer the user has left to live on Jupiter', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Jupiter");
    expect(reusableUser.planetaryLifeSpan).toEqual(1);
  });
});

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User("Kathryn", 63, "Female", 5, "less than 100 miles");
  });

  test('Should create a new user object with a life expectancy, a Mars age and a Mars life expectancy', () => {
  });
  test('Should correctly calculate life expectancy for user', () => {
    reusableUser.lifeExpectancyCalculator();
    expect(reusableUser.lifeExpectancy).toBe(75);
  });
  test('Should correctly calculate age on Mercury', () => {
    reusableUser.planetCalculator("Mercury");
    expect(reusableUser.planetaryAge).toBe(263);
  });
  test('Should correctly calculate life expectancy on Mercury', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mercury");
    expect(reusableUser.planetaryLifeExpectancy).toBe(313);
  });
  test('Should correctly calculate how much longer the user has left to live on Mercury', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mercury");
    expect(reusableUser.planetaryLifeSpan).toEqual(50);
  });
  test('Should correctly calculate age on Venus', () => {
    reusableUser.planetCalculator("Venus");
    expect(reusableUser.planetaryAge).toBe(102);
  });
  test('Should correctly calculate life expectancy on Venus', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Venus");
    expect(reusableUser.planetaryLifeExpectancy).toBe(121);
  });
  test('Should correctly calculate how much longer the user has left to live on Venus', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Venus");
    expect(reusableUser.planetaryLifeSpan).toEqual(19);
  });
  test('Should correctly calculate age on Mars', () => {
    reusableUser.planetCalculator("Mars");
    expect(reusableUser.planetaryAge).toBe(34);
  });
  test('Should correctly calculate life expectancy on Mars', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mars");
    expect(reusableUser.planetaryLifeExpectancy).toBe(40);
  });
  test('Should correctly calculate how much longer the user has left to live on Mars', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mars");
    expect(reusableUser.planetaryLifeSpan).toEqual(6);
  });
  test('Should correctly calculate age on Jupiter', () => {
    reusableUser.planetCalculator("Jupiter");
    expect(reusableUser.planetaryAge).toBe(5);
  });
  test('Should correctly calculate life expectancy on Jupiter', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Jupiter");
    expect(reusableUser.planetaryLifeExpectancy).toBe(6);
  });
  test('Should correctly calculate how much longer the user has left to live on Jupiter', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Jupiter");
    expect(reusableUser.planetaryLifeSpan).toEqual(1);
  });
});

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User("John", 45, "Male", 10, "less than 20 miles");
  });

  test('Should create a new user object with a life expectancy, a Mars age and a Mars life expectancy', () => {
  });
  test('Should correctly calculate life expectancy for user', () => {
    reusableUser.lifeExpectancyCalculator();
    expect(reusableUser.lifeExpectancy).toBe(54);
  });
  test('Should correctly calculate age on Mercury', () => {
    reusableUser.planetCalculator("Mercury");
    expect(reusableUser.planetaryAge).toBe(188);
  });
  test('Should correctly calculate life expectancy on Mercury', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mercury");
    expect(reusableUser.planetaryLifeExpectancy).toBe(225);
  });
  test('Should correctly calculate how much longer the user has left to live on Mercury', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mercury");
    expect(reusableUser.planetaryLifeSpan).toEqual(37);
  });
  test('Should correctly calculate age on Venus', () => {
    reusableUser.planetCalculator("Venus");
    expect(reusableUser.planetaryAge).toBe(73);
  });
  test('Should correctly calculate life expectancy on Venus', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Venus");
    expect(reusableUser.planetaryLifeExpectancy).toBe(87);
  });
  test('Should correctly calculate how much longer the user has left to live on Venus', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Venus");
    expect(reusableUser.planetaryLifeSpan).toEqual(14);
  });
  test('Should correctly calculate age on Mars', () => {
    reusableUser.planetCalculator("Mars");
    expect(reusableUser.planetaryAge).toBe(24);
  });
  test('Should correctly calculate life expectancy on Mars', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mars");
    expect(reusableUser.planetaryLifeExpectancy).toBe(29);
  });
  test('Should correctly calculate how much longer the user has left to live on Mars', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mars");
    expect(reusableUser.planetaryLifeSpan).toEqual(5);
  });
  test('Should correctly calculate age on Jupiter', () => {
    reusableUser.planetCalculator("Jupiter");
    expect(reusableUser.planetaryAge).toBe(4);
  });
  test('Should correctly calculate life expectancy on Jupiter', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Jupiter");
    expect(reusableUser.planetaryLifeExpectancy).toBe(5);
  });
  test('Should correctly calculate how much longer the user has left to live on Jupiter', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Jupiter");
    expect(reusableUser.planetaryLifeSpan).toEqual(1);
  });
});

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User("John", 45, "Male", 3, "less than 20 miles");
  });

  test('Should create a new user object with a life expectancy, a Mars age and a Mars life expectancy', () => {
  });
  test('Should correctly calculate life expectancy for user', () => {
    reusableUser.lifeExpectancyCalculator();
    expect(reusableUser.lifeExpectancy).toBe(59);
  });
  test('Should correctly calculate age on Mercury', () => {
    reusableUser.planetCalculator("Mercury");
    expect(reusableUser.planetaryAge).toBe(188);
  });
  test('Should correctly calculate life expectancy on Mercury', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mercury");
    expect(reusableUser.planetaryLifeExpectancy).toBe(246);
  });
  test('Should correctly calculate how much longer the user has left to live on Mercury', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mercury");
    expect(reusableUser.planetaryLifeSpan).toEqual(58);
  });
  test('Should correctly calculate age on Venus', () => {
    reusableUser.planetCalculator("Venus");
    expect(reusableUser.planetaryAge).toBe(73);
  });
  test('Should correctly calculate life expectancy on Venus', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Venus");
    expect(reusableUser.planetaryLifeExpectancy).toBe(95);
  });
  test('Should correctly calculate how much longer the user has left to live on Venus', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Venus");
    expect(reusableUser.planetaryLifeSpan).toEqual(22);
  });
  test('Should correctly calculate age on Mars', () => {
    reusableUser.planetCalculator("Mars");
    expect(reusableUser.planetaryAge).toBe(24);
  });
  test('Should correctly calculate life expectancy on Mars', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mars");
    expect(reusableUser.planetaryLifeExpectancy).toBe(31);
  });
  test('Should correctly calculate how much longer the user has left to live on Mars', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Mars");
    expect(reusableUser.planetaryLifeSpan).toEqual(7);
  });
  test('Should correctly calculate age on Jupiter', () => {
    reusableUser.planetCalculator("Jupiter");
    expect(reusableUser.planetaryAge).toBe(4);
  });
  test('Should correctly calculate life expectancy on Jupiter', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Jupiter");
    expect(reusableUser.planetaryLifeExpectancy).toBe(5);
  });
  test('Should correctly calculate how much longer the user has left to live on Jupiter', () => {
    reusableUser.lifeExpectancyCalculator();
    reusableUser.planetCalculator("Jupiter");
    expect(reusableUser.planetaryLifeSpan).toEqual(1);
  });
});

