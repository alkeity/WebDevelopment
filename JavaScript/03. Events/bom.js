function screenResolution()
{
    let scrRes = `${window.screen.width} x ${window.screen.height}`;
    document.getElementById('screenResolution').innerHTML = scrRes;
}

screenResolution();