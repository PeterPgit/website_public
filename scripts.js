function darktoggle()
{
    var bgtoggle = document.getElementById("bgtoggle");
    var darkbtn = document.getElementById("darkbtn");
    var element = document.body;
    element.classList.toggle("dark-mode")
    if (bgtoggle.innerHTML == "Toggle Dark Mode!") {
    bgtoggle.innerHTML = "Toggle Light Mode!";
    darkbtn.style.backgroundColor="white";
    darkbtn.style.color="black"
    localStorage.setItem("dark-mode", "true")
    }
    else {
    bgtoggle.innerHTML = "Toggle Dark Mode!"
    darkbtn.style.backgroundColor="black";
    darkbtn.style.color="white"
    localStorage.setItem("dark-mode", "false")
    }
}

function darkCheck()
{
    var element = document.body;
    var bgtoggle = document.getElementById("bgtoggle");
    var darkbtn = document.getElementById("darkbtn");
    if (localStorage.getItem("dark-mode") == "true")  {
    element.classList.toggle("dark-mode")
    bgtoggle.innerHTML = "Toggle Light Mode!";
    darkbtn.style.backgroundColor="white";
    darkbtn.style.color="black"
    }

}

function testt()
{
alert(localStorage.getItem("dark-mode"))
}