const light  = document.querySelector(".light"); // document.getElementById("light").classList.contains('light') ? ".light" : ".hilight");
const grid = document.querySelector("#hex-grid");

grid.addEventListener("mousemove", function(e) {
  //light = document.querySelector( document.getElementById("light").classList.contains('light') ? ".light" : ".hilight");
  light.style.left = e.pageX + 'px';
  light.style.top = e.pageY + 'px';
});

/*
grid.addEventListener("click", function(e) {
  document.getElementById("light").classList.add('hilight');
document.getElementById("light").classList.remove('light');

if ( document.getElementById("light").classList.contains('hilight') )

document.getElementById("light").classList.toggle('hilight');
});
*/
