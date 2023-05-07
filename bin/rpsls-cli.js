#!/usr/bin/env node

import minimist from 'minimist';
import process from 'process';
import { rpsls } from '../lib/rpsls.js';

const args = minimist(process.argv.slice(2));

if (args.h || args.help) {
    console.log('Usage: node-RPSLS [SHOT]');
    console.log("Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS!");
    console.log();
    console.log('  -h, --help        display this help message and exit');
    console.log('  -r, --rules       display the rules and exit');
    console.log();
    console.log('Examples:');
    console.log('  node-rpsls        Return JSON with single player RPSLS result.');
    console.log('                    e.g. {"player":"rock"}');
    console.log('  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.');
    console.log('                    e.g {"player":"rock","opponent":"Spock","result":"lose"}');
    process.exit(0);
}