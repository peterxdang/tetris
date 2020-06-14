$(document).ready(function () {
    console.log("hello world")
    $("#thesis").on( "click", function(){
        working();
    })
    $("#punny").on( "click", function(){
        johnCena();
    })
} 
);


working = () => {
    console.log("just kidding");

}

$( "#target" ).click(function() {
    alert( "Handler for .click() called." );
  });

function johnCena () {
    console.log("funny");
  }