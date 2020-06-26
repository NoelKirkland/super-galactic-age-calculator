export class User {
  constructor(firstName, age, gender, fireworkPropensity, nuclearProximity, lifeExpectancy, planetaryAge, planetaryLifeExpectancy){
    this.firstName = firstName,
    this.age = age,
    this.gender = gender,
    this.fireworkPropensity = fireworkPropensity,
    this.nuclearProximity = nuclearProximity,
    this.lifeExpectancy = null,
    this.planetaryAge = null,
    this.planetaryLifeExpectancy = null
  }
    
  lifeExpectancyCalculator(){
    this.lifeExpectancy = 100;
    if (this.gender === "Female"){
      this.lifeExpectancy  -= 10;
    } else (this.gender === "Male");{
      this.lifeExpectancy  -= 18;
    } 
    this.lifeExpectancy -= this.fireworkPropensity
    
    if (this.nuclearProximity === "less than 1000 miles"){
      this.lifeExpectancy  *= 0.95;
    } else if (this.nuclearProximity === "less than 100 miles"){
      this.lifeExpectancy  *= 0.88;
    } else if (this.nuclearProximity === "less than 20 miles"){
      this.lifeExpectancy  *= 0.75;
    }
    this.lifeExpectancy = parseInt(this.lifeExpectancy.toFixed());
  }

  murcuryCalculator(){
    this.planetaryAge = parseInt((this.age * 365/(365*0.24)).toFixed());
    this.planetaryLifeExpectancy = parseInt((this.lifeExpectancy * 365/(365*0.24)).toFixed());
  }

  venusCalculator(){
    this.planetaryAge = parseInt((this.age * 365/(365*0.62)).toFixed());
    this.planetaryLifeExpectancy = parseInt((this.lifeExpectancy * 365/(365*0.62)).toFixed());
  }

  marsCalculator(){
    this.planetaryAge = parseInt((this.age * 365/(365*1.88)).toFixed());
    this.planetaryLifeExpectancy = parseInt((this.lifeExpectancy * 365/(365*1.88)).toFixed());
  }

  jupiterCalculator(){
    this.planetaryAge = parseInt((this.age * 365/(365*11.86)).toFixed());
    this.planetaryLifeExpectancy = parseInt((this.lifeExpectancy * 365/(365*11.86)).toFixed());
  }
}

