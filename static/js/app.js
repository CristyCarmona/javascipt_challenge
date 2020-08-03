// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

   // Select the input elements and get the raw HTML nodes
  var inputDate = d3.select("#datetime");
  var inputCity = d3.select("#cityData");
  var inputState = d3.select("#stateData");
  var inputCountry = d3.select("#countryData");
  var inputShape = d3.select("#shapeData");

  // Get the value property of each input element
  var inputValueDate = inputDate.property("value");
  var inputValueCity = inputCity.property("value");
  var inputValueState = inputState.property("value");
  var inputValueCountry = inputCountry.property("value");
  var inputValueShape = inputShape.property("value");

  console.log(inputValueDate);
  console.log(inputValueCity);
  console.log(inputValueState);
  console.log(inputValueCountry);
  console.log(inputValueShape);

  // Clear the input elements for the next request
  d3.select("#datetime").node().value = "";
  d3.select("#cityData").node().value = "Select a city...";
  d3.select("#stateData").node().value = "Select a state...";
  d3.select("#countryData").node().value = "Select a country...";
  d3.select("#shapeData").node().value = "Select a shape...";

  
  // Initialized filtered data list 
  var filteredDataDate = []
  var filteredDataCity = []
  var filteredDataState = []
  var filteredDataCountry = []
  var filteredDataShape = []

  // ******  Filter information to display ******************** 

  // Filter by Date 
  if (inputValueDate != "") {
    filteredDataDate = tableData.filter(ufo_info => ufo_info.datetime === inputValueDate);
  }
  // Filter by City
  if (filteredDataDate.length === 0 && inputValueCity != "Select a city..."){
    filteredDataCity = tableData.filter(ufo_info => ufo_info.city === inputValueCity);
  } else if (filteredDataDate.length > 0 && inputValueCity != "Select a city...") {
    filteredDataCity = filteredDataDate.filter(ufo_info => ufo_info.city === inputValueCity);
  } else {
    filteredDataCity =  filteredDataDate;
  }
  // Filter by State
  if (filteredDataCity.length === 0 && inputValueState != "Select a state..."){
    filteredDataState = tableData.filter(ufo_info => ufo_info.state === inputValueState);
  } else if (filteredDataCity.length > 0 && inputValueState != "Select a state...") {
    filteredDataState = filteredDataCity.filter(ufo_info => ufo_info.state === inputValueState);
  } else {
    filteredDataState =  filteredDataCity;
  }
  // Filter by Country
  if (filteredDataState.length === 0 && inputValueCountry != "Select a country..."){
    filteredDataCountry = tableData.filter(ufo_info => ufo_info.country === inputValueCountry);
  } else if (filteredDataState.length > 0 && inputValueCountry != "Select a country...") {
    filteredDataCountry = filteredDataState.filter(ufo_info => ufo_info.country === inputValueCountry);
  } else {
    filteredDataCountry =  filteredDataState;
  }
  // Filter by Shape
  if (filteredDataCountry.length === 0 && inputValueShape != "Select a shape..."){
    filteredDataShape = tableData.filter(ufo_info => ufo_info.shape === inputValueShape);
  } else if (filteredDataCountry.length > 0 && inputValueShape != "Select a shape...") {
    filteredDataShape = filteredDataCountry.filter(ufo_info => ufo_info.shape === inputValueShape);
  } else {
    filteredDataShape =  filteredDataCountry;
  }

  // Final filtered information to display 
  var filteredData = filteredDataShape

  console.log(filteredData);

  // Validate that at least one input element was chosen  
  if (filteredData.length === 0 ){
    window.alert("You should select at least one option to filter any information");
  } else {
    // Get a reference to the table body
    var tbody = d3.select("tbody");

    // Erase any content in body
    //tbody.selectAll("*").remove(); (other option to clean the content of an element)
    tbody.html("");

    // Build and show the table with the filtered information  
    filteredData.forEach((ufoSight) => {
        var row = tbody.append("tr");
        Object.entries(ufoSight).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
  }

}