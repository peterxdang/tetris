$(document).ready(function () {
    console.log("hello world")
    $("#thesis").on( "click", function(){
        working();
    })
} 
);


working = () => {
    console.log("just kidding");

}

$( "#target" ).click(function() {
    alert( "Handler for .click() called." );
  });