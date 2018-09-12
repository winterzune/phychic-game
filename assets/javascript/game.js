
//created array, user has to guess the chosen letters until tries runs out


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


        //user key presses vs the random number
        if (userguess == computerguess) { 

            // counter for wins start, attempts start to decrease
            wins++;
            tries = tries - 1;
            wincounter = "Wins: " + wins;
            linkz();

        } else {
// counter for losses start and attempts continue to decrease
            loss++;
            tries = tries - 1;
            losscounter = "Losses: " + loss;

            triescounter = "Attempts Left: " + tries;
            linkz();
        };


        // tries counter || if tries reaches 0, it will then return a win or a lost message 
        random = Math.floor(Math.random() * altered.length) + 0;
        computerguess = altered[random]


        if (tries < 0) {

            if (wins > loss) {
                alert("You won");
            } else {
                alert("you lost");
                linkz();

                location.reload();
            };
        };




    };




}

