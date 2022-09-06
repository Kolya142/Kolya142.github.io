function getCookie(name) {
	var cookies = document.cookie.split("; ");
	var f = "en";
	for (i of cookies) { 
		if (i.split("=")[0] == name) {f = i.split("=")[1];}
	}
	return f
}