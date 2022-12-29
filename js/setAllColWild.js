//import variable
import { dicForPrizes, getPrizes } from "./script.js";

//set full wilds on col 
export default function setAllColWild(){
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