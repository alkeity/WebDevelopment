function convertBinaryToDecimal()
{
    let numBinary = document.getElementById('numBinary').value;
    let result = "Can't convert that.";

    if (/^[01]+$/gm.test(numBinary))
    {
        result = parseInt(numBinary, 2);
    }
    else if (!numBinary)
    {
        result = "";
    }

    document.getElementById('resultNumber').innerHTML = result;
}

var seconds = 0;
var countdownID = null;
var music = new Audio('../../sounds/AlegendImagination.mp3');

function countdownTimer()
{
    let targetDateElem = document.getElementById('targetDate');

    let curDate = new Date();
    let targetDate = new Date(targetDateElem.value);

    targetDateElem.disabled = true;
    document.getElementById('btnStart').disabled = true;
    seconds = Math.trunc((targetDate - curDate) / 1000);
    console.log(seconds);
    countdownTick();
}

function countdownTick()
{
    if (seconds == 0)
    {
        // Music track: Imagination by Alegend
        // Source: https://freetouse.com/music
        // Copyright Free Music (Free Download)
        music.play();
        countdownStop();
        document.getElementById('btnStop').style.visibility = 'visible';
        return;
    }

    let years = 0;
    let months = 0;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let secondsTmp = seconds > 0 ? seconds : -seconds;

    years = Math.trunc(secondsTmp / (60 * 60 * 24 * 30 * 12));
    secondsTmp -= years * (60 * 60 * 24 * 30 * 12);

    months = Math.trunc(secondsTmp / (60 * 60 * 24 * 30));
    secondsTmp -= months * (60 * 60 * 24 * 30);

    days = Math.trunc(secondsTmp / 86400);
    secondsTmp -= days * 86400;

    hours = Math.trunc(secondsTmp / 3600);
    secondsTmp -= hours * 3600;

    minutes = Math.trunc(secondsTmp / 60);
    secondsTmp -= minutes * 60;

    let resultStr = "";

    if (years != 0) resultStr += `<p>Years: ${years}</p>`;

    if (months != 0) resultStr += `<p>Months: ${months}</p>`;

    if (days != 0) resultStr += `<p>Days: ${days}</p>`;
    
    resultStr += `<p>Hours: ${hours}</p><p>Minutes: ${minutes}</p><p>Seconds: ${secondsTmp}</p>`;

    document.getElementById('resultCountdown').innerHTML = resultStr;
    seconds--;

    countdownID = setTimeout(countdownTick, 1000);
}

function countdownStop()
{
    if (countdownID)
    {
        clearTimeout(countdownID);
        countdownID = null;
        seconds = 0;
        document.getElementById('resultCountdown').innerHTML = "";
        document.getElementById('btnStart').disabled = false;
        document.getElementById('targetDate').disabled = false;
    }
}

function musicStop()
{
    music.pause();
    music.currentTime = 0;
    document.getElementById('btnStop').style.visibility = 'hidden';
}