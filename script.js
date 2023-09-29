function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

var playing = true;

var computerOptions = ["R", "P", "S"];

var userScore = 0;

var computerScore = 0;

var tied = 0;

while(playing) {

var userInput = prompt("Enter R, P, or S");

var computerInput = computerOptions[getRandomInt(3)];

window.alert("Computer chooses " + computerInput);

if(computerInput === userInput) {
    window.alert("You tied!");
    tied++;
} else if((userInput === "R" && computerInput === "S" ) || (userInput === "P" && computerInput === "R") || (userInput === "S" && computerInput === "P")) {
    window.alert("You won!");
    userScore++;
} else{
    window.alert("You lost :(");
    computerScore++;
}

window.alert("Wins: " + userScore + " Ties: " + tied + " Losses: " + computerScore);

var playing = window.confirm("Do you want to play again?");
}

// Ask user what they choose

// Input their choice into a variable

// Make the computer choose a between the 3 options

// Compare the choices to see who wins

// Output to the user to say if they won or lost

// Keep track of the score between the user and the computer

// Ask the user if they want to play again

// reset variables

