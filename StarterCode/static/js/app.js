// from data.js
var tableData = data;

var tbody = d3.select('tbody');

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
    var inputElement2 = d3.select('#city');



    if (inputElement.property('value') !== '') {
        var inputDate = inputElement.property('value');
    }
    else {
        var inputCity = inputElement2.property('value')
        var inputDate = ''
    }

    console.log(inputCity)
    console.log(inputDate)

    if (inputDate !== '') {
        //clear input 
        d3.select('#datetime').node().value = ''
        
        // create filter based on the date found
        var filteredData = data.filter(datetime => datetime.datetime === inputDate);

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
        
    else {
        //clear input
        d3.select('#city').node().value = ''

        //create filter based on the city found
         var filteredData = data.filter(city => city.city === inputCity);

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
        
}
//-------------------------------------------------------------------------------------------------------------------------------------------
//create data function which will be called depending on which data variant is filled in 







//-------------------------------------------------------------------------------------------------------------------------------------------
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


//-------------------------------------------------------------------------------------------------------------------------------------------
//build entire table as default
buildTable(data)

//-------------------------------------------------------------------------------------------------------------------------------------------
//Reset Button Functionality 
var resetButton = d3.select('#reset-btn')

resetButton.on('click', runReset);

function runReset() {
    buildTable(data)
}
//-------------------------------------------------------------------------------------------------------------------------------------------