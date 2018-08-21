//varaiables
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var playerGuess = "";
var guessLeft = 9;
var wins = 0;
var losses = 0;
var computerGuess;
//computer Guess
//Computer's guess .... needs to stop and wait for player to hit a loss before changing
computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log(computerGuess)


//key up function
document.onkeyup = function (event) {
    playerGuess = event.key;
    //Writes on html players guess
    document.getElementById("Guess").innerHTML = playerGuess
    console.log(playerGuess)
};

//rules 
//if player Guess right
if (playerGuess === computerGuess) {
    wins++;
    document.getElementById("win").innerHTML = wins;
    console.log(wins);
    //player's lives and reduces when player does not guess right
} else (playerGuess !== computerGuess)
guessLeft--;
document.getElementsById("countdown").innerHTML = guessLeft;
console.log(guessLeft);

//when player is out of guesses they lose and new letter is chosen
if (guessLeft = 0) {
    losses++;
    document.getElementsById("loss").innerHTML = losses;
    console.log(losses);
};

