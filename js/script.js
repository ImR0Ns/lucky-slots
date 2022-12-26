/* 
    Jackpots are hard to increase, you have to play to increase them.
    1-hard, 2-intermediar, 3-eazy, 4-very eazy
*/
var jackpotOne = 0,
    jackpotTwo = 0,
    jackpotThree = 0,
    jackpotFour = 0;

//curent bet | last bet
var currentBet = [null, "last"];

//balance
var balance = 100;

/* 
    //probabilities
    8-elements (7, wild, 5, 4, 3, 2, 1, $) 
    7-0.2
    wild-0.5
    5-0.4
    4-0.4
    $-0.3
    3-0.6
    2-0.7
    1-0.7
    -------
    0.7 + 0.8 + 0.9 + 1.4 = 1.5 + 2.3 = 3.8 => 38 elms
*/
var allProb = [
    7, 7, "w", "w", "w", "w", "w", 5, 5, 5, 5,
    4, 4, 4, 4, "$", "$", "$", 3, 3, 3, 3, 3, 3,
    2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1
]
var allProbWithoutWilds = allProb.filter((e)=>e!="w"); // for first col and last col

//matrix
var getPrizes = [[], [], []];

//dictionary for matrix
var dicForPrizes = {};

//save in backend gains
// gains default => gains * currentBet[0]
var gainsPerLine = {
    7: [50, 200, 1500],
    5: [20, 50, 250],
    4: [20, 50, 250],
    "$": [60, 400, 2000],
    3: [10, 25, 100],
    2: [5, 15, 50],
    1: [5, 15, 50]
}

$(document).ready(()=>{

    //set bets
    setBets("bOne");
    setBets("bTwo");
    setBets("bThree");
    setBets("bFour");

    //start game
    startGame();

})

function setBets(className) {
    $("."+className+"").click(function(){
        //old bet set color default
        $("."+currentBet[1]+"").css("border-color", "#457b9d");
        //new values to currentBet
        currentBet[0] = Number($("."+className+"").text().split("$")[1])
        currentBet[1] = className;
        //set active bet color
        $("."+className+"").css("border-color", "#e63946");
        //console.log(currentBet)

        //set new values on paytable
        setNewValues(7)
        setNewValues(5)
        setNewValues(4)
        setNewValues("$")
        setNewValues(3)
        setNewValues(2)
    }) 
}

function setNewValues(number){
    switch (number) {
        case 7:
            $(".firstSeven").text("$"+1500 * currentBet[0])
            $(".twoSeven").text("$"+200 * currentBet[0])
            $(".threeSeven").text("$"+50 * currentBet[0])
            $(".fourSeven").text("$"+10 * currentBet[0])
            break;
        case 5:
            $(".firstFive").text("$"+250 * currentBet[0])
            $(".twoFive").text("$"+50 * currentBet[0])
            $(".threeFive").text("$"+20 * currentBet[0])
        case 4:
            $(".firstFour").text("$"+250 * currentBet[0])
            $(".twoFour").text("$"+50 * currentBet[0])
            $(".threeFour").text("$"+20 * currentBet[0])
        case "$":
            $(".firstDollar").text("$"+2000 * currentBet[0])
            $(".twoDollar").text("$"+400 * currentBet[0])
            $(".threetDollar").text("$"+60 * currentBet[0])
        case 3:
            $(".firstThree").text("$"+100 * currentBet[0])
            $(".twoThree").text("$"+25 * currentBet[0])
            $(".threeThree").text("$"+10 * currentBet[0])
        case 2:
            $(".firstTwo").text("$"+50 * currentBet[0])
            $(".twoTwo").text("$"+15 * currentBet[0])
            $(".threeTwo").text("$"+5 * currentBet[0])
        case 1:
            $(".firstOne").text("$"+50 * currentBet[0])
            $(".twoOne").text("$"+15 * currentBet[0])
            $(".threeOne").text("$"+5 * currentBet[0])
        default:
            break;
    }
}

