//Movie Array
const movie = ['jaws', 'starwars', 'scarface', 'godfather', 'titanic', 'casablanca', 'psycho', 'goodfellas'];


//Empty variables to store values later
let randomMovie = "";
let movieLetters = []
let underscore = 0;
let correctLetters = [];
let wrongGuess = [];

//Counter Variables
let wins = 0;
let losses = 0;
let livesRemaining = 9;

// DOM
let docMovieWord = document.getElementById('movieWord');
let docCorrectGuess = document.getElementById('correctGuess');
let docWrongGuess = document.getElementById('wrongLetters');
let docLives = document.getElementById('lifeCounter');



// game
function game() {
    // RNG from movie array
    randomMovie = movie[Math.floor(Math.random() * movie.length)];

    // converts word into letter array 
    movieLetters = randomMovie.split("");

    // stores length of word in underscore, for later use
    underscore = movieLetters.length;

    // creates underscores for each letter
    for (let i = 0; i < underscore; i++) {
        correctLetters.push("_");
    }

    //showing the "_" within HTML
    docMovieWord.innerText = "  " + correctLetters.join("  ");
}

// compares input to answer key

function movieCheck(letter) { 
    let letterCheck = false;
    //if the generated randomword is equal to the letter entered... then variable is true
    for (let i = 0; i < underscore; i++) {
        if (movieLetters[i] === letter) {
            letterCheck = true;
        }
    }
    //if letterCheck (false)
    if (letterCheck) {
        //check each letter to see if it matches word
        for (let i = 0; i < underscore; i++) {
            if (movieLetters[i] === letter) {
                correctLetters[i] = letter;
                docMovieWord.innerText = correctLetters.join(' ');
            }
        }
    }

    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        docWrongGuess.innerText = wrongGuess.join(' ');
        livesRemaining--;
        docLives.innerText = livesRemaining;
    }
    // console.log(correctLetters);
}

const alternateMovieCheck = letter => { //idk if you want to keep it as es6. 
    //if the letter is in the word, print
    for (let i=0; i<underscore; i++) { 
        if (movieLetters[i] === letter) {
            correctLetters[i] = letter; 
            docMovieWord.innerText = correctLetters.join(' ');
        }
    }
    //if the letter isnt in the word take life
    if (movieLetters.indexOf(letter) === -1) { 
        wrongGuess.push(letter);
        docWrongGuess.innerText = wrongGuess.join(' ');
        livesRemaining--;
        docLives.innerText = livesRemaining;
    }
};  
function reset() {
    livesRemaining = 9;
    wrongGuess = [];
    docWrongGuess.innerText = " ";
    correctLetters = [];
    game()
}

function end() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + livesRemaining)

    if (movieLetters.toString() === correctLetters.toString()) {
        wins++;
        reset();
        alert("Wow! you've won " + wins + " times!");
    } else if (livesRemaining === 0) {
        losses++;
        reset();
        alert("Uh oh... try again next time!");
    }

    docLives.innerText = livesRemaining;
}


game();


//Listens for letter inputs
document.addEventListener('keypress', (event) => {
    let keyWord = String.fromCharCode(event.keyCode);
    // movieCheck(keyWord);
    alternateMovieCheck(keyWord);
    end();
    console.log(keyWord);
    
});