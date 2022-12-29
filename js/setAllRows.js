//import variable
import { getPrizes, modifyGetPrisez, saveColorColumns, modifySetColorCol } from "./script.js";

//reset rows to ? after click play again.
export default function setAllRows(){

    //clear all timeouts
    const highestId = window.setTimeout(() => {
        for (let i = highestId; i >= 0; i--) {
          window.clearInterval(i);
        }
    }, 0);

    //reset getPrizes
    modifyGetPrisez();

    //reset colors
    for(var j in saveColorColumns){
        $("."+saveColorColumns[j]+"").css("border", "1px solid black");
    }
    modifySetColorCol();

    //reset to ?
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