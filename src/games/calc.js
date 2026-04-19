const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const operations = [
  { symbol: '+', calculate: (a, b) => a + b },
  { symbol: '-', calculate: (a, b) => a - b },
  { symbol: '*', calculate: (a, b) => a * b },
]

const generateRound = () => {
  const num1 = getRandomNumber(1, 30)
  const num2 = getRandomNumber(1, 30)
  const operation = operations[Math.floor(Math.random() * operations.length)]

  const question = `${num1} ${operation.symbol} ${num2}`
  const correctAnswer = operation.calculate(num1, num2).toString()

  return { question, correctAnswer }
}

export const runCalcGame = () => {
  const gameDescription = 'What is the result of the expression?'
  return { gameDescription, generateRound }
}
