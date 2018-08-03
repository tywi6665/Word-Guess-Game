
//Variable Declaration
var wordChoices = ["tatooine", "anakin", "lightsaber", "naboo", "skywalker", "rebellion", "empire", "obiwan", "force", "dagobah"];
var images = ["../assets/images/tatooine.jpg", "../assets/images/anakin.jpg", "../assets/images/lightsaber.jpg", "../assets/images/naboo.jpg", "../assets/images/skywalker.jpg", "../assets/images/rebellion.jpg", "../assets/images/empire.jpg", "../assets/images/obiwan.jpg", "../assets/images/force.jpg", "../assets/images/dagobah.jpg",]
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var numGuessesLeft = 6;
var answer = []
var incorrectLetters = []

//Upon page loading, computer chooses word at random with associated picture
var randomNumber = Math.floor(Math.random()*wordChoices.length)
var randomWord = wordChoices[randomNumber];
var randomWordImage = images[randomNumber];
    console.log(randomWord);

//Make word into a separate array 
var randomWordArr = randomWord.split("");
    console.log(randomWordArr);
//Make a variable to compare number of letters left in random word
var lettersLeft = randomWordArr.length;

//Every key stroke to be logged 
document.addEventListener("keyup", function(event){
    console.log(event.key);
    if(true) {
        letterGuess(event);
    }

    //Check to see if the letter pressed is in the answer
    function letterGuess(guess) {
        if (letterChoices.indexOf(guess.key) > -1) {
            correctLetterCheck(guess);
            console.log(letterGuess);
        }
    }

    //Check whether the letter is correct
    function correctLetterCheck(guess) {
        if (randomWordArr.indexOf(guess.key) > -1) {
            //Correct letter function will be run
            correctLetter(guess);
        } else {
            //Incorrect letter function will be run
            incorrectLetter(guess);
        }
        console.log(correctLetterCheck);
    }   

    //Define correct letter function
    function correctLetter(guess) {
        if (answer.indexOf(guess.key) < 0) {
            //Runs the addCorrectLetter function
            addCorrectLetter(guess);
        }
        console.log(correctLetter);
    }

    //Define incorrect letter function
    function incorrectLetter(guess) { 
        if (incorrectLetters.indexOf(guess.key) < 0) {
            //Runs the addIncorrectLetter function
            addIncorrectLetter(guess);
        }
        console.log(incorrectLetter);
    }

    //Define addCorrectLetter function
    function addCorrectLetter(guess) {
        for (var i = 0; i < randomWordArr.length; i++) {
            if (guess.key === randomWordArr[i]) {
                answer[i] = guess.key.toUpperCase();
                    var showLetter = document.querySelector("#currentWord");
                    showLetter.textContent = answer.join(" ");
                lettersLeft--;
                if (lettersLeft === 0) {
                    wins++;
                    var showWins = document.querySelector("#wins");
                        showWins.textContent = wins;
                    var showImage = document.querySelector("#image");
                        showImage.src = randomWordImage;
                }
            }
            console.log(addCorrectLetter);
        }
    }

    //Define addIncorrectLetter function
    function addIncorrectLetter(guess) {
        incorrectLetters.push(guess.key.toUpperCase());
        var lettersGuessed = document.querySelector("#guessedLetters");
            lettersGuessed.textContent = incorrectLetters.join(", ");
        numGuessesLeft--;
        var guessesLeft = document.querySelector("#guessesLeft");
            guessesLeft.textContent = numGuessesLeft;
        if (numGuessesLeft === 0) {
            var revealWord = document.querySelector("#currentWord");
                revealWord.textContent = randomWordArr;
        }
    }
});
