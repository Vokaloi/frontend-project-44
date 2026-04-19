#!/usr/bin/env node

import { runGame } from '../src/index.js';
import { runProgressionGame } from '../src/games/progression.js';

const { gameDescription, generateRound } = runProgressionGame();
runGame(gameDescription, generateRound);
