
//Variable Declaration
var wordChoices = ["TATOOINE", "ANAKIN", "LIGHTSABER", "NABOO", "SKYWALKER", "REBELLION", "EMPIRE", "OBIWAN", "FORCE", "R2D2"];
var wins = 0;
var losses = 0;
var numGuessesLeft = 5;
var guesses = []

//Upon page loading, computer chooses word at random 
var randomWord = wordChoices[Math.floor(Math.random()*wordChoices.length)];
    console.log(randomWord);
//Make word into a separate array
var randomWordArr = randomWord.split("");
    console.log(randomWordArr);


//Every key stroke to logged 
document.onkeyup = function (event) {
    userGuess = event.key.toUpperCase();
    console.log(userGuess);
}

//Loop over each index in the random word array and compare to user's guess
for (var i =0; i< randomWordArr.length; i++) {
    if (userGuess === randomWordArr[i]) {
        
    }
}