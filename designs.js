// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var gridHeight = 1;
var gridWidth = 1;
var gridColor = "black";

$('#inputHeight').on('change paste keyup',function() {
    gridHeight = $('#inputHeight').val();
    limitControl($(this));
});
$('#inputWeight').on('change paste keyup',function() {
    gridWidth = $('#inputWeight').val();
    limitControl($(this));
});

colorPicker.addEventListener("change", function() {
    gridColor = this.value;
})


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
    // Clear the table generated last time
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
        
        cell.addEventListener("click", function() {
            this.style.backgroundColor = gridColor;
        })

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

function limitControl(input) {
    if ((input.val() > 100)||(input.val() < 0))
        input.val(1);
}
