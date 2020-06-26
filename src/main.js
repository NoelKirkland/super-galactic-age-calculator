import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { User } from '../src/planet-age-calculator.js';

$(document).ready(function () {
  $('form#user-info').submit(function (event) {
      event.preventDefault();
      let inputtedName = $("#first-name").val();
      let inputtedAge = parseInt($("#age").val());
      let inputtedGender = $("input:radio[name=gender]:checked").val();
      let inputtedFireworkPropensity = parseInt($("input:radio[name=love-of-fireworks]:checked").val());
      let inputtedNuclearProximity = $("#nuclear-proximity").val();

      let inputtedUser = new User(`{inputtedName}`, `{inputtedAge}`, `{inputtedGender}`)
      let inputtedUser = inputtedUser.lifeExpectancyCalculator();
      // console.log(inputtedName);
      // console.log(inputtedAge);
      // console.log(inputtedGender);
      // console.log(inputtedFireworkPropensity);
      // console.log(inputtedNuclearProximity);

      $("#hidden1").show();
      $("#life-expectancy").show();
  });
});