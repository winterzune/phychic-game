
//created array, idea is if user guesses all the letters in the array to form the chosen word (carbon), then they win.


window.onload = function () {

    var altered = ["c", "a", "r", "b", "o", "n"];
    //randomize a letter from the arrays

    var random = Math.floor(Math.random() * altered.length) + 0;
    var computerguess = altered[random]

    //starting the counters at 0
    var wins = 0;
    var loss = 0;
    var tries = 9;
    //var userguess;
    var wincounter = "Wins: " + wins;
    var triescounter = "Attempts Left: " + tries;
    var losscounter = "Losses: " + loss;

//link to make the value show in the html tags
    var linkz = function() {
        document.getElementById("wincounter").innerHTML = wincounter
        document.getElementById("losscounter").innerHTML = losscounter
        document.getElementById("triescounter").innerHTML = triescounter
    };
    
    
    

    //listening for keypresses
    document.onkeypress = function (event) {
        var userguess = event.key;
        console.log(userguess);
        console.log(computerguess);


        //conditions set broad for now, so if user guesses c or a or ....
        if (userguess == computerguess) { //|| (userguess == "a") || (userguess == "r") || (userguess == "b") || (userguess == "o") || (userguess == "n")) {

            // I'm confused with syntax, as to how to say what I want with js. I understand I'm adding here, but I'm not sure if all I need is to say return or what.
            wins++;
            tries = tries - 1;
            wincounter = "Wins: " + wins;
            linkz();

        } else {

            loss++;
            tries = tries - 1;
            losscounter = "Losses: " + loss;

            triescounter = "Attempts Left: " + tries;
            linkz();
        };


        // tries counter || if tries reaches 0, display alert message "you lost!" || I am not sure if this if should be inside the brackets. I don't think it's an else if. 
        random = Math.floor(Math.random() * altered.length) + 0;
        computerguess = altered[random]


        if (tries < 0) {

            if (wins > loss) {
                alert("You won");
            } else {
                alert("you lost");
                linkz();
            };
        };




    };

    //would do the same for the losing counter
    //var losscount = document.getElementById("losscounter");

    // code that states that if the letter pressed is < aletered.length



    //not sure how to store the incorrect keypresses and display them into the website.




}

