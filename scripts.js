// jquery onload
// $(function() { ... }); is shortcut for on-load
$(function () {
  $("#nav-container").load("assets/navbar.html", function () {
    setActive()
    stickyNav()
  });
  $("#footer-container").load("assets/footer.html");
  $("#PGP-container").load("assets/PGP.txt");
  $("#pgpKeybtn").click(function () {})
});



$.getJSON('assets/blog.json', function (data) {
  /* The parameter (data) will refer to the resume.json whenever called later on in the document */
  if (window.location.href.indexOf("blog.html") > -1) {
    loadBlog(data.blogContainer, "blogContainer");
  }
});

function loadBlog(data, type) {
  var container = document.getElementById(type);
  for (var i = 0; i < data.length; i++) {
    var current = data[i];
    var s = createNode('a', "blocks");
    s.href = current.link;
    /*    s.appendChild(createNode('div', "decorator")); */
    var details = createNode('div', "details");
    details.appendChildren(
      createNode('h3', "title", current.title),
      createNode('p', "date", current.date),
      createNode('p', "desc", current.desc));
    s.appendChild(details);
    container.appendChild(s);
  }
};

// $(function() { ... }); is shortcut for on-load
function floatToggle() {
  $(".float, .darkFloat").toggleClass("float darkFloat");
}

/* Loads all into the HTML */
HTMLElement.prototype.appendChildren = function () {
  for (var i = 0; i < arguments.length; i++)
    this.appendChild(arguments[i]);
};

function createNode(type, className, inner) {
  var result = document.createElement(type);
  result.className = className;
  result.textContent = inner;
  console.log(result);
  return result;
};



function init() {
  darkCheck();
  load();
}

function load() {
  document.body.classList.add('loaded');
}



function darktoggle() {
  var bgtoggle = document.getElementById("bgtoggle");
  var darkbtn = document.getElementById("darkbtn");
  var element = document.body;
  var float = document.querySelectorAll('.float');

  // Changes page to dark mode, sets storage to remember selection
  if (localStorage.getItem("dark-mode") == "false") {
    bgtoggle.classList.add("fa-sun");
    bgtoggle.classList.remove("fa-moon");
    darkbtn.style.backgroundColor = '#473335';
    darkbtn.style.color = "#f59bba";
    localStorage.setItem("dark-mode", "true");
    element.classList.toggle("dark-mode");
    darkbtn.classList.toggle("dark-mode");
    if (typeof float !== "undefined") {
      floatToggle();
    }
  } else {
    bgtoggle.classList.add("fa-moon");
    bgtoggle.classList.remove("fa-sun");
    darkbtn.style.backgroundColor = "black";
    darkbtn.style.color = "white";
    localStorage.setItem("dark-mode", "false");
    element.classList.toggle("dark-mode");
    darkbtn.classList.toggle("dark-mode");
    if (typeof float !== "undefined") {
      floatToggle();
    }
  }
}

function darkCheck() {
  var element = document.body;
  var bgtoggle = document.getElementById("bgtoggle");
  var darkbtn = document.getElementById("darkbtn");
  var float = document.querySelectorAll('.float');

  if (localStorage.getItem("dark-mode") == "true") {
    bgtoggle.classList.add("fa-sun");
    darkbtn.style.backgroundColor = '#473335';
    darkbtn.style.color = "#f59bba";
    element.classList.toggle("dark-mode");
    darkbtn.classList.toggle("dark-mode");
    if (typeof float !== "undefined") {
      floatToggle();
    }
  }
}



function reactNav() {
  var x = document.getElementById("navbar");
  if (x.classList.contains('responsive')) {
    x.classList.remove("responsive");
  } else {
    x.classList.add("responsive");
  }
}

function stickyNav() {
  var navbar = document.getElementById("navbar");
  var navTop = 186;
  console.log('stickyNav loaded');
  console.log(navTop);

  window.addEventListener('scroll', function () {
    if (window.scrollY >= navTop) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
}



function pgpKey() {
  var x = document.getElementById("pgpKey");
  var pgpKeybtn = document.getElementById("pgpKeybtn")
  if (x.style.display === "none") {
    x.style.display = "table";
    pgpKeybtn.innerHTML = "<b>Hide PGP Key</b>"
  } else {
    x.style.display = "none";
    pgpKeybtn.innerHTML = "<b>View PGP Key</b>"
  }
}