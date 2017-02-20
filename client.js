// 1. In this challenge you will be creating an application that will
// create colored <div> tag each time the corresponding color is clicked.
//
// 2. Also, as each color (button) is clicked, it should increment the corresponding label.
//
// Tip: Again, HTML and CSS are provided and shouldn't require code changes.
//
// 3. To start this code challenge fork this repository and clone it to your machine.

var colorCount = 0;

$(document).ready(function() {

  $(".color-button").on("click", function(){
    blocks($(this).data("color")); //line calls the function below on button click
    console.log($(this).data("color")); //console.logs the color of the represented color button pushed
    updateDOM($(this).data("color")); //line calls the function below on button click
  });//end of click function

//updates counter on DOM
  function updateDOM(color){
    colorCount++;
    console.log(color);
    $("#" + color).text(colorCount);
  }//end of addBlockz()

//adds blocks to DOM
  function blocks(color) {
//got div class from styles.css page
    $(".container").append("<div class='color-cube " + color + "'></div>");
  }//end of addBlockz()
});//end of document.ready function
