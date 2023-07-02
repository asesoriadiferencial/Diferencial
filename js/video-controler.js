let youtubePlayer;
const playPauseButton = document.getElementById('playPauseButton');
const restartButton = document.getElementById("restartButton");
const backwardButton = document.getElementById("backwardButton");
const forwardButton = document.getElementById("forwardButton");
const fullscreenButton = document.getElementById("fullscreenButton");
const exitFullscreenButton = document.getElementById("exitFullscreenButton");
const volumeRange = document.getElementById("volumeRange");

function onYouTubeIframeAPIReady() {
  youtubePlayer = new YT.Player("youtubePlayer", {
    videoId: "6iXJBTTmGM0", // Reemplaza 'VIDEO_ID' con el ID del video de YouTube
    playerVars: {
      controls: 0, // Deshabilitar controles de YouTube nativos
      disablekb: 1, // Deshabilitar controles de teclado de YouTube
    },
    events: {
      onReady: onPlayerReady,
      onStateChange : onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
    playPauseButton.addEventListener('click', () => {
        const playerState = youtubePlayer.getPlayerState();
        if (playerState === YT.PlayerState.PLAYING) {
          youtubePlayer.pauseVideo();
        } else {
          youtubePlayer.playVideo();
        }
      });

  restartButton.addEventListener("click", () => {
    youtubePlayer.seekTo(0);
  });

  backwardButton.addEventListener("click", () => {
    const currentTime = youtubePlayer.getCurrentTime();
    youtubePlayer.seekTo(currentTime - 5);
  });

  forwardButton.addEventListener("click", () => {
    const currentTime = youtubePlayer.getCurrentTime();
    youtubePlayer.seekTo(currentTime + 5);
  });

  fullscreenButton.addEventListener("click", () => {
    const playerElement = document.getElementById("youtubePlayer");
    if (playerElement.requestFullscreen) {
      playerElement.requestFullscreen();
    } else if (playerElement.mozRequestFullScreen) {
      playerElement.mozRequestFullScreen();
    } else if (playerElement.webkitRequestFullscreen) {
      playerElement.webkitRequestFullscreen();
    } else if (playerElement.msRequestFullscreen) {
      playerElement.msRequestFullscreen();
    }
  });

  volumeRange.addEventListener("input", () => {
    const volume = volumeRange.value;
    youtubePlayer.setVolume(volume * 100);
  });
}

function onPlayerStateChange(event) {
    const playerState = event.data;
    if (playerState === YT.PlayerState.PLAYING) {
      playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    }
  }