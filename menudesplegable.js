// Obtener el elemento del menú desplegable
var menuProgramacion = document.getElementById("menuProgramacion");

// Agregar evento mouseover para mostrar el menú desplegable
menuProgramacion.addEventListener("mouseover", function () {
  this.getElementsByClassName("dropdown-menu")[0].classList.add("show");
});

// Agregar evento mouseout para ocultar el menú desplegable
menuProgramacion.addEventListener("mouseout", function () {
  this.getElementsByClassName("dropdown-menu")[0].classList.remove("show");
});
