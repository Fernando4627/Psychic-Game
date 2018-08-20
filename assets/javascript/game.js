//varaiables
var computerChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var playerGuess
var guessLeft = 9;
var wins;
var losses;
var computerGuess;
document.onkeyup = function (event) {
    playerGuess = event.key;
    playerGuess.toUpperCase()
document.getElementById("Guess").innerHTML=playerGuess
    console.log(playerGuess)
computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log(computerGuess)
}
if (playerGuess === computerGuess) {
    wins++;
    //document.getElementsById("win").innerHTML=wins;
    //console.log(wins)

} else if (playerGuess !== computerGuess) {
    guessLeft--;
    document.getElementsById("countdown").innerHTML=losses;
    console.log(guessLeft)
}
if (guessLeft === 0) {
    losses++
    document.getElementsById("loss").innerHTML=losses;
    console.log(losses)
};

