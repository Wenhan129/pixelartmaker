// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let gridHeight = 1;
let gridWidth = 1;
let gridColor = "black";

// If the height and width changed, update the global value
$('#inputHeight').on('change paste keyup',function() {
    gridHeight = $('#inputHeight').val();
    limitControl($(this));
});

$('#inputWeight').on('change paste keyup',function() {
    gridWidth = $('#inputWeight').val();
    limitControl($(this));
});

// If the color picked, update the color value
colorPicker.addEventListener("change", function() {
    gridColor = this.value;
})

// Submit button function
$(document).ready(function() {
    $('#submit_button').click(function(e){        
        e.preventDefault();
        makeGrid();        
    });
});

// To pre-judge if the input value is too much or not
function limitControl(input) {
    if ((input.val() > 100)||(input.val() < 0)) {
        input.val(1);
        alert("Please input a number between 0 and 100.");   
}
}

// A DOM method to generate a table
// As a child class of table id: pixelCanvas
function makeGrid() {
    // Clear the table generated last time
    document.getElementById("pixelCanvas").innerHTML = "";
    // get the reference for the body
    let body = document.getElementsByTagName("body")[0];
   
    // creates a <table> element and a <tbody> element
    let tbl = document.createElement("table");
    tbl.className = "gridTable";
    let tblBody = document.createElement("tbody");
   
    // creating all cells
    for (let i = 0; i < gridHeight; i++) {
      // creates a table row
      let row = document.createElement("tr");
   
      for (let j = 0; j < gridWidth; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        let cell = document.createElement("td");
        
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
