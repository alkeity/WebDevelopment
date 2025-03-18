function showText()
{
    let userInput = document.getElementById('userInput');
    document.getElementById('output').innerHTML = `<p>${userInput.value}</p>`;
}

function showImage(event)
{
    let outputImg = document.getElementById("outputImg");
    let image = document.getElementById("image");
    let path = image.value.split('\\');
    let p = path[path.length - 1];
    outputImg.src = p;
}

function changeTheme()
{
    let body = document.getElementById('body');
    let btn = document.getElementById('change-theme');

    if (body.className == 'theme-light')
    {
    body.className = 'theme-dark';
    btn.className = 'btn-img theme-dark-img';
    btn.style.transform = "rotate(0deg)";
    }
    else
    {
    body.className = 'theme-light';
    btn.className = 'btn-img theme-light-img';
    btn.style.transform = "rotate(180deg)";
    }
}

function setDelay()
{
    let delay = document.getElementById("delay").value;
    delay = Number(delay);

    if (delay <= 10 && delay >= 0)
    {
    let body = document.getElementById('body');
    let btn = document.getElementById('change-theme');
    body.style.transition = `all ${delay}s`;
    btn.style.transition = `all ${delay}s`;
    }
}

function dateTime()
{
    let curDate = new Date();
    let date = document.getElementById("date");
    date.innerHTML = `${curDate.getDate().toString().padStart(2, '0')}-${(curDate.getMonth() + 1).toString().padStart(2, '0')}-${curDate.getFullYear()}`;
    date.innerHTML += ` ${curDate.toLocaleString("en-us", {weekday: "long"})}`;
}

function clockTick()
{
    let curTime = new Date();
    let clock = document.getElementById("clock");
    let time = `${curTime.getHours().toString().padStart(2, '0')}:${curTime.getMinutes().toString().padStart(2, '0')}:${curTime.getSeconds().toString().padStart(2, '0')}`;

    clock.innerHTML = time;
    clock.textContent = time;

    setTimeout(clockTick, 1000);
}
