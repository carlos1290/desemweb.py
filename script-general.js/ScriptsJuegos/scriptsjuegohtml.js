let vidas = 3;
let puntaje = 0;
let tiempoInicio;

function iniciarJuego() {
  vidas = 3; // Reiniciar vidas al inicio del juego
  puntaje = 0; // Reiniciar puntaje al inicio del juego
  document.getElementById("main-inicio").style.display = "none";
  document.getElementById("main-juego").style.display = "block";

  tiempoInicio = Date.now();
}

function respuestaCorrecta(btn) {
  puntaje++;
  marcarRespuestas(btn);
  verificarFinalizacion();
}

function respuestaIncorrecta(btn) {
  vidas--;
  if (vidas === 0) {
    mostrarFinalizacion();
  } else {
    marcarRespuestas(btn);
  }
}

function marcarRespuestas(btn) {
  // Deshabilitar todos los botones de la pregunta
  const listaRespuestas = btn.closest(".lista-respuestas");
  listaRespuestas
    .querySelectorAll(".btn-respuesta")
    .forEach(function (respuestaBtn) {
      respuestaBtn.disabled = true; // Deshabilitar el botón
      respuestaBtn.classList.add("respondido"); // Agregar clase de respuesta marcada
    });
}

function verificarFinalizacion() {
  const preguntas = document.querySelectorAll("#preguntas .btn-respuesta");
  const respondidas = document.querySelectorAll(
    "#preguntas .btn-respuesta.respondido"
  );

  if (respondidas.length === preguntas.length) {
    if (puntaje === preguntas.length) {
      mostrarRevision();
    } else {
      mostrarFinalizacion();
    }
  }
}

function mostrarFinalizacion() {
  const tiempoTranscurrido = Math.floor((Date.now() - tiempoInicio) / 1000);

  document.getElementById("main-juego").style.display = "none";
  document.getElementById("main-finalizacion").style.display = "block";

  document.getElementById("puntaje").textContent = puntaje;
  document.getElementById("tiempo").textContent = tiempoTranscurrido;
}

function mostrarRevision() {
  const tiempoTranscurrido = Math.floor((Date.now() - tiempoInicio) / 1000);

  document.getElementById("main-juego").style.display = "none";
  document.getElementById("main-revision").style.display = "block";

  document.getElementById("puntaje-revision").textContent = puntaje;
  document.getElementById("tiempo-revision").textContent = tiempoTranscurrido;
}

function regresarInicio() {
  document.getElementById("main-inicio").style.display = "block";
  document.getElementById("main-finalizacion").style.display = "none";
  document.getElementById("main-revision").style.display = "none";
}
function reiniciarJuego() {
  vidas = 3;
  puntaje = 0;
  reiniciarRespuestas();
  document.getElementById("main-juego").style.display = "block";
  document.getElementById("main-finalizacion").style.display = "none";
  document.getElementById("main-revision").style.display = "none";
}

function regresarInicio() {
  vidas = 3;
  puntaje = 0;
  reiniciarRespuestas();
  document.getElementById("main-inicio").style.display = "block";
  document.getElementById("main-finalizacion").style.display = "none";
  document.getElementById("main-revision").style.display = "none";
}

function reiniciarRespuestas() {
  document.querySelectorAll(".btn-respuesta").forEach(function (respuestaBtn) {
    respuestaBtn.disabled = false; // Habilitar el botón
    respuestaBtn.classList.remove("respondido"); // Quitar la clase de respuesta marcada
  });
}
