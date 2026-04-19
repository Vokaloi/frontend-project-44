const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }
  return progression
}

const generateRound = () => {
  const length = getRandomNumber(5, 10)
  const start = getRandomNumber(1, 20)
  const step = getRandomNumber(1, 10)

  const progression = generateProgression(start, step, length)
  const hiddenIndex = getRandomNumber(0, length - 1)
  const correctAnswer = progression[hiddenIndex].toString()

  progression[hiddenIndex] = '..'
  const question = progression.join(' ')

  return { question, correctAnswer }
}

export const runProgressionGame = () => {
  const gameDescription = 'What number is missing in the progression?'
  return { gameDescription, generateRound }
}
