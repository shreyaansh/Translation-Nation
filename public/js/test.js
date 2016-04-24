function myFunction() {
		  //document.getElementById("translateTo").value = "hrlp " + document.getElementById("translateFrom").value;
		  var xhr = new XMLHttpRequest();
		  xhr.open("GET", "http://localhost:6002/hello", false);
		  xhr.send();
}


