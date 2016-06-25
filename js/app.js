
//gets the color of the button that is currently selected
var color = $(".selected").css( "background-color" );

//updates the new color on the spam element
function changeColor() {
  //selects and assigns the values from each slider
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  
  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

$("input[type=range]").change(changeColor);

//round colored buttons are clicked
$(".controls li").click(function() {
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