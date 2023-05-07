#!/usr/bin/env node

const rps = ["rock", "paper", "scissors"];
const rpsls = ["rock", "paper", "scissors", "spock", ];

export function rps(playerChoice=null) {

  

    if (playerChoice === computerChoice) {
        console.log('It\'s a tie!');
      } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
      ) {
        console.log('Player wins!');
      } else {
        console.log('Computer wins!');
      }
}