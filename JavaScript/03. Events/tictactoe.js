var filled = 0;
var winner = '';
var playerSign = 'X';
var botSign = 'O';
var field = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
];

function drawBoard()
{
    let board = document.getElementById('board');

    for (let i = 0; i < 9; i++)
    {
        let square = document.createElement('div');
        square.className = 'board-square';
        square.id = `board-square-${i}`;
        square.addEventListener("click", handleClick);
        board.appendChild(square);
    }
}

function handleClick(event)
{
    if (filled < 9 && winner == '')
    {
        if (!playerTurn(document.getElementById(event.currentTarget.id))) return;
        if (checkWin(playerSign))
        {
            finalize();
            return;
        }
        botTurn();
        if (checkWin(botSign))
        {
            finalize();
            return;
        }
    }
}

function placeSign(fieldID, sign)
{
    document.getElementById(`board-square-${fieldID}`).innerHTML = sign;
    field[fieldID] = sign;
    filled++;
}

function checkLine(field1, field2, field3, sign)
{
    return field[field1] == sign && field[field1] == field[field2] && field[field1] == field[field3];
}

function checkWin(sign)
{
    // check win
    for (let i = 0; i < field.length; i += 3)
    {
        if (checkLine(i, i + 1, i + 2, sign))
        {
            winner = sign;
            return true;
        }
    }

    for (let i = 0; i < 3; i++)
    {
        if (checkLine(i, i + 3, i + 6, sign))
        {
            winner = sign;
            return true;
        }
    }

    if (checkLine(0, 4, 8, sign) || checkLine(2, 4, 6, sign))
    {
        winner = sign;
        return true;
    }
    return false;
}

function finalize()
{
    if (winner != '')
    {
        document.getElementById('result').innerHTML = `${winner == playerSign ? 'Player' : 'Bot'} wins!`;
    }
    else
    {
        document.getElementById('result').innerHTML = 'Tie';
    }
}

function botTurn()
{
    let fieldID = Math.floor(Math.random() * 9);
    while (document.getElementById(`board-square-${fieldID}`).innerHTML)
    {
        fieldID = Math.floor(Math.random() * 9);
    }
    placeSign(fieldID, botSign);
}

function smartBotTurn()
{
    //maybe one day, too tired for that rn
}

function playerTurn(field)
{
    if (field.innerHTML) return false;
    placeSign(Number(field.id.split('-').pop()), playerSign);
    return true;
}