
//created array, idea is if user guesses all the letters in the array to form the chosen word (carbon), then they win.
var altered = ["c", "a", "r", "b", "o", "n"];


//starting the counters at 0
var wins = 0;
var loss = 0;
var userguess;



//link to make the value show in the html tags
var wincounter = document.getElementById("wincounter");

//listening for keypresses
document.onkeypress = function(event) {
var userguess = event.key

//conditions set broad for now, so if user guesses c or a or ....
if ((userguess === "c") || (userguess === "a") || (userguess === "r") || (userguess === "b") || (userguess === "o") || (userguess === "n")) {

 // I'm confused with syntax, as to how to say what I want with the program. I understand I'm adding here, but I'm not sure if all I need is to say return or what.
    
 return (wins++);  
    }

};

//would do the same for the losing counter
//var losscount = document.getElementById("losscounter");

//not sure how to store the incorrect keypresses and display them into the website.