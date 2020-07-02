$(document).ready(function () {
    console.log("hello world")
    $("#thesis").on( "click", function(){
        working();
    })
    $("#punny").on( "click", function(){
        johnCena();
    })
    $("#btn1").on( "click", function(){
        createElement();
    })
   
} 
);


createElement = () => {
    $(".class1").append("<h3>Working</h3>")
}

working = () => {
    console.log("just kidding");

}

$( "#target" ).click(function() {
    alert( "Handler for .click() called." );
  });

function johnCena () {
    console.log("funny");
  }

