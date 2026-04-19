#!/usr/bin/env node

import { runGame } from '../src/index.js'
import { runGcdGame } from '../src/games/gcd.js'

const { gameDescription, generateRound } = runGcdGame()
runGame(gameDescription, generateRound)
