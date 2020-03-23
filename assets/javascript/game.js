//Generates an Array of movies
const movie = ['jaws', 'starwars', 'scarface', 'godfather', 'titanic', 'casablanca', 'psycho', 'goodfellas'];

//Randomly picks from array
let randNum = Math.floor(Math.random() * movie.length);
let chosenWord = movie[randNum];
let correctGuess = [];
let wrongGuess = [];
let movieLetter = chosenWord.split("");


//Counter Variables
let wins = 0;
let losses = 0;
let guessesRemaining = 9;

// DOM
let docMovieWord = document.getElementsByClassName('movieWord');
let docCorrectGuess = document.getElementsByClassName('correctGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');


//Generates underscores according to choosenWord
let underScore = [];
let underScoreLength = () => {
    for(let i = 0; i < chosenWord.length; i++) {
        underScore.push(' _ ');
        docMovieWord[0].innerHTML = underScore.join(' ');
    }
    return underScore;
}
console.log(choosenWord, underScoreLength());


//Listens for letter inputs
document.addEventListener('keypress', (event) => {
let keyWord = String.fromCharCode(event.keyCode);

let containsLetter = false;
    for (let i = 0; i < movieLetter.length; i++) {
        if(movieLetter[i] == keyWord){
            containsLetter = true;
            correctGuess.push(keyWord);
            docMovieWord[0].innerHTML = underScore.join(' ');
        }
    }
    console.log('keyWord', keyWord);
});



console.log('correctGuess', correctGuess);
console.log('wrongGuess', wrongGuess);
console.log('movieLetter', movieLetter);