#!/usr/bin/env node

import { runGame } from '../src/index.js'
import { runPrimeGame } from '../src/games/prime.js'

const { gameDescription, generateRound } = runPrimeGame()
runGame(gameDescription, generateRound)
