// Define una matriz de ejercicios, cada uno con su descripción, respuesta correcta e imagen.
var exercises = [
  {
    description: "Completa el código para hacer una variable entera llamada Numero que sea igual a 5.",
    correctAnswer: "int Numero = 5;",
    image: "ImagenesEjercicios/Principiante1.PNG"
  },
  {
    description: "Completa el código para mostrar 'Hola'.",
    correctAnswer: "System.out.println('Hola');",
    image: "ImagenesEjercicios/Principiante2.PNG"
  },
  {
    description: "Completa el código para sumar 5 y 3.",
    correctAnswer: "System.out.println(5 + 3);",
    image: "ImagenesEjercicios/Principiante3.PNG"
  },
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

  var userAnswer = answerInput.value.trim();
  var correctAnswer = exercises[currentExercise].correctAnswer.trim();

  if (userAnswer === correctAnswer) {
    feedback.textContent = "¡Respuesta correcta!";
    feedback.style.color = "black";
    nextButton.style.display = "block";
  } else {
    attempts++;
    if (attempts >= 5) {
      feedback.textContent = "Superaste el límite de intentos. La respuesta correcta es: " + correctAnswer;
      feedback.style.color = "grey";
      nextButton.style.display = "block";
      answerInput.disabled = true;
    } else {
      feedback.textContent = "Respuesta incorrecta. Inténtalo nuevamente.";
      feedback.style.color = "grey";
      nextButton.style.display = "none";
    }
  }
}

// Función para avanzar al siguiente ejercicio.
function nextExercise() {
  var answerInput = document.getElementById("answer");
  var feedback = document.getElementById("feedback");
  var nextButton = document.getElementById("nextButton");

  // Restablece el valor del campo de respuesta, elimina el feedback y oculta el botón de siguiente.
  answerInput.value = "";
  feedback.textContent = "";
  nextButton.style.display = "none";
  answerInput.disabled = false;
  attempts = 0;

  // Avanza al siguiente ejercicio si hay más disponibles, de lo contrario, muestra una alerta y redirige.
  currentExercise++;
  if (currentExercise >= exercises.length) {
    alert("¡Felicidades! Has completado todos los ejercicios de nivel principiante.");
    window.location.href = "Intermedio.html";
  } else {
    initializeExercise();
  }
}

// La función initializeExercise se llama cuando se carga la página.
window.onload = initializeExercise;
