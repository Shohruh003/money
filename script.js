var elInput = document.querySelector(".input");
var elButton = document.querySelector(".button");
var elHeading = document.querySelector(".heading");
var elSelect = document.querySelector(".select");
var elForm = document.querySelector(".form");

var kursUsd = 11000;
var kursEuro = 12800;
var kursRub = 137;



elButton.addEventListener("click", function (e){

  e.preventDefault();
  
  var sum = elInput.value;
  var convertDirectory = elSelect.value;

  if (convertDirectory == "usd") {
    var usd = (sum / kursUsd).toFixed(2);
    elHeading.textContent = sum + " So'm " + "= " + usd + " USD";
  } 

  else

  if (convertDirectory == "rub") {
    var rub = (sum / kursRub).toFixed(2);
    elHeading.textContent = sum + " So'm " + "= " + rub + " Ruble";
  }
  
  else
  
  if (convertDirectory == "euro") {
    var euro = (sum / kursEuro).toFixed(2);
    elHeading.textContent = sum + " So'm " + "= " + euro + " Yevro";
  }

})