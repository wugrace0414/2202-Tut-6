// This takes a value of either 'X' or 'O' according to the game turns
let nextPlayer = 'X'; 
document.querySelector('#next-lbl').innerText = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Add a button with square brackets enclosing an empty space to each cell in the gameboard
    for (let i = 1; i <= 9; i++)
    {
        let btn = document.createElement('button');

        btn.innerText = '[ ]';

        document.querySelector('#c' + i).appendChild(btn);
    }
    // Add 'takeCell' as an event listener to all the buttons on the board
    let btns = document.querySelectorAll('button');

    for (let i=0; i<btns.length; i++)
    {
        btns[i].addEventListener('click', takeCell);
    }
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    let btn = event.currentTarget;
    btn.innerText = '[' + nextPlayer + ']';

    btn.disabled = true;
    if (nextPlayer == 'X')
    {
        nextPlayer = 'O';
    }
    else
    {
        nextPlayer = 'X';
    }
    document.querySelector('#next-lbl').innerText = nextPlayer;

    // Check if the game is over
    if (isGameOver())
    {
        document.querySelector('#game-over-lbl').innerText = 'Game Over';    
    }

}


function isGameOver()
{
    let btns = document.querySelectorAll('button');

    for (let i = 0; i < btns.length; i++)
    {
        if (btns[i].disabled == false)
        {
            return false;
        }
    }

    return true;
}
