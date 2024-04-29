// Script para mostrar/ocultar los menús desplegables al pasar el mouse sobre ellos
document.addEventListener("DOMContentLoaded", function () {
  var menus = document.querySelectorAll(".dropdown");

  menus.forEach(function (menu) {
    var dropdownMenu = menu.querySelector(".dropdown-menu");

    menu.addEventListener("mouseenter", function () {
      dropdownMenu.classList.add("show");
    });

    menu.addEventListener("mouseleave", function () {
      dropdownMenu.classList.remove("show");
    });
  });
});
