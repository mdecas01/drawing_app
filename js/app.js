
//gets the color of the button that is currently selected
var color = $(".selected").css( "background-color" );

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