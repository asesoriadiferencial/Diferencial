// Función para generar un número aleatorio entre min y max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Función para reproducir un audio diciendo un número
  function playRandomNumbers() {
    var numbers = [];
    for (var i = 0; i < 4; i++) {
      var randomNumber = getRandomNumber(1, 10); // Genera un número aleatorio entre 1 y 10
      numbers.push(randomNumber);
    }
  
    var numbersToSpeech = new SpeechSynthesisUtterance(numbers.join(' ')); // Convierte los números en texto separados por espacio
  
    // Configura el idioma y la voz para la síntesis de voz
    numbersToSpeech.lang = 'es-ES'; // Cambia al código del idioma que deseas utilizar
    numbersToSpeech.volume = 1; // Volumen del audio (de 0 a 1)
    numbersToSpeech.rate = 0.7; // Velocidad de reproducción del audio (de 0.1 a 10)
  
    // Reproduce el audio
    speechSynthesis.speak(numbersToSpeech);
  }
  
  // Asignar el evento click al botón
  var playButton = document.getElementById('playButton');
  playButton.addEventListener('click', playRandomNumbers);
  