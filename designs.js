// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var gridHeight = 1;
var gridWidth = 1;

// $('#submit_button').click(makeGrid());
$('#inputHeight').on('change paste keyup',function() {
    gridHeight = $('#inputHeight').val();
});
$('#inputWeight').on('change paste keyup',function() {
    gridWidth = $('#inputWeight').val();
});

$(document).ready(function(){
    $('#submit_button').click(function(e){        
        e.preventDefault();
        makeGrid();        
    });
});

function makeGrid() {
    // location.reload();
    generateTable();   
    
}

function generateTable() {
    document.getElementById("pixelCanvas").innerHTML = "";
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
   
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    tbl.className = "gridTable";
    var tblBody = document.createElement("tbody");
   
    // creating all cells
    for (var i = 0; i < gridHeight; i++) {
      // creates a table row
      var row = document.createElement("tr");
   
      for (var j = 0; j < gridWidth; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        
        row.appendChild(cell);
      }
   
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
   
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");

    document.getElementById("pixelCanvas").appendChild(tbl); 
}