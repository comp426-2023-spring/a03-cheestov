#!/usr/bin/env node

import minimist from 'minimist';
import process from 'process';
import { rpsls } from '../lib/rpsls.js';

const argv = minimist(process.argv.slice(2));

