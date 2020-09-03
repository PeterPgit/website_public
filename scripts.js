function darktoggle() {
  var bgtoggle = document.getElementById("bgtoggle");
  var darkbtn = document.getElementById("darkbtn");
  var element = document.body;
  var logo = document.getElementById("logo");

  // Changes page to dark mode, sets storage to remember selection
  if (localStorage.getItem("dark-mode") == "false") {
    bgtoggle.classList.add("fa-sun");
    bgtoggle.classList.remove("fa-moon");
    darkbtn.style.backgroundColor = "white";
    darkbtn.style.color = "black";
    logo.style.border = "2px solid white";
    localStorage.setItem("dark-mode", "true");
    element.classList.toggle("dark-mode");
    darkbtn.classList.toggle("dark-mode");
  } else {
    bgtoggle.classList.add("fa-moon");
    bgtoggle.classList.remove("fa-sun");
    darkbtn.style.backgroundColor = "black";
    darkbtn.style.color = "white";
    logo.style.border = "2px solid black";
    localStorage.setItem("dark-mode", "false");
    element.classList.toggle("dark-mode");
    darkbtn.classList.toggle("dark-mode");
  }
}

function darkCheck() {
  var element = document.body;
  var bgtoggle = document.getElementById("bgtoggle");
  var darkbtn = document.getElementById("darkbtn");
  var logo = document.getElementById("logo");
  if (localStorage.getItem("dark-mode") == "true") {
    bgtoggle.classList.add("fa-sun");
    darkbtn.style.backgroundColor = "white";
    darkbtn.style.color = "black";
    logo.style.border = "2px solid white";
    element.classList.toggle("dark-mode");
    darkbtn.classList.toggle("dark-mode");
  }
}

function darktoggleBlog() {
  var bgtoggle = document.getElementById("bgtoggle");
  var darkbtn = document.getElementById("darkbtn");
  var element = document.body;

  if (localStorage.getItem("dark-mode") == "false") {
    bgtoggle.classList.add("fa-sun");
    bgtoggle.classList.remove("fa-moon");
    darkbtn.style.backgroundColor = "white";
    darkbtn.style.color = "black";
    localStorage.setItem("dark-mode", "true");
    element.classList.toggle("dark-mode");
    darkbtn.classList.toggle("dark-mode");
  } else {
    bgtoggle.classList.add("fa-moon");
    bgtoggle.classList.remove("fa-sun");
    darkbtn.style.backgroundColor = "black";
    darkbtn.style.color = "white";
    localStorage.setItem("dark-mode", "false");
    element.classList.toggle("dark-mode");
    darkbtn.classList.toggle("dark-mode");
  }
}

function darkCheckBlog() {
  var element = document.body;
  var bgtoggle = document.getElementById("bgtoggle");
  var darkbtn = document.getElementById("darkbtn");
  if (localStorage.getItem("dark-mode") == "true") {
    bgtoggle.classList.add("fa-sun");
    darkbtn.style.backgroundColor = "white";
    darkbtn.style.color = "black";
    element.classList.toggle("dark-mode");
    darkbtn.classList.toggle("dark-mode");
  }
}

function reactNav() {
  var x = document.getElementById("navbar");
  var y = document.getElementById("navSpecial");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

function stickyNav() {
  var navbar = document.getElementById("navbar");
  var navTop = navbar.offsetTop;

  window.addEventListener('scroll', function() {
    console.log('navTop = ' + navTop);
    console.log('scrollY = ' + window.scrollY);
    if (window.scrollY >= navTop) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
}

function init() {
  darkCheck();
  load();
  stickyNav();
}

function initBlog() {
  darkCheckBlog();
  load();
}

function load() {
  document.body.classList.add('loaded');
}
