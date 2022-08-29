function menu() {
    if (document.getElementById("menu").style.visibility == "visible") {
        document.getElementById("menu").style.visibility = "hidden";
        document.getElementById("menus").value = "show menu";
    }
    else {
        document.getElementById("menu").style.visibility = "visible";
        document.getElementById("menus").value = "hide menu";
    }
}
document.getElementById("menu").style.visibility = "hidden";