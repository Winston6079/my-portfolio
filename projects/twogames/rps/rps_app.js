const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS'
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';

let gameIsRunning = false;

const getPlayerChoice = (choice) => {
	const selection = choice
	if (
		selection !== ROCK &&
		selection !== PAPER &&
		selection !== SCISSORS
		) {
		 	alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you`)
		 	return;
		 }
	return selection;
};



const getComputerChoice = () => {
	const randomValue = Math.random();
	if (randomValue < 0.34) {
		return ROCK;
	} else if (randomValue < 0.67) {
		return PAPER;
	} else {
		return SCISSORS;
	}
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
	if (cChoice === pChoice) {
		return RESULT_DRAW;
	} else if (
		cChoice === ROCK && pChoice === PAPER ||
		cChoice === PAPER && pChoice === SCISSORS ||
		cChoice === SCISSORS && pChoice === ROCK
	 ) {
		return RESULT_PLAYER_WINS
	} else {
		return RESULT_COMPUTER_WINS
	}
}

const startGameBtn = (choice) => {
	if (gameIsRunning) {
		return;
	}
	gameIsRunning = true;
	console.log('Game is starting...');
	const playerChoice = getPlayerChoice(choice);
	const computerChoice = getComputerChoice();
	let winner;
	if (playerChoice) {
		winner = getWinner(computerChoice, playerChoice)
	} else {
		winner = getWinner(computerChoice)
	}
	let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `
	if (winner === RESULT_DRAW) {
		message += 'had a draw'
	} else if (winner === RESULT_PLAYER_WINS) {
		message += 'won'
	} else {
		message += 'lost'
	}
	alert(message);
	gameIsRunning = false;
};

const combine = (rH, operation, ...numbers) => {
	const validate = number => {
		return isNaN(number) ? 0 : number;
	}

	let sum = 0;
	for (const num of numbers) {
		if (operation === "ADD"){
			sum += validate(num)
		} else {
			sum -= validate(num)
		}
	}
	rH(sum, )
}


const substract = function(rH, ...numbers) {
	let sum = 0
	for (const num of numbers) {
		sum -= num
	}
	rH(sum)
}

const showResult = (message, result) => {
	alert(message + result)
}

rock.addEventListener('click', function pickRock() {
	const choice = 'ROCK'
	return startGameBtn(choice)
});

paper.addEventListener('click', function pickPaper() {
	const choice = 'PAPER'
	return startGameBtn(choice)
});

scissors.addEventListener('click', function pickScissors() {
	const choice = 'SCISSORS'
	return startGameBtn(choice)
});
