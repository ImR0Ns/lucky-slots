//import variable
import {currentBet} from './script.js';

//set new values to paytable
export function setNewValues(number){
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