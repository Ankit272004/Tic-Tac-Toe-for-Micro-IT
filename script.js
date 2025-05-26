let currentPlayer = 'X';
let board = Array(9).fill(null);
let gameActive = true;

const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const index = cell.dataset.index;
    if (!board[index] && gameActive) {
      board[index] = currentPlayer;
      cell.textContent = currentPlayer;
      if (checkWinner()) {
        statusText.textContent = `${currentPlayer} wins!`;
        gameActive = false;
      } else if (board.every(cell => cell)) {
        statusText.textContent = "It's a draw!";
        gameActive = false;
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusText.textContent = `Turn: ${currentPlayer}`;
      }
    }
  });
});

function checkWinner() {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  return winPatterns.some(pattern => {
    const [a,b,c] = pattern;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function resetGame() {
  board.fill(null);
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
  statusText.textContent = '';
  gameActive = true;
}
let currentPlayer = 'X';
let board = Array(9).fill(null);
let gameActive = true;

const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const index = cell.dataset.index;
    if (!board[index] && gameActive) {
      board[index] = currentPlayer;
      cell.textContent = currentPlayer;
      if (checkWinner()) {
        statusText.textContent = `${currentPlayer} wins!`;
        gameActive = false;
      } else if (board.every(cell => cell)) {
        statusText.textContent = "It's a draw!";
        gameActive = false;
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusText.textContent = `Turn: ${currentPlayer}`;
      }
    }
  });
});

function checkWinner() {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  return winPatterns.some(pattern => {
    const [a,b,c] = pattern;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function resetGame() {
  board.fill(null);
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
  statusText.textContent = '';
  gameActive = true;
}
