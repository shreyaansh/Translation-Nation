/*eslint-env browser */
/*globals xhr:true */
function myFunction() {
	//document.getElementById("translateTo").value = document.getElementById("translateFrom").value;

	//var url = "http://localhost:6002/hello";
	/*var text = '{ "message":"' + document.getElementById(translateFrom) + '" }';
	//var obj = JSON.parse(text);
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "plain/text");
	var data = JSON.stringify({"email":"hey@mail.com","password":"101010"});
	xhr.send("data");*/
	var lang = "es";
	var in1 = 0;
	var langfr = "en";
	
	if (document.getElementById("option2").checked) {
		console.log(document.getElementById("option2").value);
		lang = document.getElementById("option2").value;
		in1 = 1;
		console.log(in1);

	} 
	else if (document.getElementById("option3").checked) {
		console.log(document.getElementById("option3").value);
		lang = document.getElementById("option3").value;
		in1 = 1;
		console.log(in1);
	}
	 else if (document.getElementById("option4").checked) {
		console.log(document.getElementById("option4").value);
		lang = document.getElementById("option4").value;
		in1 = 1;
		console.log(in1);
	}
	 //if (document.getElementById("option1").checked) {
		else {
		console.log(document.getElementById("option1").value);
		lang = document.getElementById("option1").value;
		in1 = 1;
		console.log(in1);
	}

	if(in1)
	{
	if (document.getElementById("option6").checked) {
		console.log(document.getElementById("option6").value);
		langfr = document.getElementById("option6").value;
		console.log(langfr);

	}
	else if(document.getElementById("option7").checked)
	{
		console.log(document.getElementById("option7").value);
		langfr = document.getElementById("option7").value;
		console.log(langfr);

	}
	else if (document.getElementById("option8").checked) {
		console.log(document.getElementById("option8").value);
		langfr = document.getElementById("option8").value;
		console.log(langfr);

	}
	else
	{
		console.log(document.getElementById("option5").value);
		langfr = document.getElementById("option5").value;
		console.log(langfr);
	
	}
}

	xhr = new XMLHttpRequest();
var url = "http://localhost:6002/hello";
	var url1= "http://translate-nation.mybluemix.net/hello";
	console.log(url1);	//var url = "http://localhost:6002/hello";
	xhr.open("POST", url1, true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.addEventListener("readystatechange", function () {
  		if (this.readyState === 4) {
    		console.log(this.responseText);
			document.getElementById("translateTo").value = this.responseText;
  		}
	});
	var data1 = JSON.stringify({"message":document.getElementById("translateFrom").value, "langfrom":langfr,"language":lang});
	console.log(data1);
	var data = JSON.stringify({"message":document.getElementById("translateFrom").value, "language":lang});
	console.log(data);
	xhr.send(data1);
}