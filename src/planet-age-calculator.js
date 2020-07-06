export class User {
  constructor(firstName, age, gender, fireworkPropensity, nuclearProximity){
    this.firstName = firstName,
    this.age = age,
    this.gender = gender,
    this.fireworkPropensity = fireworkPropensity,
    this.nuclearProximity = nuclearProximity,
    this.lifeExpectancy,
    this.planetaryAge,
    this.planetaryLifeExpectancy,
    this.planetaryLifeSpan
  }


    
  lifeExpectancyCalculator(){
    this.lifeExpectancy = 100;
    if (this.gender === "Male"){
      this.lifeExpectancy  -= 18;
    } else {
      this.lifeExpectancy  -= 10;
    }
      
    this.lifeExpectancy -= this.fireworkPropensity;
    
    if (this.nuclearProximity === "less than 1000 miles"){
      this.lifeExpectancy  *= 0.95;
    } else if (this.nuclearProximity === "less than 100 miles"){
      this.lifeExpectancy  *= 0.88;
    } else if (this.nuclearProximity === "less than 20 miles"){
      this.lifeExpectancy  *= 0.75;
    }
    this.lifeExpectancy = parseInt(this.lifeExpectancy.toFixed());
  }

  planetCalculator(planet){
    if (planet === "Mercury"){
      this.planetaryAge = parseInt((this.age * 365/(365*0.24)).toFixed());
      this.planetaryLifeExpectancy = parseInt((this.lifeExpectancy * 365/(365*0.24)).toFixed());
      this.planetaryLifeSpan = this.planetaryLifeExpectancy - this.planetaryAge;
    } else if (planet === "Venus"){
      this.planetaryAge = parseInt((this.age * 365/(365*0.62)).toFixed());
      this.planetaryLifeExpectancy = parseInt((this.lifeExpectancy * 365/(365*0.62)).toFixed());
      this.planetaryLifeSpan = this.planetaryLifeExpectancy - this.planetaryAge;
    } else if (planet === "Mars"){
      this.planetaryAge = parseInt((this.age * 365/(365*1.88)).toFixed());
      this.planetaryLifeExpectancy = parseInt((this.lifeExpectancy * 365/(365*1.88)).toFixed());
      this.planetaryLifeSpan = this.planetaryLifeExpectancy - this.planetaryAge;
    } else if (planet === "Jupiter") {
      this.planetaryAge = parseInt((this.age * 365/(365*11.86)).toFixed());
      this.planetaryLifeExpectancy = parseInt((this.lifeExpectancy * 365/(365*11.86)).toFixed());
      this.planetaryLifeSpan = this.planetaryLifeExpectancy - this.planetaryAge;
    }
  }
}
