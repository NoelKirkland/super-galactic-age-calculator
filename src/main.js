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

      let inputtedUser = new User(`{inputtedName}`, `{inputtedAge}`, `{inputtedGender}`)
      let inputtedUser = inputtedUser.lifeExpectancyCalculator();

      $("#hidden1").show();
      $("#life-expectancy").show(this.lifeExpectancy);
  });
  $('.planet-button').click(function (event) {
      let planetSelect = $("#planet-select").val();

      if (`{planetSelect}` = "Mercury"){
        inputtedUser.murcuryCalculator();
        $("#selected-planet").show(`{planetSelect}`);
        $("#planetary-age").show(this.planetaryAge);
        $("#planetary-life-expectancy").show(this.lifeExpectancy);
      } else if (`{planetSelect}` = "Venus"){
        inputtedUser.venusCalculator();
        $("#selected-planet").show(`{planetSelect}`);
        $("#planetary-age").show(this.planetaryAge);
        $("#planetary-life-expectancy").show(this.lifeExpectancy);
      } else if (`{planetSelect}` = "Mars"){
        inputtedUser.marsCalculator();
        $("#selected-planet").show(`{planetSelect}`);
        $("#planetary-age").show(this.planetaryAge);
        $("#planetary-life-expectancy").show(this.lifeExpectancy);
      } else if (`{planetSelect}` = "Jupiter"){
        inputtedUser.jupiterCalculator();
        $("#selected-planet").show(`{planetSelect}`);
        $("#planetary-age").show(this.planetaryAge);
        $("#planetary-life-expectancy").show(this.lifeExpectancy);
      }
  });
});