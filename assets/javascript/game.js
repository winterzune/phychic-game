var altered = ["c", "a", "r", "b", "o", "n"];

var wins = 0;
var loss = 0;
var userguess = 0;



var listenForKeys = function () {
document.onkeypress = handleKeyPress
};

var handleKeyPress = function () {

};

var wincount = document.getElementById("wincounter");
var losscount = document.getElementById("losscounter");

document.onkeyup =  function(event) {
      var userguess = event.key;


if ((userguess === "c") || (userguess === "a") || (userguess === "r") || (userguess === "b") || (userguess === "o") || (userguess === "n")) {

     return wins ++;
}
else if (altered.indexOf < -1) {
      
     return    loss++ ;
}}