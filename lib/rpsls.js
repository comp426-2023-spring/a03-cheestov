#!/usr/bin/env node

import minimist from 'minimist';
import process from 'process';

const rps = ["rock", "paper", "scissors"];
const rpsls = ["rock", "paper", "scissors", "spock", ];

function rps(playerChoice=null) {

    var args = minimist(process.argv.slice(2), {
      boolean: "h",
      boolean: "r",
      default: {
        h: false,
        r: false
      },
    });

    // if player choice is null and other thing is null, return the bare json result
    // if player choice is not null and other this is null then do it based on player choice
    // if command line argument is not null then we need to use it.

    // somewhere if the arguments are bad or something I need to exit with console.error. look it up

    // figure out how to do math.random for javascript. use it to make computer cjoice

    // make rules output with process exit 0

    // make help output with process exit 0

    // You got this Cat <3

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