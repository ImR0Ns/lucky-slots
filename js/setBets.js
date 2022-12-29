//import variable
import {currentBet} from './script.js';
import {setNewValues} from './setNewValues.js'

//set bets on change bet
export default function setBets(className) {
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