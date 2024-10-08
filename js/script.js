{
  // Funkcja usuwająca wszystkie wcześniej wyświetlone komunikaty
  const clearMessages = function() {
    document.getElementById('messages').innerHTML = '';
  }
    // Funkcja zwracająca nazwę ruchu na podstawie ID
    const getMoveName = function(argMoveId) {
      console.log('getMoveName called with:', argMoveId); // Sprawdza, z jakim argumentem wywoływana jest funkcja
      if (argMoveId == 1) {
        return 'kamień';
      } else if (argMoveId == 2) {
        return 'papier';
      } else if (argMoveId == 3) {
        return 'nożyce';
      } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
      }
    }

    // Funkcja wyświetlająca wynik gry // do miany !!!
    const displayResult = function(argComputerMove, argPlayerMove) {
      console.log('moves:', argComputerMove, argPlayerMove); // Wyświetlam oba ruchy na początku funkcji
      if (argPlayerMove == 'nieznany ruch') {
        console.log('Player made an invalid move'); // Sprawdzam, czy gracz wprowadził nieznany ruch
        printMessage('Nieprawidłowy ruch - gra nie może zostać rozstrzygnięta.');
      } else if (argComputerMove == argPlayerMove) {
        console.log('It is a tie'); // Sprawdzam, czy jest remis
        printMessage('Remis!');
      } else if (
        (argComputerMove === 'kamień' && argPlayerMove === 'papier') ||
        (argComputerMove === 'papier' && argPlayerMove === 'nożyce') ||
        (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') 
      ) {
        console.log('Player wins with rock against scissors'); // Sprawdzam, czy gracz wygrał kamieniem przeciwko nożycom
        printMessage('Ty wygrywasz!');
      } else {
        console.log('Player loses'); // Sprawdzam, czy gracz przegrał
        printMessage('Przegrywasz!');
      }
    }
  // główna funkcja gry  
  const playGame = function(playerInput) {
    clearMessages(); // Usunięcie wszystkich wcześniejszych komunikatów

    console.log('Gracz wpisał:', playerInput);
    const playerMove = getMoveName(playerInput);

    console.log('Player move is:', playerMove); // Sprawdzam, jaka wartość została przypisana do playerMove
    printMessage('Twój ruch to: ' + playerMove);

    // Losowanie ruchu komputera
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Random number for computer move:', randomNumber); // Sprawdzam, jaka liczba została wylosowana dla komputera

    const computerMove = getMoveName(randomNumber);

    console.log('Computer move is:', computerMove); // Sprawdzam, jaki ruch został przypisany do computerMove

    printMessage('Mój ruch to: ' + computerMove);

    // Wywołanie funkcji wyświetlającej wynik gry
    displayResult(computerMove, playerMove);
  }

  // Listener dla guzika "Kamień"
  document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1); // Wywołanie gry z ruchem "Kamień"
  });

  // Listener dla guzika "Papier"
  document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2); // Wywołanie gry z ruchem "Papier"
  });

  // Listener dla guzika "Nożyce"
  document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3); // Wywołanie gry z ruchem "Nożyce"
  });
}
