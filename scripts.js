// $(function() { ... }); is shortcut for on-load
$(function () {
  $("#nav-container").load("../assets/navbar.html", function () {
    setActive();
    stickyNav();
  });
  $("#footer-container").load("../assets/footer.html");
  $("#PGP-container").load("../assets/PGP.txt");
  $("#pgpKeybtn").click(function () {});
});

function doSomething() {
  $.getJSON('../assets/writing.json', function (data) {
    /* The parameter (data) will refer to the resume.json whenever called later on in the document */
    if (window.location.href.indexOf("/writing.html") > -1) {
      loadWriting(data.writingContainer, "writingContainer");
    }
  })
};


/* type, className, and inner are all parameter names */
function createNode(type, className, inner) {
  var result = document.createElement(type);
  result.className = className;
  result.textContent = inner;
  console.log(result);
  return result;
};

function loadWriting(data, type) {
  var container = document.getElementById(type);
  for (var i = 0; i < data.length; i++) {
    var current = data[i];
    var s = createNode('a', "blocks");
    s.href = current.link;
    var details = createNode('div', "details");
    details.appendChildren(
      createNode('h3', "title", current.title),
      createNode('p', "date", current.date),
      createNode('p', "desc", current.desc),
    );
    /* appendChild adds to the parent item */
    s.appendChild(details);
    container.appendChild(s);
  }
};

/* alternative to using the appendChildren function:
var a = createNode('h3', 'title', current.title);
var b = createNode('p', "date", current.date);
var c = createNode('p', "desc", current.desc);
details.appendChild(a);
details.appendChild(b);
details.appendChild(c);
*/

$.getJSON('../assets/writing.json', function (data) {
  /* The parameter (data) will refer to the resume.json whenever called later on in the document */
  if (window.location.href.indexOf("/writing/") > -1) {
    loadWritingPage(data.writingContainer, "writingContainerPage");
  }
});


/* declaring the appendChildren function, appends multiple arguments to the parent */
HTMLElement.prototype.appendChildren = function () {
  for (var i = 0; i < arguments.length; i++)
    this.appendChild(arguments[i]);
};



// $(function() { ... }); is shortcut for on-load
function floatToggle() {
  $(".float, .darkFloat").toggleClass("float darkFloat");
}



function init() {
  darkCheck();
  load();
}

function load() {
  document.body.classList.add('loaded');
}



function darkToggle() {
  var bgtoggle = document.getElementById("bgtoggle");
  var element = document.body;
  var float = document.querySelectorAll('.float');

  // Changes page to dark mode, sets storage to remember selection
  if (localStorage.getItem("dark-mode") == "false") {
    bgtoggle.classList.add("fa-sun");
    bgtoggle.classList.remove("fa-moon");
    localStorage.setItem("dark-mode", "true");
    element.classList.toggle("dark-mode");
    if (typeof float !== "undefined") {
      floatToggle();
    }
  } else {
    bgtoggle.classList.add("fa-moon");
    bgtoggle.classList.remove("fa-sun");
    localStorage.setItem("dark-mode", "false");
    element.classList.toggle("dark-mode");
    if (typeof float !== "undefined") {
      floatToggle();
    }
  }
}

function darkCheck() {
  var element = document.body;
  var float = document.querySelectorAll('.float');

  if (localStorage.getItem("dark-mode") == "true") {
    bgtoggle.classList.add("fa-sun");
    element.classList.toggle("dark-mode");
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


