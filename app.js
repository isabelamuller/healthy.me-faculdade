let musicPlay = false;
let darkMode;
let frequency = "daily";
const music = document.getElementById("music");
const musicBtn = document.getElementById("music-btn");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");
const vitamins = document.getElementById("vitamins");
const vitaminsDisplay = document.getElementById("vitamins-display");
const simpleActions = document.getElementById("simple-actions");
const sports = document.getElementById("sports");
const simpleActionsDisplay = document.getElementById("simple-actions-display");
const sportsDisplay = document.getElementById("sports-display");
const exercise = document.getElementById("exercise");
const exerciseDisplay = document.getElementById("exercise-display");
const infoButtons = [vitamins, exercise, simpleActions, sports];
const formChallenge = document.getElementById("form-challenge");
const inputChallenge = document.getElementById("input-challenge");
const goalsContainer = document.getElementById("goals-container");
const selectFrequency = document.getElementById("frequency-select");

const toggleInfoBtn = () => {
  const clickedButton = event.target;
  switch (clickedButton) {
    case vitamins:
      vitaminsDisplay.style.display = "flex";
      simpleActionsDisplay.style.display = "none";
      exerciseDisplay.style.display = "none";
      sportsDisplay.style.display = "none";
      break;
    case simpleActions:
      vitaminsDisplay.style.display = "none";
      simpleActionsDisplay.style.display = "flex";
      exerciseDisplay.style.display = "none";
      sportsDisplay.style.display = "none";
      break;
    case exercise:
      vitaminsDisplay.style.display = "none";
      simpleActionsDisplay.style.display = "none";
      exerciseDisplay.style.display = "flex";
      sportsDisplay.style.display = "none";
      break;
    case sports:
      vitaminsDisplay.style.display = "none";
      simpleActionsDisplay.style.display = "none";
      exerciseDisplay.style.display = "none";
      sportsDisplay.style.display = "flex";
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

formChallenge.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = inputChallenge.value.trim();
  if (inputValue !== "") {
    const goal = document.createElement("div");
    goal.classList.add("goal");
    const titleWrapper = document.createElement("div");
    titleWrapper.classList.add("goal-left-menu")
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const title = document.createElement("h1");
    title.id = "goal-title";
    title.textContent = inputValue;
    const rightMenu = document.createElement("div");
    rightMenu.classList.add("goal-right-menu");
    const frequencyText = document.createElement("h3");
    frequencyText.textContent = "frequency"
    const frequencyValue = document.createElement("span");
    frequencyValue.textContent = frequency;
   
    goalsContainer.appendChild(goal);
    goal.appendChild(titleWrapper);
    titleWrapper.appendChild(checkbox);
    titleWrapper.appendChild(title);
    goal.appendChild(rightMenu);
    rightMenu.appendChild(frequencyText)
    rightMenu.appendChild(frequencyValue)
    inputChallenge.value = "";
  }
});

selectFrequency.addEventListener("change", () => {
  frequency = selectFrequency.value;
});
