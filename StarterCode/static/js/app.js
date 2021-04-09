// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select('tbody');

//console.log(data);

var button = d3.select('#filter-btn')

var form = d3.select('form')

//Button clicking action
button.on('click', runEnter);
form.on('submit', runEnter);

//Complete the function for the form
function runEnter() {

    //Find input and get HTML
    var inputElement = d3.select('#datetime');
    
    //Find value property
    var inputVal = inputElement.propery('value');

    var filteredData = data.filter(datetime => datetime.datetime === inputValue);

    let response = {
        filteredData
    }

    if (response.filteredData.length !== 0) {
        buildtable(filteredData)
    }

    else {
        tbody.html('')
        tbody.append("tr").append("td").text("No results available, please search again");
    }
}

function buildTable(d) {



    
}