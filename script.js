const musicButton = document.getElementById("musicButton");
const backgroundMusic = document.getElementById("backgroundMusic");

let isMusicPlaying = false;

function updateMusicButton() {
  if (!musicButton) return;

  if (isMusicPlaying) {
    musicButton.textContent = "♪ Mute";
    musicButton.classList.add("is-playing");
    musicButton.setAttribute("aria-label", "Mute music");
  } else {
    musicButton.textContent = "♪ Play";
    musicButton.classList.remove("is-playing");
    musicButton.setAttribute("aria-label", "Play music");
  }
}

async function startMusic() {
  if (!backgroundMusic) return;

  try {
    await backgroundMusic.play();

    isMusicPlaying = true;
    updateMusicButton();
  } catch (error) {
    console.log("Music could not start automatically:", error);

    isMusicPlaying = false;
    updateMusicButton();
  }
}

function stopMusic() {
  if (!backgroundMusic) return;

  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;

  isMusicPlaying = false;
  updateMusicButton();
}

if (musicButton && backgroundMusic) {
  musicButton.addEventListener("click", async () => {
    if (isMusicPlaying) {
      stopMusic();
    } else {
      await startMusic();
    }
  });

  backgroundMusic.addEventListener("ended", () => {
    if (isMusicPlaying) {
      backgroundMusic.currentTime = 0;
      backgroundMusic.play();
    }
  });

  updateMusicButton();

  // Browsers may block autoplay.
  // If blocked, tap the "♪ Play" button.
  startMusic();
}