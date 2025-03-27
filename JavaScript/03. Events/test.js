function test()
{
    let result = 0;

    for (let i = 1; i <= 5; i++)
    {
        let answers = document.getElementsByName(`answer${i}`);
        for (let j = 0; j < answers.length; j++)
        {
            if (answers[j].checked)
            {
                result += Number(answers[j].value);
                break;
            }
        }
    }

    let elem = document.getElementById('result');
    elem.innerHTML = `Your result: ${result}`;

    if (result < -1000) elem.innerHTML += '<br>ok look. if you cannot love Wilfred Warrior we cannot be friends.';
    else if (result < -100) elem.innerHTML += '<br>tbh, in this house we prefer mr. goldielooks gone.';
    else if (result <= 0) elem.innerHTML += "<br>yea it's fine. we do not share a brainrot and that's good for you. maybe. probably.";
    else elem.innerHTML += "<br>anyways. any good recs for headache. except for axes, tried that, did not help >:c";
}