// Wpisanie wartości przez gracza
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
  playerMove = 'kamień';
}
if (playerInput == '2') {
  playerMove = 'papier';
}
if (playerInput == '3') {
  playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

// Losowanie ruchu komputera
let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
  computerMove = 'kamień';
} else if (randomNumber == 2) {
  computerMove = 'papier';
} else if (randomNumber == 3) {
  computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

// Określenie wyniku gry
if (playerMove == 'nieznany ruch') {
  printMessage('Nieprawidłowy ruch - gra nie może zostać rozstrzygnięta.');
} else if (computerMove == playerMove) {
  printMessage('Remis!');
} else if (computerMove == 'kamień' && playerMove == 'papier') {
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
  printMessage('Ty wygrywasz!');
} else {
  printMessage('Przegrywasz!');
}
