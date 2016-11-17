'use strict';

const $wins = $('#wins');
const $losses = $('#losses');

function parseInput(event) {
  let $clicked = $(event.target);
  let choice = $clicked.attr('id');
  console.log(choice);
  compareChoices(choice);
}

function feedback(won) {
  console.log(won);
  switch (won) {
  case (true):
    let wins = parseInt($wins.text());
    wins++;
    $wins.text(wins.toString());
    break;
  case (false):
    let losses = parseInt($losses.text());
    losses++;
    $losses.text(losses.toString());
    break;
  }
  randomChoice();
}

function reset() {
  $wins.text('0');
  $losses.text('0');
  randomChoice();
}

$(document).ready(()=>{
  $('.buttons').click(parseInput);
  $('#reset').click(reset);
}
);
