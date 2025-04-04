function loadFile()
{
	let request = new XMLHttpRequest();
	request.onreadystatechange = function ()
	{
		if (this.readyState == 4 && this.statusText == "OK")
		{
			document.getElementById("response1").innerHTML = this.responseText;
			formatXML(this);
		}
	};
	request.open("GET", "db.xml", true);
	request.send();

}


function formatXML(file)
{
    let xml = file.responseXML;
	let group = xml.getElementsByTagName("group");
    let response = document.getElementById("response");
    let string = '<tr><th>Name</th><th>Age</th><th>Speciality</th></tr>';
    console.log(group.length);

	for (let i = 0; i < group.length; i++)
	{
		string += `<tr>
                    <td>${group[i].getElementsByTagName('first_name')[0].childNodes[0].nodeValue} 
                    ${group[i].getElementsByTagName('last_name')[0].childNodes[0].nodeValue}</td>
                    <td>${group[i].getElementsByTagName('age')[0].childNodes[0].nodeValue}</td>
                    <td>${group[i].getElementsByTagName('speciality')[0].childNodes[0].nodeValue}</td>
                    </tr>`;
	}

    response.innerHTML = string;
}