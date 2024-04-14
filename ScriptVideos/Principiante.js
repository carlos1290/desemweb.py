// Obtener el elemento de video del documento con el ID 'videoPlayer'
const videoPlayer = document.getElementById('videoPlayer');

// Definir una lista de fuentes de video
const videoSources = [
  'VideosEjercicios/PrincipianteParte1.mp4',
  'VideosEjercicios/PrincipianteParte2.mp4',
  'VideosEjercicios/PrincipianteParte3.mp4'
];

// Inicializar el índice del video actual en 0
let currentVideoIndex = 0;

// Función para reproducir el video anterior
function prevVideo() {
  // Verificar si hay un video anterior disponible
  if (currentVideoIndex > 0) {
    // Disminuir el índice del video actual
    currentVideoIndex--;

    // Cambiar la fuente del reproductor de video al video anterior
    videoPlayer.src = videoSources[currentVideoIndex];

    // Cargar y reproducir el video
    videoPlayer.load();
    videoPlayer.play();
  }
}

// Función para reproducir el siguiente video
function nextVideo() {
  // Verificar si hay un video siguiente disponible
  if (currentVideoIndex < videoSources.length - 1) {
    // Aumentar el índice del video actual
    currentVideoIndex++;

    // Cambiar la fuente del reproductor de video al video siguiente
    videoPlayer.src = videoSources[currentVideoIndex];

    // Cargar y reproducir el video
    videoPlayer.load();
    videoPlayer.play();
  }
}
