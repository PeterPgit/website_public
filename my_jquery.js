// cross-page nav bar
$(function () {
  $("#nav-container").load("assets/navbar.html");
  $("#footer-container").load("assets/footer.html");
});

// $(function() { ... }); is shortcut for on-load
function floatToggle() {
  $(".float, .darkFloat").toggleClass("float darkFloat");
}