// Barra de progreso
window.addEventListener('scroll', function() {
  var windowHeight = window.innerHeight;
  var fullHeight = document.body.clientHeight;
  var scrolled = window.scrollY;
  var position = (scrolled / (fullHeight - windowHeight)) * 100;
  document.getElementById('progress-bar').style.width = position + '%';
});
