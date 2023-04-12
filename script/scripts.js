function getValue() {
    var inputvalue = document.getElementById("myInput").value;
    if(inputvalue == "") {
        alert("Почту введи ^_^")
    }
    else {
        alert("Почта '" + inputvalue + "' отправлена");
    }
}   