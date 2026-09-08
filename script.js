const EVENT_YEAR = 2026;
const EVENT_START_DATE = "20260914";
const EVENT_END_DATE = "20260916";

const calendarButton = document.getElementById("calendarButton");
const musicButton = document.getElementById("musicButton");
const backgroundMusic = document.getElementById("backgroundMusic");

let isMusicPlaying = false;

calendarButton.addEventListener("click", () => {
  const eventTitle = "Ganpati Darshan - Karnik Family";
  const eventDetails =
    "You are warmly invited to seek the blessings of Lord Ganesha with the Karnik Family.";

  const eventLocation =
    "802, Parag CHS, Chandavarkar Road, Borivali West, Mumbai - 400092";

  const calendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    `&text=${encodeURIComponent(eventTitle)}` +
    `&dates=${EVENT_START_DATE}/${EVENT_END_DATE}` +
    `&details=${encodeURIComponent(eventDetails)}` +
    `&location=${encodeURIComponent(eventLocation)}`;

  window.open(calendarUrl, "_blank", "noopener,noreferrer");
});

musicButton.addEventListener("click", async () => {
  const hasMusicFile = backgroundMusic.querySelector("source");

  if (!hasMusicFile) {
    musicButton.textContent = "♪ Add Music";
    setTimeout(() => {
      musicButton.textContent = "♪ Music";
    }, 1800);

    return;
  }

  try {
    if (isMusicPlaying) {
      backgroundMusic.pause();
      musicButton.textContent = "♪ Music";
      musicButton.classList.remove("is-playing");
      isMusicPlaying = false;
    } else {
      await backgroundMusic.play();
      musicButton.textContent = "♫ Playing";
      musicButton.classList.add("is-playing");
      isMusicPlaying = true;
    }
  } catch (error) {
    musicButton.textContent = "♪ Music";
  }
});