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
        // $("#btn1").on("click", function() {
        //     setInterval(function() {
        //         // theAlert();
        //         createElement();
        //     }, 5000);
        // })
    $("#btn1").on("click", function() {
        createTetrisUI(20);
    });
    // $("#btn2").on("click", function() {
    //     deleteClass();
    // })
    $("#btn2").on("click", function() {

        createBlock();

    })

});

let TetrisVerticalDimension = 20;
let TetrisHoriziontalDimension = 0;
let startBlockPosition = 0;

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
};

theAlert = () => {
    alert("Timer is working")
};

deleteClass = () => {
    $("div").remove(".box1");
};

createTetrisUI = (value) => {
    console.log("working");
    for (i = 0; i <= value; i++) {
        $(`.class1`).append(`<div class = "box${i} boxes"></div>`);
    };
};

createBlock = (value) => {
    let blockCoordinate = 0;
    console.log("createBlockFunction working");
    if (blockCoordinate <= TetrisVerticalDimension) {

        setInterval(function() {
            // $(`.box${blockCoordinate - 1}`).remove(`<div class = "block"></div>`);
            $(`.box${blockCoordinate}`).append(`<div class = "block"></div>`);
        }, 1000);
        blockCoordinate++
        console.log(blockCoordinate);
    }
};