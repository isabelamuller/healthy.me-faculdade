let musicPlay = false;
let darkMode;
let frequency = "diário";
let deletedGoals = [];
let goals = [
  {
    title: "beber 2 litros de agua",
    frequency: "diário",
    id: 1,
  },
  {
    title: "tomar 20 minutos de sol",
    frequency: "diário",
    id: 2,
  },
  {
    title: "ler 10 páginas de um livro",
    frequency: "diário",
    id: 3,
  },
  {
    title: "tomar vitaminas",
    frequency: "diário",
    id: 4,
  },
  {
    title: "caminhada de 20 minutos",
    frequency: "diário",
    id: 5,
  },
  {
    title: "conversar com um velho amigo",
    frequency: "mensal",
    id: 6,
  },
  {
    title: "elogiar ume estranho",
    frequency: "semanal",
    id: 7,
  },
];
const music = document.getElementById("music");
const musicBtn = document.getElementById("music-btn");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");
const vitamins = document.getElementById("vitamins");
const vitaminsDisplay = document.getElementById("vitamins-display-container");
const simpleActions = document.getElementById("simple-actions");
const sports = document.getElementById("sports");
const simpleActionsDisplay = document.getElementById("simple-actions-display");
const sportsDisplay = document.getElementById("sports-display");
const exercise = document.getElementById("exercise");
const exerciseDisplay = document.getElementById("exercise-display-co");
const infoButtons = [vitamins, exercise, simpleActions, sports];
const formChallenge = document.getElementById("form-challenge");
const inputChallenge = document.getElementById("input-challenge");
const goalsContainer = document.getElementById("goals-container");
const deletedGoalsContainer = document.getElementById(
  "deleted-goals-container"
);
const selectFrequency = document.getElementById("frequency-select");
const deleteButtons = document.querySelectorAll(".delete-icon");
const showDeletedGoals = document.getElementById("deleted-goals-btn");
const showActiveGoals = document.getElementById("non-deleted-goals-btn");

// display info page

const toggleInfoBtn = (e) => {
  const clickedButton = e.target;
  switch (clickedButton) {
    case vitamins:
      vitaminsDisplay.style.display = "block";
      simpleActionsDisplay.style.display = "none";
      exerciseDisplay.style.display = "none";
      sportsDisplay.style.display = "none";
      break;
    case simpleActions:
      vitaminsDisplay.style.display = "none";
      simpleActionsDisplay.style.display = "block";
      exerciseDisplay.style.display = "none";
      sportsDisplay.style.display = "none";
      break;
    case exercise:
      vitaminsDisplay.style.display = "none";
      simpleActionsDisplay.style.display = "none";
      exerciseDisplay.style.display = "block";
      sportsDisplay.style.display = "none";
      break;
    case sports:
      vitaminsDisplay.style.display = "none";
      simpleActionsDisplay.style.display = "none";
      exerciseDisplay.style.display = "none";
      sportsDisplay.style.display = "block";
      break;
    default:
      break;
  }
};

infoButtons.forEach((button) => {
  button.addEventListener("click", toggleInfoBtn);
});

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

// new goal creation

const newGoal = (goal, container) => {
  const goalElement = document.createElement("div");
  goalElement.classList.add("goal");
  goalElement.id = goal.id;

  const titleWrapper = document.createElement("div");
  titleWrapper.classList.add("goal-left-menu");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const titleElement = document.createElement("h1");
  titleElement.id = "goal-title";
  titleElement.textContent = goal.title;

  const rightMenu = document.createElement("div");
  rightMenu.classList.add("goal-right-menu");

  const frequencyValue = document.createElement("h3");
  frequencyValue.textContent = goal.frequency;

  const deleteButton = document.createElement("img");
  deleteButton.src = "https://cdn-icons-png.flaticon.com/512/4021/4021663.png";
  deleteButton.classList.add("delete-icon");

  container.appendChild(goalElement);
  goalElement.appendChild(titleWrapper);
  titleWrapper.appendChild(checkbox);
  titleWrapper.appendChild(titleElement);
  goalElement.appendChild(rightMenu);
  rightMenu.appendChild(frequencyValue);
  rightMenu.appendChild(deleteButton);
};

// add goal to dom

const addGoal = (e) => {
  e.preventDefault();
  let id = Date.now();
  const inputValue = inputChallenge.value.trim();
  if (inputValue !== "") {
    const goal = {
      title: inputValue,
      frequency: frequency,
      id: id,
    };
    newGoal(goal, goalsContainer);
    goals.push(goal);
    saveGoalsToLocalStorage();
  }
  inputChallenge.value = "";
};

formChallenge.addEventListener("submit", addGoal);

selectFrequency.addEventListener("change", () => {
  frequency = selectFrequency.value;
});

// delete goal

goalsContainer.addEventListener("click", (e) => {
  const clickedElement = e.target;
  if (clickedElement.classList.contains("delete-icon")) {
    const rightMenu = clickedElement.parentElement;
    const goal = rightMenu.parentElement;
    goal.remove();
    let goalId = parseInt(goal.id);
    const objectToRemove = goals.find((g) => g.id === goalId);
    deletedGoals.push(objectToRemove);
    console.log(deletedGoals);
    goals = goals.filter((g) => g !== objectToRemove);
    saveGoalsToLocalStorage(goals);
    saveDeletedGoalsToLocalStorage(deletedGoals);
  }
  saveGoalsToLocalStorage();
});

// save localStorage

const saveGoalsToLocalStorage = () => {
  localStorage.setItem("goals", JSON.stringify(goals));
};
const saveDeletedGoalsToLocalStorage = () => {
  localStorage.setItem("deletedGoals", JSON.stringify(deletedGoals));
};

// load localStorage

const loadGoalsFromLocalStorage = () => {
  const storedGoals = localStorage.getItem("goals");
  const storedDeletedGoals = localStorage.getItem("deletedGoals");
  if (storedGoals) {
    goals = JSON.parse(storedGoals);
    deletedGoals = JSON.parse(storedDeletedGoals) || [];
    const deletedGoalIds = deletedGoals.map((goal) => goal.id);
    goals = goals.filter((goal) => !deletedGoalIds.includes(goal.id));
    goals.forEach((goal) => {
      newGoal(goal, goalsContainer);
    });
  }
};

// show deleted goals

showDeletedGoals.addEventListener("click", () => {
  toggleDeletedGoalsContainer();
});

const toggleDeletedGoalsContainer = () => {
  if (deletedGoalsContainer.style.display === "none") {
    displayDeletedGoals();
    deletedGoalsContainer.style.display = "flex";
    goalsContainer.style.display = "none";
  } else {
    deletedGoalsContainer.style.display = "none";
    goalsContainer.style.display = "flex";
  }
};

const displayDeletedGoals = () => {
  deletedGoals.forEach((goal) => {
   newGoal(goal, deletedGoalsContainer)
  });
};

showActiveGoals.addEventListener("click", () => {
  toggleActiveGoalsContainer();
});

const toggleActiveGoalsContainer = () => {
  if (deletedGoalsContainer.style.display === "flex") {
    displayDeletedGoals();
    deletedGoalsContainer.style.display = "none";
    goalsContainer.style.display = "flex";
  } else {
    deletedGoalsContainer.style.display = "flex";
    goalsContainer.style.display = "none";
  }
}

saveGoalsToLocalStorage(goals);
loadGoalsFromLocalStorage();
