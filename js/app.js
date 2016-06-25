
//gets the color of the button that is currently selected
var color = $(".selected").css( "background-color" );

var $canvas = $("canvas");

//selects and assigns the canvas element
var ctx = $canvas[0].getContext("2d");

var lastEvent;
var mouseDown = false;

//updates the new color on the spam element
function changeColor() {
  //selects and assigns the values from each slider
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  
  //sets the spam color to the combination of all the slide colors
  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

$("input[type=range]").change(changeColor);

//round colored buttons are clicked
$(".controls").on("click", "li", function() {
  //diselects the other buttons
  $(this).siblings().removeClass("selected");
  //selects the clicked button
  $(this).addClass("selected");
  //cache the color of the button that was clicked
  color = $(this).css( "background-color" );
  
});

$("#revealColorSelect").click(function() {
    changeColor();
    //shows or hides the box with color sliders
    $("#colorSelect").toggle();
  });
  
  $("#addNewColor").click(function() {
    //creates a detatched jquery element
    $newColor = $("<li></li>");
	//sets the new element's background color to the color of the spam element
	$newColor.css("background-color", $("#newColor").css("background-color"));
	//adds a new color button to the controls
	$(".controls ul").append($newColor);
	$newColor.click();
  });
  

  $canvas.mousedown(function(e) {
    lastEvent = e;
	mouseDown = true;
  }).mousemove(function(e) {
   
    if(mouseDown) {
      ctx.beginPath();
	  //Where the line starts
	  ctx.moveTo(lastEvent.offsetX, lastEvent.offsetY);
	  //Where the line is going to
	  ctx.lineTo(e.offsetX, e.offsetY);
	  //Sets the line color to the color of the selected button
	  ctx.strokeStyle = color;
	  ctx.stroke();
	}  
	
	//Updates the value of the lastEvent
	lastEvent = e;
  }).mouseup(function() {
    mouseDown = false;
  //If mouse cursor exits the canvas
  }).mouseleave(function() {
    //Calls the mouseup event
    $canvas.mouseup();
  });
  
  
  