#!/usr/bin/env node

import { runGame } from '../src/index.js'
import { runCalcGame } from '../src/games/calc.js'

const { gameDescription, generateRound } = runCalcGame()
runGame(gameDescription, generateRound)
