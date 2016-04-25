/*eslint-env browser */
/*globals xhr:true responsiveVoice*/




/*
 ResponsiveVoice JS v1.4.5

 (c) 2015 LearnBrite

 License: http://responsivevoice.org/license
*/




	var lang = "es";
		var flag = 0;
	//var text = "Hello"
function myFunction() {

	var in1 = 0;
	var langfr = "en";

	
	if (document.getElementById("option2").checked) {
		console.log(document.getElementById("option2").value);
		lang = document.getElementById("option2").value;
		in1 = 1;
		console.log(in1);
		flag=1;

	} 
	else if (document.getElementById("option3").checked) {
		console.log(document.getElementById("option3").value);
		lang = document.getElementById("option3").value;
		in1 = 1;
		flag = 2;
		console.log(in1);
	}
	 else if (document.getElementById("option4").checked) {
		console.log(document.getElementById("option4").value);
		lang = document.getElementById("option4").value;
		in1 = 1;
		flag=3;
		console.log(in1);
	}
	 //if (document.getElementById("option1").checked) {
		else {
		console.log(document.getElementById("option1").value);
		lang = document.getElementById("option1").value;
		in1 = 1;
		flag = 4;
		console.log(in1);
	}

	if(in1)
	{
	if (document.getElementById("option6").checked) {
		console.log(document.getElementById("option6").value);
		langfr = document.getElementById("option6").value;
		console.log(langfr);
		//lag = ;

	}
	else if(document.getElementById("option7").checked)
	{
		console.log(document.getElementById("option7").value);
		langfr = document.getElementById("option7").value;
		console.log(langfr);
		//flag = 2;
	}
	else if (document.getElementById("option8").checked) {
		console.log(document.getElementById("option8").value);
		langfr = document.getElementById("option8").value;
		console.log(langfr);
		//flag = 3;
	}
	else
	{
		console.log(document.getElementById("option5").value);
		langfr = document.getElementById("option5").value;
		console.log(langfr);
		//flag = 4;
	}
}

	xhr = new XMLHttpRequest();
	//var url = "http://localhost:6002/translate";
	var url= "http://translation-nation.mybluemix.net/translate";
	console.log(url);	//var url = "http://localhost:6002/hello";
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.addEventListener("readystatechange", function () {
  		if (this.readyState === 4) {
    		console.log(this.responseText);
			document.getElementById("translateTo").value = this.responseText;
			//text = this.responseText;
			/*if(lang === "es")
			{
			responsiveVoice.speak(document.getElementById("translateTo").value, "Spanish Female", {rate: 0.75});
  			}
  			else if(lang === "it")
  			{
  			responsiveVoice.speak(document.getElementById("translateTo").value, "Italian Female", {rate: 0.75});
  			}
  			else if(lang === "fr")
  			{
  			 responsiveVoice.speak(document.getElementById("translateTo").value, "French Female", {rate: 0.75});
  			}
  			else
  			{
			responsiveVoice.speak(document.getElementById("translateTo").value, "Australian Female", {rate: 1});  				
  			}*/
  	}
	});
	var data1 = JSON.stringify({"message":document.getElementById("translateFrom").value, "langfrom":langfr,"language":lang});
	console.log(data1);
	var data = JSON.stringify({"message":document.getElementById("translateFrom").value, "language":lang});
	console.log(data);
	xhr.send(data1);
}
function myFunction2()
{
			if(lang === "es")
			{
			responsiveVoice.speak(document.getElementById("translateTo").value, "Spanish Female", {rate: 0.75});
  			}
  			else if(lang === "it")
  			{
  			responsiveVoice.speak(document.getElementById("translateTo").value, "Italian Female", {rate: 0.75});
  			}
  			else if(lang === "fr")
  			{
  			 responsiveVoice.speak(document.getElementById("translateTo").value, "French Female", {rate: 0.75});
  			}
  			else
  			{
			responsiveVoice.speak(document.getElementById("translateTo").value, "Australian Female", {rate: 1});  				
  			}
    
  
    
}
function myFunction3()
{
    var e = document.getElementById("sel1");
    var strlang = e.options[e.selectedIndex].text;
    console.log(strlang);
}