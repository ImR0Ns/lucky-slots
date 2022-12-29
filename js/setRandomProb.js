//random with chances
export default function setRandomProb(arr){
    var idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}