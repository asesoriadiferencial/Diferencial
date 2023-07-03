// Variables globales
var mediaRecorder;
var recordedChunks = [];
var audioStream;
var audioLink = document.getElementById('audioLink');

// Función para habilitar el acceso al micrófono
function enableMicrophoneAccess() {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function (stream) {
      audioStream = stream;
      startRecording(stream);
    })
    .catch(function (error) {
      console.error('Error al acceder al micrófono:', error);
    });
}

// Función para iniciar la grabación
function startRecording(stream) {
  recordedChunks = [];
  mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.addEventListener('dataavailable', function (event) {
    if (event.data.size > 0) {
      recordedChunks.push(event.data);
    }
  });

  mediaRecorder.addEventListener('stop', function () {
    var audioBlob = new Blob(recordedChunks, { type: 'audio/mp3' });
    var audioUrl = URL.createObjectURL(audioBlob);
    audioLink.href = audioUrl;

    stopMicrophoneAccess();
  });

  mediaRecorder.start();
}

// Función para detener la grabación y el acceso al micrófono
function stopRecording() {
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop();
  }
}

// Función para detener el acceso al micrófono
function stopMicrophoneAccess() {
  if (audioStream) {
    audioStream.getTracks().forEach(function (track) {
      track.stop();
    });
  }
}

// Asignar los eventos click al botón de grabar
var recordButton = document.getElementById('recordButton');
recordButton.addEventListener('click', function () {
  if (mediaRecorder && mediaRecorder.state === 'recording') {
    stopRecording();
    recordButton.innerHTML = '<img src="/img/play-record.gif" alt="" /> Di las cifras del audio';
  } else {
    enableMicrophoneAccess();
    recordButton.innerHTML = '<img src="/img/stop.png" alt="" /> Detener grabación';
  }
});
