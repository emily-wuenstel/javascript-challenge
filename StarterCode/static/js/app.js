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
    var inputElement3 = d3.select('#state');
    var inputElement4 = d3.select('#country');

    if (inputElement.property('value') !== '') {
        var inputDate = inputElement.property('value')
    }
    else if (inputElement2.property('value') !== '') {
        var inputCity = inputElement2.property('value')
        var inputDate = ''
    }
    else if (inputElement3.property('value') !== '') {
        var inputState = inputElement3.property('value')
        var inputCity = ''
        var inputDate = ''
    }
    else {
        var inputCountry = inputElement4.property('value')
        var inputState = ''
        var inputCity = ''
        var inputDate = ''
    }
    
//-------------------------------------------------------------------------------------------------------------------------------------------
//Figure out what values to pass through to the filter function

    if (inputDate !== '') {
        filterData(inputDate, 'date')
    }   
    else if (inputCity !== '') {
        filterData(inputCity, 'city')
    }
    else if (inputState !== '') {
        filterData(inputState, 'state')
    }
    else {
        filterData(inputCountry, 'country')
    }
        
}
//-------------------------------------------------------------------------------------------------------------------------------------------
//create data function which will be called depending on which data variant is filled in 
function filterData(input, type) {

    console.log(input)
    console.log(type)

    if (type === 'city') {
        d3.select('#city').node().value = ''
        var filteredData = data.filter(city => city.city === input)
    }
    if (type === 'datetime'){
        d3.select('#datetime').node().value = ''
        var filteredData = data.filter(datetime => datetime.datetime === input)
    }
    if (type === 'state'){
        d3.select('#state').node().value = ''
        var filteredData = data.filter(state => state.state === input)
    }
    if (type === 'country') {
        d3.select('#country').node().value = ''
        var filteredData = data.filter(country => country.country === input)   
    }


    //Get the response data and build the table
    let response = {
        filteredData
    }

    if (response.filteredData.length !== 0) {
        buildTable(filteredData)
    }

    else {
        tbody.html('')
        tbody.append("tr").append("td").text("No results available, please search again");  
    }

}






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