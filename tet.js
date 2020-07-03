$(document).ready(function() {
    console.log("hello world")
    $("#thesis").on("click", function() {
        working();
    })
    $("#punny").on("click", function() {
            johnCena();
        })
        // $("#btn1").on("click", function() {
        //     createElement();
        // })
    $("#btn1").on("click", function() {
        setInterval(function() {
            // theAlert();
            createElement();
        }, 5000);
    })
    $("#btn2").on("click", function() {
        deleteClass();
    })

});


createElement = () => {
    $(".class1").append(`<div class = "box1"></div>`)
}

working = () => {
    console.log("just kidding");

}

$("#target").click(function() {
    alert("Handler for .click() called.");
});

function johnCena() {
    console.log("funny");
}

theAlert = () => {
    alert("Timer is working")
}

deleteClass = () => {
    $("div").remove(".box1");
}