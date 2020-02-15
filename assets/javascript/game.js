$(document).ready(function () {

    //Global Variables==================
    var randomNumber;
    var ranNum1;
    var ranNum2;
    var ranNum3;
    var ranNum4;
    var wins = 0;
    var losses = 0;
    var allNumbers = [];
    var sumOfNumbers = 0;

    //Functions===================
    function gameBegin() {
        randomNumber = Math.floor(Math.random() * (121 - 19)) + 19;
        $("#RandomNumber").text(randomNumber);
        ranNum1 = Math.floor(Math.random() * (13 - 1)) + 1;
        ranNum2 = Math.floor(Math.random() * (13 - 1)) + 1;
        ranNum3 = Math.floor(Math.random() * (13 - 1)) + 1;
        ranNum4 = Math.floor(Math.random() * (13 - 1)) + 1;
    }
    console.log(gameBegin());


    function reset() {
        gameBegin();
        // $(".number").empty();
        allNumbers = [];
        sumOfNumbers = 0;
        $("#sumNumbers").html(0);

    };

    $("#btn1").on("click", function () {
        allNumbers.push(ranNum1);
        console.log(allNumbers);

    });

    $("#btn2").on("click", function () {
        allNumbers.push(ranNum2);
        console.log(allNumbers);

    });

    $("#btn3").on("click", function () {
        allNumbers.push(ranNum3);
        console.log(allNumbers);

    });

    $("#btn4").on("click", function () {
        allNumbers.push(ranNum4);
        console.log(allNumbers);

    });

    $(".number").on("click", function () {
        sumOfNumbers = allNumbers.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        }, 0);
        $("#sumNumbers").text(sumOfNumbers);

        if (sumOfNumbers === randomNumber) {
            alert("you win. Your number is " + sumOfNumbers);
            wins++;
            $("#WinText").text(wins);
            reset();
        }
        if (sumOfNumbers >= randomNumber) {
            alert("you lost. Your number is " + sumOfNumbers);
            losses++;
            $("#loseText").text(losses);
            reset();
        }
    })


    //4. Everytime user clicked, the brower will check as if the total number is smaller or bigger.




    //a. Check if the totalNumber is bigger than the computer random number. 
    //user lose -> refresh the page.



    //b. Check if the totalNumber is smaller, keep adding number when clicked.


});