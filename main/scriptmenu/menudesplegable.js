
var menuProgramacion = document.getElementById("menuProgramacion");


menuProgramacion.addEventListener("mouseover", function () {
  this.getElementsByClassName("dropdown-menu")[0].classList.add("show");
});


menuProgramacion.addEventListener("mouseout", function () {
  this.getElementsByClassName("dropdown-menu")[0].classList.remove("show");
});
