const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const question = randomNumber.toString();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  
  return { question, correctAnswer };
};

export const runEvenGame = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  return { gameDescription, generateRound };
};
