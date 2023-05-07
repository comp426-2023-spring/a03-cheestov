#!/usr/bin/env node

const rps = ["rock", "paper", "scissors"];
const rpsls = ["rock", "paper", "scissors", "spock", ];

export function rps(playerChoice=null) {

    const computerChoice = rps[Math.floor(Math.random() * rps.length)];

    if (playerChoice === null){
      return {"player": computerChoice}
    }

    if (!rps.includes(playerChoice)){
      throw new RangeError("Invalid input")
    }


    if (playerChoice === computerChoice) {
      cons
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