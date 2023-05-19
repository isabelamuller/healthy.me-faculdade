let musicPlay = false;
let darkMode;
const music = document.getElementById("music");
const musicBtn = document.getElementById("music-btn");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");

musicBtn.addEventListener("click", () => {
  togglePlayMusic();
});

const togglePlayMusic = () => {
  musicPlay ? pauseMusic() : playMusic();
};

const pauseMusic = () => {
  try {
    music.pause();
    musicPlay = false;
    musicBtn.style.backgroundImage =
      'url("https://cdn.icon-icons.com/icons2/2226/PNG/512/play_icon_134504.png")';
  } catch {
    console.error(error);
  }
};

const playMusic = () => {
  try {
    music.play();
    musicPlay = true;
    musicBtn.style.backgroundImage =
      'url("https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-pause-512.png")';
  } catch {
    console.error(error);
  }
};

darkBtn.addEventListener("click", () => {
  toggleLightMode();
});

lightBtn.addEventListener("click", () => {
  toggleDarkMode();
});

const toggleLightMode = () => {
  darkBtn.style.display = "none";
  lightBtn.style.display = "block";
  darkMode = false;
};

const toggleDarkMode = () => {
  darkBtn.style.display = "block";
  lightBtn.style.display = "none";
  darkMode = true;
};
