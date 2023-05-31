let counter = 0;
let optionClicked;
let currentQuestion = 1;
const checkboxes = document.querySelectorAll(".option-quiz");
const nextQuestion = document.getElementById("next-question-btn");
const option1 = document.getElementById("option-1");
const option2 = document.getElementById("option-2");
const option3 = document.getElementById("option-3");
const option4 = document.getElementById("option-4");
const options = [option1, option2, option3, option4];
const question1 = document.getElementById("question-1");
const question2 = document.getElementById("question-2");
const question3 = document.getElementById("question-3");
const question4 = document.getElementById("question-4");
const question5 = document.getElementById("question-5");
let darkMode = false;
let musicPlay = false;
const body = document.body;
const music = document.getElementById("music");
const musicBtn = document.getElementById("music-btn");
const darkBtn = document.getElementById("dark-btn");
const logoImg = document.getElementById("logo-img");

// play music

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

// dark mode

darkBtn.addEventListener("click", () => {
  if (darkMode === false) {
    darkMode = true;
    body.classList.add("dark-mode");
    logoImg.src = "../../assets/images/inverted-logo.png";
    darkBtn.src = "../../assets/images/sun.png";
  } else {
    darkMode = false;
    body.classList.remove("dark-mode");
    logoImg.src = "../../assets/images/cover.png";
    darkBtn.src =
      "https://cdn.icon-icons.com/icons2/1674/PNG/512/moon_111148.png";
  }
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    checkboxes.forEach((option) => {
      if (option !== e.target) {
        option.checked = false;
      }
    });
  });
});

nextQuestion.addEventListener("click", (e) => {
  e.preventDefault();
  counter = parseInt(optionClicked.value) + counter;
  optionClicked = "";

  switch (currentQuestion) {
    case 1:
      question1.style.display = "none";
      break;
    case 2:
      question2.style.display = "none";
      break;
    case 3:
      question3.style.display = "none";
      break;
    case 4:
      question4.style.display = "none";
      break;
    case 5:
      question5.style.display = "none";
      break;
  }

  currentQuestion++;

  switch (currentQuestion) {
    case 2:
      question2.style.display = "block";
      break;
    case 3:
      question3.style.display = "block";
      break;
    case 4:
      question4.style.display = "block";
      break;
    case 5:
      question5.style.display = "block";
      break;
  }
});

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    optionClicked = e.target;
  });
});
