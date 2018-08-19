//varaiables
var computerChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var playerGuess 
var guessLeft = 9;
var wins= 0;
var losses = 0;
document.onkeyup = function (event) {
playerGuess=event.key;
var computerGuess=computerChoice[Math.floor(Math.random()* computerChoice.length)];}
if (playerGuess===computerGuess) {
wins++    
}else if (playerGuess!==computerGuess) {
    guessLeft--;
}
if (guessLeft===0) {
    losses++
}
