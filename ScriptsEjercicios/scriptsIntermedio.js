// Define una matriz de ejercicios de nivel intermedio, cada uno con descripción, respuesta correcta e imagen.
var exercises = [
    {
        description: "Completa el código para sumar dos números. Dado que Numero1 es 5 y Numero2 es 3, crea una variable llamada suma que almacene la suma de ambos números. Por último, muestra el resultado de la suma.",
        correctAnswer: "int Numero1 = 5; int Numero2 = 3; int Suma = Numero1 + Numero2; System.out.println('La suma es: ' + Suma);",
        image: "ImagenesEjercicios/Intermedio1.PNG"
    },
    {
        description: "Completa el código para restar dos números. Dado que Numero1 es 8 y Numero2 es 3, crea una variable llamada resta que almacene la resta de ambos números. Por último, muestra el resultado de la resta.",
        correctAnswer: "int Numero1 = 8; int Numero2 = 3; int Resta = Numero1 - Numero2; System.out.println('La resta es: ' + Resta);",
        image: "ImagenesEjercicios/Intermedio2.PNG"
    },
    {
        description: "Completa el código para multiplicar dos números. Dado que Numero1 es 4 y Numero2 es 6, crea una variable llamada Multiplicacion que almacene la multiplicación de ambos números. Por último, muestra el resultado de la multiplicación.",
        correctAnswer: "int Numero1 = 4; int Numero2 = 6; int Multiplicacion = Numero1 * Numero2; System.out.println('El resultado de la multiplicación es: ' + Multiplicacion);",
        image: "ImagenesEjercicios/Intermedio3.PNG"
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

    answerInput.value = "";
    feedback.textContent = "";
    nextButton.style.display = "none";
    answerInput.disabled = false;
    attempts = 0;

    currentExercise++;
    if (currentExercise >= exercises.length) {
        alert("¡Felicidades! Has completado todos los ejercicios de nivel intermedio.");
        window.location.href = "Avanzado.html";
    } else {
        initializeExercise();
    }
}

// La función initializeExercise se llama cuando se carga la página.
window.onload = initializeExercise;
