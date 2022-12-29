//import functions 

import setBets from './setBets.js';
import startGame from './startGame.js'

//import functions 

/* 
    Jackpots are hard to increase, you have to play to increase them.
    1-hard, 2-intermediar, 3-eazy, 4-very eazy
*/
export var jackpotOne = 0,
    jackpotTwo = 0,
    jackpotThree = 0,
    jackpotFour = 0;

//curent bet | last bet
export var currentBet = [null, "last"];

//balance
export var balance = 100;

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
export var allProb = [
    7, 7, "w", "w", "w", "w", "w", 5, 5, 5, 5,
    4, 4, 4, 4, "$", "$", "$", 3, 3, 3, 3, 3, 3,
    2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1
]
//remove wilds
export var allProbWithoutWilds = allProb.filter((e)=>e!="w"); // for first col and last col

//matrix
export var getPrizes = [[], [], []];

//dictionary for matrix
export var dicForPrizes = {};

//save in backend gains
// gains default => gains * currentBet[0]
export var gainsPerLine = {
    7: [50, 200, 1500],
    5: [20, 50, 250],
    4: [20, 50, 250],
    "$": [60, 400, 2000],
    3: [10, 25, 100],
    2: [5, 15, 50],
    1: [5, 15, 50]
}

//make cols black again after play again
export var saveColorColumns = [];

//main 
$(document).ready(()=>{

    //set bets
    setBets("bOne");
    setBets("bTwo");
    setBets("bThree");
    setBets("bFour");

    //start game
    startGame();

})
//main 


//functions to change values
export function modifyJackPots(a, b, c, d) {
    jackpotOne += a;
    jackpotTwo += b;
    jackpotThree += c;
    jackpotFour += d;
} 
export function modifyGetPrisez(){
    getPrizes = [[], [], []];
}
export function modifySetColorCol(){
    saveColorColumns = [];
}
export function addSubstractBalance(n, f){
    if(f == false) { balance -= n; } 
    else { balance += n; }
}