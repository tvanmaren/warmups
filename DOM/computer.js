'use strict';

var computer;

function randomChoice() {
  var randNum = Math.random();

  if (randNum < .33) {
    computer = "rock";
  } else if (randNum > .33 && randNum < .66) {
    computer = "paper";
  } else {
    computer = "scissors";
  }
  console.log(computer);
  return;
}

function compareChoices(human) {
  var winner;
  if (human === "rock") {
    if (computer === "rock") {
      console.log("Tie!");
      // winner = "It's a tie. No one wins.";
      winner='tie';
    } else if (computer === "paper") {
      // winner = "You chose rock. Computer chose paper. Computer wins.";
      winner=false;
    } else {
      // winner = "You chose rock. Computer chose scissors. You wins!";
      winner=true;
    }
  } else if (human === "paper") {
    if (computer === "paper") {
      console.log("Tie!");
      // winner = "It's a tie. No one wins.";
      winner='tie';
    } else if (computer === "scissors") {
      // winner = "You chose paper. Computer chose scissors. Computer wins.";
      winner=false;
    } else {
      // winner = "You chose paper. Computer chose rock. You win!";
      winner=true;
    }
  } else if (human === "scissors") {
    if (computer === "scissors") {
      console.log("Tie!");
      // winner = "It's a tie. No one wins.";
      winner='tie';
    } else if (computer === "rock") {
      // winner = "You chose scissors. Computer chose rock. Computer wins.";
      winner=false;
    } else {
      // winner = "You chose scissors. Computer chose paper. You win!";
      winner=true;
    }
  } else {
    alert("Can't you read? You were supposed to choose rock, paper or scissors.");
    // winner = "No one"
    winner=false;
  }
  return feedback(winner);
}
