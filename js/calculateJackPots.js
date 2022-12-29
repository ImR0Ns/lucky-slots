//import variable
import { jackpotOne, jackpotTwo, jackpotThree, jackpotFour, currentBet, modifyJackPots } from "./script.js";


//calculate jackpots while you play
export default function calculateJackPots(){
    //add to jackpots per play 
    modifyJackPots(currentBet[0] / 20, currentBet[0] / 15, currentBet[0] / 8, currentBet[0] / 7);

    //"set to front
    $(".jOne").text(jackpotOne.toFixed(2));
    $(".jTwo").text(jackpotTwo.toFixed(2));
    $(".jThree").text(jackpotThree.toFixed(2));
    $(".jFour").text(jackpotFour.toFixed(2));
}