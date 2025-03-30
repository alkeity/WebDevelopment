function screenResolution()
{
    let scrRes = `${window.screen.width} x ${window.screen.height}`;
    document.getElementById('screenResolution').innerHTML = scrRes;
}

screenResolution();

function testObj()
{
    let test = new Object();

    test.width = 100;
    test.height = 200;
    console.log(test);
    delete test.height;
    console.log(test);
    test.items = 3;
    console.log(test);
    console.log(Object.keys(test));
}