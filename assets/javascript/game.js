let player = confirm('Guess the Popular Movie! Click OK to Get Started!') //true = computer
let word = "";

    let words = ['IndianaJones', 'PulpFiction', 'JurassicPark', 'StarWars', 'ForrestGump', 'Titanic', 'Jaws', 'Avatar', 'Inception', 'Scarface', 'Godfather', 'Avengers', 'Aladdin', 'Dracula', 'Gladiator']
    word = words[Math.floor(Math.random() * Math.floor(words.length - 1))].toLowerCase()

let panel = Array(word.length).fill(' _ ');
let health = 8;
let wrongGuesses = [];

while (panel.indexOf(' _ ') >= 0 && health > 0) {

    if (health < 8) {
        alert(`   Panel: ${panel} | Wrong guesses: ${wrongGuesses}`)
    } else alert(`Panel: ${panel}`)

    let guess = prompt('Guess a letter!');
    let wrong = word.indexOf(guess) < 0;
    [...word].forEach((l, i) => {if (guess === l){panel[i] = l}});


    if (wrong) {
        health--;
        wrongGuesses.push(guess);
        alert(`Wrong! You have ${health} lives left`);
    }

}

if (health > 0) alert('Congratulations! You won!');
else alert(`Good try! You lost! The word was '${word}'`);