function startGame(){
    $(".playButton").click(function(){
        if(currentBet[0] == null) {
            alert("Choose bet please!");
        } else if(balance >= currentBet[0]){
            //reset to ?
            setAllRows(); 

            //implement balance
            balance -= currentBet[0];
            $(".theBalance").text("$"+balance);

            //first col
            setTimeout(function() { 
                var rdm = setRandomProb(allProbWithoutWilds);
                $(".rowOneColFirst").text(rdm); 
                getPrizes[0].push(rdm);
                //add to dictionary for frontend
                dicForPrizes[["rowOneColFirst", 1]] = [rdm, 1];
            }, 1000);
            setTimeout(function() { 
                var rdm = setRandomProb(allProbWithoutWilds);
                $(".rowTwoColFirst").text(rdm); 
                getPrizes[1].push(rdm);
                dicForPrizes[["rowTwoColFirst", 2]] = [rdm, 1];
            }, 1500);
            setTimeout(function() { 
                var rdm = setRandomProb(allProbWithoutWilds);
                $(".rowThreeColFirst").text(rdm); 
                getPrizes[2].push(rdm);
                dicForPrizes[["rowThreeColFirst", 3]] = [rdm, 1];
            }, 2000);

            //second col
            setTimeout(function() { 
                var rdm = setRandomProb(allProb);
                $(".rowOneColTwo").text(rdm); 
                getPrizes[0].push(rdm);
                dicForPrizes[["rowOneColTwo", 1]] = [rdm, 2];
            }, 2500);
            setTimeout(function() { 
                var rdm = setRandomProb(allProb);
                $(".rowTwoColTwo").text(rdm); 
                getPrizes[1].push(rdm);
                dicForPrizes[["rowTwoColTwo", 2]] = [rdm, 2];
            }, 3000);
            setTimeout(function() { 
                var rdm = setRandomProb(allProb);
                $(".rowThreeColTwo").text(rdm); 
                getPrizes[2].push(rdm);
                dicForPrizes[["rowThreeColTwo", 3]] = [rdm, 2];
            }, 3500);
            
            //third col
            setTimeout(function() { 
                var rdm = setRandomProb(allProb);
                $(".rowOneColThree").text(rdm); 
                getPrizes[0].push(rdm);
                dicForPrizes[["rowOneColThree", 1]] = [rdm, 3];
            }, 4000);
            setTimeout(function() { 
                var rdm = setRandomProb(allProb);
                $(".rowTwoColThree").text(rdm); 
                getPrizes[1].push(rdm);
                dicForPrizes[["rowTwoColThree", 2]] = [rdm, 3];
            }, 4500);
            setTimeout(function() { 
                var rdm = setRandomProb(allProb);
                $(".rowThreeColThree").text(rdm); 
                getPrizes[2].push(rdm);
                dicForPrizes[["rowThreeColThree", 3]] = [rdm, 3];
            }, 5000);
            
            //fourth col
            setTimeout(function() { 
                var rdm = setRandomProb(allProb);
                $(".rowOneColFour").text(rdm); 
                getPrizes[0].push(rdm);
                dicForPrizes[["rowOneColFour", 1]] = [rdm, 4];
            }, 5500);
            setTimeout(function() { 
                var rdm = setRandomProb(allProb);
                $(".rowTwoColFour").text(rdm); 
                getPrizes[1].push(rdm);
                dicForPrizes[["rowTwoColFour", 2]] = [rdm, 4];
            }, 6000);
            setTimeout(function() { 
                var rdm = setRandomProb(allProb);
                $(".rowThreeColFour").text(rdm); 
                getPrizes[2].push(rdm);
                dicForPrizes[["rowThreeColFour", 3]] = [rdm, 4];
            }, 6500);
            
            //fifth col
            setTimeout(function() { 
                var rdm = setRandomProb(allProbWithoutWilds);
                $(".rowOneColFive").text(rdm); 
                getPrizes[0].push(rdm);
                dicForPrizes[["rowOneColFive", 1]] = [rdm, 5];
            }, 7000);
            setTimeout(function() { 
                var rdm = setRandomProb(allProbWithoutWilds);
                $(".rowTwoColFive").text(rdm); 
                getPrizes[1].push(rdm);
                dicForPrizes[["rowTwoColFive", 2]] = [rdm, 5];
            }, 7500);
            setTimeout(function() { 
                var rdm = setRandomProb(allProbWithoutWilds);
                $(".rowThreeColFive").text(rdm); 
                getPrizes[2].push(rdm);
                dicForPrizes[["rowThreeColFive", 3]] = [rdm, 5];

                //make probabilities
                if(getPrizes[2].length == 5){
                    //set cols full wild
                    setAllColWild();
                    calculateWins();
                }

            }, 8000);


        }
    });
}

