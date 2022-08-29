function download(filename, textInput) {
    var element = document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput));
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
}
function runer() { 
	iframe = document.getElementById("out")
	css = document.getElementById("css").value
	js = document.getElementById("js").value
	html = document.getElementById("html").value
	const source = "<html>\n<head>\n<style>\n" + css + "\n</style>\n</head>\n<body>\n" + html + '\n<script type="text/javascript">' + js + "</script>\n</body>\n</html>"
	iframe.srcdoc = source
}
function dow() {
	css = document.getElementById("css").value
	js = document.getElementById("js").value
	html = document.getElementById("html").value
	const source = "<html><head><style>" + css + "</style></head><body>" + html + '\n<script type="text/javascript">' + js + "</script>\n</body></html>"
	download("index.html", source)
}