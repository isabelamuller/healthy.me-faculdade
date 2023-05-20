let musicPlay = false;
let darkMode;
const music = document.getElementById("music");
const musicBtn = document.getElementById("music-btn");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");
const vitamins = document.getElementById("vitamins");
const vitaminsDisplay = document.getElementById("vitamins-display")
const simpleActions = document.getElementById("simple-actions");
const simpleActionsDisplay = document.getElementById("simple-actions-display")
const exercise = document.getElementById("exercise");
const exerciseDisplay = document.getElementById("exercise-display")
const infoButtons = [vitamins, exercise, simpleActions];

const toggleInfoBtn = () => {
  const clickedButton = event.target;
  switch (clickedButton) {
    case vitamins:
      vitaminsDisplay.style.display = "block"
      simpleActionsDisplay.style.display = "none"
      exerciseDisplay.style.display = "none"
      break;
    case simpleActions:
      vitaminsDisplay.style.display = "none"
      simpleActionsDisplay.style.display = "block"
      exerciseDisplay.style.display = "none"
      break;
    case exercise:
      vitaminsDisplay.style.display = "none"
      simpleActionsDisplay.style.display = "none"
      exerciseDisplay.style.display = "block"
      break;
    default:
      break;
  }
};

infoButtons.forEach((button) => {
  button.addEventListener("click", toggleInfoBtn);
});

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