//reset rows to ? after click play again.
function setAllRows(){

    //clear all timeouts
    const highestId = window.setTimeout(() => {
        for (let i = highestId; i >= 0; i--) {
          window.clearInterval(i);
        }
    }, 0);

    //reset getPrizes
    getPrizes = [[], [], []];

    $(".rowOneColFirst").text("?");
    $(".rowTwoColFirst").text("?");
    $(".rowThreeColFirst").text("?");
    $(".rowOneColTwo").text("?"); 
    $(".rowTwoColTwo").text("?");
    $(".rowThreeColTwo").text("?");
    $(".rowOneColThree").text("?");
    $(".rowTwoColThree").text("?");
    $(".rowThreeColThree").text("?");
    $(".rowOneColFour").text("?");
    $(".rowTwoColFour").text("?");
    $(".rowThreeColFour").text("?");
    $(".rowOneColFive").text("?");
    $(".rowTwoColFive").text("?");
    $(".rowThreeColFive").text("?");
}

//random with chances
function setRandomProb(arr){
    var idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

//set full wilds on col
function setAllColWild(){
    for(var i in dicForPrizes){
        if(dicForPrizes[i][0] == "w") {
            for(var j in dicForPrizes){
                if(dicForPrizes[j][1] == dicForPrizes[i][1]) {
                    //to change in matrix
                    var getRowPrize = Number(j.split(",")[1]) - 1;
                    var getColPrize = Number(dicForPrizes[j][1]) - 1;
                    getPrizes[getRowPrize][getColPrize] = "w";

                    //to change front 
                    $("."+j.split(",")[0]+"").text("w");
                }
            }
        }
    }
}

//calculate lines
function calculateWins(){
    
    //final return for lastWin -> $(".lastWin").text("$"+howMuchWin * currentBet[0])
    var finalSum = 0;

    //for first row
    var counter = 0;

    //firstRow
    for(var i in getPrizes[0]){
        if(getPrizes[0][i] == getPrizes[0][0] || getPrizes[0][i] == 'w') {
            counter++;
        } else {
            break;
        }
    }
    //console.log(counterFirstRow) -> works fine
    if(counter >=3) {
        var howMuchWin = gainsPerLine[getPrizes[0][0]][counter-3];
        //console.log(howMuchWin) -> works fine
        finalSum += howMuchWin * currentBet[0];
    }

    //console.log(counter) //check counter for first row

    counter = 0;

    //console.log(counter) // check reset counter

    //second row
    for(var k in getPrizes[1]){
        if(getPrizes[1][k] == getPrizes[1][0] || getPrizes[1][k] == 'w') {
            counter++;
        } else {
            break;
        }
    }
    if(counter >=3) {
        var howMuchWin = gainsPerLine[getPrizes[1][0]][counter-3];
        //console.log(howMuchWin) -> works fine
        finalSum += howMuchWin * currentBet[0];
    }

    //console.log(counter) // check counter second row
    counter = 0;

    for(var l in getPrizes[2]){
        if(getPrizes[2][l] == getPrizes[2][0] || getPrizes[2][l] == 'w') {
            counter++;
        } else {
            break;
        }
    }
    if(counter >=3) {
        var howMuchWin = gainsPerLine[getPrizes[2][0]][counter-3];
        //console.log(howMuchWin) -> works fine
        finalSum += howMuchWin * currentBet[0];
    }

    counter = 0;

    /* 
        next check
        \    /
         \  /
          \/
    */
    var inV = [
        getPrizes[0][0], getPrizes[1][1], getPrizes[2][2],
        getPrizes[1][3], getPrizes[0][4]
    ]
    //console.log(inV)
    for(var j=0; j<inV.length; j++){
        if(inV[j] == inV[0]) { counter++; }
    }
    //console.log(counter)
    if(counter >=3) {
        var howMuchWin = gainsPerLine[inV[0]][counter-3];
        //console.log(howMuchWin) //-> works fine
        finalSum += howMuchWin * currentBet[0];
    }

    //to back and front
    balance += finalSum;
    $(".lastWin").text("$"+finalSum);

}