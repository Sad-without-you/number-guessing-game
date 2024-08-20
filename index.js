const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess = document.getElementById("guessNum");
let mySubmit = document.getElementById("mySubmit");
let result = document.getElementById("result");
let running = true;

mySubmit.onclick = function () {
    // Get the value of the guess and convert it to a number
    let guessValue = parseInt(guess.value);

    // Check if the input is a valid number
    if (isNaN(guessValue)) {
        window.alert("Enter a valid number!");
        return;
    }

    // Check if the number is within the valid range
    if (guessValue < minNum || guessValue > maxNum) {
        window.alert("Enter a number between " + minNum + " and " + maxNum + "!");
        return;
    }

    attempts++;

    // Check if the guess is correct
    if (guessValue === answer) {
        result.textContent = "Congratulations! You've guessed the correct number in " + attempts + " attempts.";
        running = false;
    } else if (guessValue < answer) {
        result.textContent = "Too low! Try again.";
    } else {
        result.textContent = "Too high! Try again.";
    }
}
