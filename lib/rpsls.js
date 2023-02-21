#!/usr/bin/env node

import minimist from 'minimist';
import process from 'process';

const rps = ["rock", "paper", "scissors"];
const rpsls = ["rock", "paper", "scissors", "spock", ];

function rps(player=null) {

    

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