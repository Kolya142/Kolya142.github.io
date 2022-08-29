function getCookie(name) {
	var cookies = document.cookie.split("; ");
	var f = "en";
	for (i of cookies) { 
		if (i.split("=")[0] == name) {f = i.split("=")[1];}
	}
	return f
}
lang = getCookie("lang");
function main() {
    if (lang == "en") {
        document.getElementById("hi").innerHTML = "Hello";
    }
    else {
        document.getElementById("hi").innerHTML = "Привет";
        document.getElementById("pd").innerHTML = "Pyvdl документация";
    }
}
function lang_button() {
    if (lang == "en") {
        lang = "ru";
    }
    else {
        lang = "en";
    }
    main();
    document.getElementById("l").value = lang;
    document.cookie = "lang=" + lang
}