// Get the cities, states, countries and shapes lists form data.js
var cities = [];
var states = [];
var countries = [];
var shapes = [];

data.forEach((ufoSight) => {
    cities.push(ufoSight.city);
    states.push(ufoSight.state);
    countries.push(ufoSight.country);
    shapes.push(ufoSight.shape);
})

// Get unique values for each dropdown

let uniqueCities = cities.filter((item, i, ar) => ar.indexOf(item) === i);

let uniqueStates = states.filter((item, i, ar) => ar.indexOf(item) === i);

let uniqueCountries = countries.filter((item, i, ar) => ar.indexOf(item) === i);

let uniqueShapes = shapes.filter((item, i, ar) => ar.indexOf(item) === i);

//Code to run on html load 
function myOnLoad() {
    load_dropdowns()
   }
   
   // funcion para Cargar Provincias al campo <select>
   function load_dropdowns() {
    //var arrayCities = uniqueCities;
   
    // Ordena el Array Alfabeticamente, es muy facil ;)):
    uniqueCities.sort();
    uniqueStates.sort();
    uniqueCountries.sort();
    uniqueShapes.sort();
   
    addCities("city", uniqueCities);
    addCities("state", uniqueStates);
    addCities("country", uniqueCountries);
    addCities("shape", uniqueShapes);
   }
   
   // Rutina para agregar opciones a un <select>
   function addCities(domElement, array) {
    var select = document.getElementsByName(domElement)[0];
   
    for (value in array) {
     var option = document.createElement("option");
     option.text = array[value];
     select.add(option);
    }
   }