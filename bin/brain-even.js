#!/usr/bin/env node

import { runGame } from '../src/index.js';
import { runEvenGame } from '../src/games/even.js';

const { gameDescription, generateRound } = runEvenGame();
runGame(gameDescription, generateRound);
