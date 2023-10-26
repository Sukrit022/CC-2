let cp = 'X';
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

function move(cell)
{
    const cellIndex = Array.from(cell.parentNode.children).indexOf(cell);
    if (board[cellIndex] == "" && !gameOver) 
    {
        cell.innerText = cp;
        cell.setAttribute('data-player', cp);
        board[cellIndex] =cp;

        if (checkWin(cp)) 
        {
            document.getElementById('status').innerText = `Player ${cp} wins!`;
            gameOver = true;
        } 
        else if (board.indexOf("") == -1) 
        {
            document.getElementById('status').innerText = "It's a draw!";
            gameOver = true;
        } 
        else 
        {
            cp = (cp == 'X' ? 'O' : 'X');
            document.getElementById('status').innerText = `Player ${cp}'s turn`;
        }
    }
}

function checkWin(player) 
{
    const winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    return winningCombinations.some(function (combination) 
    {
        return combination.every(function (index) 
        {
            return board[index] == player;
        });
    })
}

function reset() 
{
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
        cells[i].removeAttribute('data-player');
}

    cp = 'X';
    board = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
    document.getElementById('status').innerText = "Player X's turn";
}

