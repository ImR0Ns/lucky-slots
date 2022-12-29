//import variable
import { getPrizes, gainsPerLine, currentBet, saveColorColumns, balance, addSubstractBalance, dicForPrizes } from "./script.js";


//calculate lines
export default function calculateWins(){
    
    //final return for lastWin -> $(".lastWin").text("$"+howMuchWin * currentBet[0])
    var finalSum = 0;

    //vars
    var counter = 0;
    var counterTwo = 0; // for front light

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
        for(var i in dicForPrizes){
            if(i.split(",")[1] == 1 && counterTwo < counter) {
                var getName = "containersForAlg"+i.split(",")[0];
                saveColorColumns.push(getName);
                $("." + getName + "").css("border", "2px solid #e63946");
                counterTwo++;
            }
        }
    }

    //console.log(counter) //check counter for first row

    counter = 0;
    counterTwo = 0;

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
        for(var i in dicForPrizes){
            if(i.split(",")[1] == 2 && counterTwo < counter) {
                var getName = "containersForAlg"+i.split(",")[0];
                saveColorColumns.push(getName);
                $("." + getName + "").css("border", "2px solid #e63946");
                counterTwo++;
            }
        }
    }

    //console.log(counter) // check counter second row
    counter = 0;
    counterTwo = 0;

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
        for(var i in dicForPrizes){
            if(i.split(",")[1] == 3 && counterTwo < counter) {
                var getName = "containersForAlg"+i.split(",")[0];
                saveColorColumns.push(getName);
                $("." + getName + "").css("border", "2px solid #e63946");
                counterTwo++;
            }
        }
    }

    //reseters
    counter = 0;
    counterTwo = 0;

    /* 
        next check
        \    /
         \  /
          \/
    */
   //new dictionary for front light
    var newinV = {
        "rowOneColFirst": getPrizes[0][0],
        "rowTwoColTwo": getPrizes[1][1],
        "rowThreeColThree": getPrizes[2][2],
        "rowTwoColFour": getPrizes[1][3],
        "rowOneColFive": getPrizes[0][4]
    }

    //console.log(newinV)

    for(var j in newinV){
        if(newinV[j] == newinV["rowOneColFirst"] || newinV[j] == 'w') { counter++; }
        else { break; }
    }

    //console.log(counter)

    if(counter >=3) {
        var howMuchWin = gainsPerLine[newinV["rowOneColFirst"]][counter-3];
        //console.log(howMuchWin) //-> works fine
        finalSum += howMuchWin * currentBet[0];
        for(var i in newinV){
            if(counterTwo < counter) {
                var getName = "containersForAlg"+i;
                //console.log(getName)
                saveColorColumns.push(getName);
                $("." + getName + "").css("border", "2px solid #e63946");
                counterTwo++;
            }
        }
    }

    //to back and front
    addSubstractBalance(finalSum, true);

    //fix last win bug
    if(finalSum != 0) {
        $(".lastWin").text("$"+finalSum);
    }

}