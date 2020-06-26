export class User {
  constructor(firstName, age, gender, fireworkPropensity, nuclearProximity, lifeExpectancy, planetaryAge, planetaryLifeExpectancy){
    this.firstName = firstName,
    this.age = age,
    this.gender = gender,
    this.fireworkPropensity = fireworkPropensity,
    this.nuclearProximity = nuclearProximity,
    this.lifeExpectancy = 100,
    this.planetaryAge = null,
    this.planetaryLifeExpectancy = null
  }

        /*
      life expectancy variables:
      1. this.gender:
        "male", "female"

      2. this.fireworkPropensity
        1,2,3,4,5,6,7,8,9,10

      3. this.nuclearProximity
        "less than 1000 miles"
        "less than 100 miles"
        "less than 20 miles"
      */
    
  lifeExpectancyCalculator(){
    if (this.gender === "Female"){
      this.lifeExpectancy  -= 10
    } else (this.gender === "Male");{
      this.lifeExpectancy  -= 18
    } 

    this.lifeExpectancy -= this.fireworkPropensity
    
    if (this.nuclearProximity === "less than 1000 miles"){
      this.lifeExpectancy  *= 0.95
    } else if (this.nuclearProximity === "less than 100 miles"){
      this.lifeExpectancy  *= 0.88
    } else if (this.nuclearProximity === "less than 20 miles"){
      this.lifeExpectancy  *= 0.75
    }
    this.lifeExpectancy = parseInt(this.lifeExpectancy.toFixed());
  }

  murcuryCalculator(){
    this.planetaryAge = parseInt((this.age * 365/(365*0.24)).toFixed());
    this.planetaryLifeExpectancy = parseInt((this.lifeExpectancy * 365/(365*0.24)).toFixed());
  }
}

