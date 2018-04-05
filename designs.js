// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var gridHeight = 1;
var gridWidth = 1;

$('#submit_button').click(makeGrid);
$('#inputHeight').on('change paste keyup',function() {
    gridHeight = $('#inputHeight').val();
});
$('#inputWidth').on('change paste keyup',function() {
    gridWidth = $('#inputWidth').val();
})

function makeGrid() {
    
}
