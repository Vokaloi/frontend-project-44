const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

const generateRound = () => {
  const randomNumber = getRandomNumber(1, 100)
  const question = randomNumber.toString()
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no'

  return { question, correctAnswer }
}

export const runPrimeGame = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  return { gameDescription, generateRound }
}
