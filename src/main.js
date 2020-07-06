import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles.css';
import { User } from '../src/planet-age-calculator.js';

$(document).ready(function () {
  $('form#user-info').submit(function (event) {
      event.preventDefault();
      let inputtedName = $("#first-name").val();
      let inputtedAge = parseInt($("#age").val());
      let inputtedGender = $("input:radio[name=gender]:checked").val();
      let inputtedFireworkPropensity = parseInt($("input:radio[name=love-of-fireworks]:checked").val());
      let inputtedNuclearProximity = $("#nuclear-proximity").val();

      let inputtedUser = new User(inputtedName, inputtedAge, inputtedGender, inputtedFireworkPropensity, inputtedNuclearProximity)
      
      let planetSelect = $("#planet-select").val();
      
      inputtedUser.lifeExpectancyCalculator();
      $("#life-expectancy").show(`According to my calculations, your should live to about ${this.lifeExpectancy} years old ${planetSelect}.`);
      inputtedUser.planetCalculator(planetSelect)
      $("#planet-life-expectancy").show(`If you were on the planet ${planetSelect} your would be ${this.planetaryAge} years old, you would live to be ${this.planetaryLifeExpectancy} years old and, you would have${this.planetaryLifeSpan} years left to live.`)
  });
});