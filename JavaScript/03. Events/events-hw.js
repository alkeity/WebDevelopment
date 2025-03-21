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

var targetDate;
var countdownID = null;

function countdownTimer()
{
    let targetDateElem = document.getElementById('targetDate');

    let curDate = new Date();
    targetDate = new Date(targetDateElem.value);
    //targetDate.setHours(targetDate.getHours() + Math.floor(curDate.getTimezoneOffset() / 60));
    //targetDate = new Date(targetDate.toLocaleString("default", {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone}));
    //targetDate = new Date(targetDate + curDate.getTimezoneOffset() * 60000);

    console.log(`curDate: ${curDate.getHours()}:${curDate.getMinutes()}:${curDate.getSeconds()}:${curDate.getMilliseconds()}`);
    console.log(`targetDate: ${targetDate.getHours()}:${targetDate.getMinutes()}:${targetDate.getSeconds()}:${targetDate.getMilliseconds()}`);
    console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
    console.log(curDate.getTimezoneOffset());

    if (targetDate > curDate)
    {
        // targetDate = Date.UTC(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());
        targetDateElem.disabled = true;
        document.getElementById('btnStart').disabled = true;
        countdownTick();
    }
    else
    {
     document.getElementById('resultCountdown').innerHTML = "No time travel allowed, sorry.";
    }

}

function countdownTick()
{
    let curDate = new Date();
    // curDate = Date.UTC(
    //                     curDate.getFullYear(), curDate.getMonth(), curDate.getDate(),
    //                     curDate.getHours(), curDate.getMinutes(), curDate.getSeconds(),
    //                     curDate.getMilliseconds()
    //                 );
    let seconds = Math.floor((targetDate - curDate) / 1000);

    let years = 0;
    let months = 0;
    let days = 0;
    let hours = 0;
    let minutes = 0;

    if (seconds >= (60 * 60 * 24 * 30 * 12))
    {
        years = Math.floor(seconds / (60 * 60 * 24 * 30 * 12));
        seconds -= years * (60 * 60 * 24 * 30 * 12);
    }

    if (seconds >= (60 * 60 * 24 * 30))
    {
        months = Math.floor(seconds / (60 * 60 * 24 * 30));
        seconds -= months * (60 * 60 * 24 * 30);
    }

    if (seconds >= (60 * 60 * 24))
    {
        days = Math.floor(seconds / (60 * 60 * 24));
        seconds -= days * (60 * 60 * 24);
    }

    if (seconds >= (60 * 60))
    {
        hours = Math.floor(seconds / (60 * 60));
        seconds -= hours * (60 * 60);
    }

    if (seconds >= 60)
    {
        minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;
    }

    let resultStr = "";

    if (years != 0)
    {
        resultStr += `<p>Years: ${years}</p>`;
    }

    if (months != 0)
    {
        resultStr += `<p>Months: ${months}</p>`;
    }

    if (days != 0)
    {
        resultStr += `<p>Days: ${days}</p>`;
    }
    
    resultStr += `<p>Hours: ${hours}</p><p>Minutes: ${minutes}</p><p>Seconds: ${seconds}</p>`;

    document.getElementById('resultCountdown').innerHTML = resultStr;

    countdownID = setTimeout(countdownTick, 1000);
}

function countdownStop()
{
    if (countdownID)
    {
        clearTimeout(countdownID);
        countdownID = null;
        document.getElementById('resultCountdown').innerHTML = "";
        document.getElementById('btnStart').disabled = false;
        document.getElementById('targetDate').disabled = false;
    }
}