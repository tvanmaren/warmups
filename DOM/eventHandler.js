'use strict';

function parseInput(event) {
  let clicked = event.target;
  let choice = clicked.text();
  compareChoices(choice);
}

function feedback(won) {
  let $wins = $('#wins');
  let $losses=$('#losses');
  switch (winner) {
  case (true):
    let wins = parseInt($wins.text());
    wins++;
    $wins.text(wins.toString());
    
    return;
  case (false):
    let losses=parseInt($losses.text());
    losses++;
    $losses.text(losses.toString());
    return;
  }
}

function reset() {

}

$(
  $('#buttons').click(parseInput);
  $('#reset').click(reset);
);
