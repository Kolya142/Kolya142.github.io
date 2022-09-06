function getCookie(name) {
	var cookies = document.cookie.split("; ");
	var f = "en";
	for (i of cookies) { 
		if (i.split("=")[0] == name) {f = i.split("=")[1];}
	}
	return f
}
function en() {
    const data = document.getElementById("inp").value;
    const out = document.getElementById("out");
    var out_ = "";
    var i = 0;
    while (i<data.length-1) {
        end = data.charCodeAt(i);
        out_ += String(end) + "-";
        i += 1;
    }
    end = data.charCodeAt(i);
    out_ += String(end);
    out.value = out_;
}
function main() {
    lang = getCookie("lang");
    if (lang == "ru") {
        document.getElementById("en").value = "зашифровать"
        document.getElementById("de").value = "расшифровать"
    }
}
main();
function de() {
    const data = document.getElementById("inp").value;
    const out = document.getElementById("out");
    out.value = "";
    for (i of data.split("-")) {out.value += String.fromCharCode(i);}
}