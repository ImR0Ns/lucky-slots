//import variable
import {currentBet, balance, addSubstractBalance, allProbWithoutWilds, allProb, getPrizes, dicForPrizes } from './script.js';
import calculateJackPots from './calculateJackpots.js';
import setAllRows from './setAllRows.js';
import setRandomProb from './setRandomProb.js';
import setAllColWild from './setAllColWild.js';
import calculateWins from './calculateWins.js';

//start game function
export default function startGame(){
    $(".playButton").click(function(){
        if(currentBet[0] == null) {
            alert("Choose bet please!");
        } else if(balance >= currentBet[0]){

            //jackpots
            calculateJackPots();

            //reset to ?
            setAllRows(); 

            //implement balance
            addSubstractBalance(currentBet[0], false)
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