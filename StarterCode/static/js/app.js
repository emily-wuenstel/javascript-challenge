// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select('tbody');

//console.log(data);

//Create action when the button is pressed
var button = d3.select('#filter-btn')

var form = d3.select('form')

//Button clicking action
button.on('click', runEnter);
form.on('submit', runEnter);

//Create runEnter function for when button is pressed
function runEnter() {

    //Find the data from data and store into element
    var inputElement = d3.select('#datetime');
   
    //Find true value of the field for use later 
    var inputVal = inputElement.property('value');

    //log it out to make sure it's stored correctly 
    //console.log(inputVal);

    //create filter based on the date found
    var filteredData = data.filter(datetime => datetime.datetime === inputVal);

    //check to see if the data returned is lenght of 0 (no results) or not, and act accordingly
    let response = {
        filteredData
    }

    //if the length is not zero, build the table based on the reults from filter
    if (response.filteredData.length !== 0) {
        buildTable(filteredData)
    }

    //if the length is zero, inform the user no results were available and to try again
    else {
        tbody.html('')
        tbody.append("tr").append("td").text("No results available, please search again");
    }
}

//buildtable function which is called to build the table when results are found (called in line 41)
function buildTable(d) {

    tbody.html('');

    d.forEach(function(inputData) {
        var row = tbody.append('tr');
        Object.entries(inputData).forEach(function([key, value]) {
            var cell = row.append('td');
            cell.text(value);
            });
    });

}

buildTable(data)