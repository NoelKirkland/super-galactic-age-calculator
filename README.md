# _Super Galactic Age Calculator_

#### _This web application tell the user how old they would be on another planet as well as how old they might live to on that planet._

#### By _**Noel R. Kirkland** - **July 7th, 2020**_

## Description

_In this web application the user is prompted to fill out a few different data fields like; name, age, gender, how much they like fireworks and their proximity to a nuclear power plant. With just their age we are able to calculate how many solar-years old they would be if they were born on another planet. From some of the other information the user has inputted we are able to roughly determine their estimated lifespan. Once we know the user's estimated lifespan we can then tell them how many solar-years old they would potentially live to if they were born on another planet._

* _Download the application from GitHub_:
  1. _Open the following web address in your browser:
`https://github.com/NoelKirkland`_
  2. _Click on the button labeled_ Repositories
  3. _Navigate into the `currency-exchange-calculator` repository and click the green button labeled "Clone or download" and download the zip to your computer_

* _Open, add API key, and install_
  1. _Open the downloaded application in a text editor (V.S. Code preferred)_
  2. _Create a file in the root directory of the application titled ".env"_
  3. _Open a new terminal in your text editor (Ctrl+` in V.S. Code) and run the command <code>$ npm install</code>_

* _Build and start_
  1. _Once all webpacks have been installed, run the command `$npm run build` in the project's terminal_
  2. _Once application is fully built, run the command `$npm run start`. This should automatically open a tab in your default browser where you can now use the application_
  3. _Have fun!_


## Specifications

* The program creates a user object that includes first name, age, gender, love of fireworks, and proximity to power plant. 

  | Input: | Output: |
  | :---: | :---: |
  | "Noel", 27, "Male", 10, "less than 1000 miles" | {firstName: "Noel", age: 27, gender: "Male", fireworkPropensity: 10, nuclearProximity: "less than 1000 miles"} |
  |||

* The program will calculate the user's life expectancy on earth

  | Input: | Output: |
  | :---: | :---: |
  | "Noel", 27, "Male", 10, "less than 1000 miles" | this.lifeExpectancy = 68 |
  |||

* The program will calculate the age, life expectancy, and years left to live for the user if they were on Mercury

  | Input: | Output: |
  | :---: | :---: |
  | "Noel", 27, "Male", 10, "less than 1000 miles" | this.planetaryAge = 113, this.planetaryLifeExpectancy = 283, this.planetaryLifeSpan = 170 |
  |||

* The program will calculate the age, life expectancy, and years left to live for the user if they were on Venus

  | Input: | Output: |
  | :---: | :---: |
  | "Noel", 27, "Male", 10, "less than 1000 miles" | this.planetaryAge = 44, this.planetaryLifeExpectancy = 110, this.planetaryLifeSpan = 66 |
  |||

* The program will calculate the age, life expectancy, and years left to live for the user if they were on Mars

  | Input: | Output: |
  | :---: | :---: |
  | "Noel", 27, "Male", 10, "less than 1000 miles" | this.planetaryAge = 14, this.planetaryLifeExpectancy = 36, this.planetaryLifeSpan = 22 |
  |||

* The program will calculate the age, life expectancy, and years left to live for the user if they were on Jupiter

  | Input: | Output: |
  | :---: | :---: |
  | "Noel", 27, "Male", 10, "less than 1000 miles" | this.planetaryAge = 2, this.planetaryLifeExpectancy = 6, this.planetaryLifeSpan = 4 |
  |||

## Known Bugs

_I was not yet able to get full front end functionality._

## Support and contact details

_If you run into any problems, or have any questions at all, feel free to reach out to me at noelkirkland@gmail.com_

## Technologies Used

_This webpage was constructed using HTML, CSS, Bootstrap, Javascript, Jquery, and Jest_

### License

Copyright (c) 2016 **_Noel Kirkland & Co LLC_**
