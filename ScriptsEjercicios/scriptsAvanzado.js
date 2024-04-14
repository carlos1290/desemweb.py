// Define una matriz de ejercicios de nivel avanzado, cada uno con descripción, respuesta correcta e imagen.
var exercises = [
  {
    description: "Completa el código para verificar si un número es par. Dado que se crea una variable llamada 'numero' con el valor 8. Debes mostrar un mensaje que diga si el número es par o no es par.",
    correctAnswer: "int Numero = 8; if (Numero % 2 == 0) { System.out.println(Numero + ' es un número par.'); } else { System.out.println(Numero + ' no es un número par.'); }",
    image: "ImagenesEjercicios/Avanzado1.PNG"
  },
  {
    description: "Completa el código para imprimir los números del 1 al 5 letra por letra. Utiliza un bucle 'for' con una variable de iteración 'i' que comienza en 1 y termina en 5. En cada iteración del bucle, utiliza 'System.out.println()' para imprimir el valor actual de 'i' en una línea separada.",
    correctAnswer: "for (int i = 1; i <= 5; i++) { System.out.println(i); }",
    image: "ImagenesEjercicios/Avanzado2.PNG"
  }
];

// Inicializa el índice del ejercicio actual y el contador de intentos.
var currentExercise = 0;
var attempts = 0;

// Función para inicializar el ejercicio actual.
function initializeExercise() {
  var exerciseContainer = document.querySelector(".exercise-container");
  exerciseContainer.querySelector("#exerciseTitle").textContent = "Ejercicio " + (currentExercise + 1);
  exerciseContainer.querySelector("#exerciseDescription").textContent = exercises[currentExercise].description;

  var exerciseImageContainer = document.getElementById("exerciseImageContainer");
  exerciseImageContainer.innerHTML = "";

  if (exercises[currentExercise].image) {
    var exerciseImage = document.createElement("img");
    exerciseImage.src = exercises[currentExercise].image;
    exerciseImage.alt = "Imagen " + (currentExercise + 1);
    exerciseImageContainer.appendChild(exerciseImage);
  }
}

// Función para verificar la respuesta del usuario.
function checkAnswer() {
  var answerInput = document.getElementById("answer");
  var feedback = document.getElementById("feedback");
  var nextButton = document.getElementById("nextButton");

  if (answerInput.value === exercises[currentExercise].correctAnswer) {
    feedback.textContent = "¡Respuesta correcta!";
    feedback.style.color = "black";
    nextButton.style.display = "block";
  } else {
    attempts++;
    if (attempts === 5) {
      feedback.textContent = "Superaste el límite de intentos. Esta es la solución: " + exercises[currentExercise].correctAnswer;
      feedback.style.color = "grey";
      nextButton.style.display = "block";
      answerInput.disabled = true;
    } else {
      feedback.textContent = "Respuesta incorrecta. Inténtalo nuevamente.";
      feedback.style.color = "grey";
    }
  }
}

// Función para avanzar al siguiente ejercicio.
function nextExercise() {
  var answerInput = document.getElementById("answer");
  var feedback = document.getElementById("feedback");
  var nextButton = document.getElementById("nextButton");

  answerInput.value = "";
  feedback.textContent = "";
  nextButton.style.display = "none";
  answerInput.disabled = false;
  attempts = 0;

  currentExercise++;
  if (currentExercise >= exercises.length) {
    alert("¡Felicidades! Has completado todos los ejercicios de nivel avanzado. ¡Excelente trabajo! Espero que hayas disfrutado de los ejercicios. ¡Hasta la próxima!");
    window.location.href = "ProyectoDis.html";
  } else {
    initializeExercise();
  }
}

// La función initializeExercise se llama cuando se carga la página.
window.onload = initializeExercise;
