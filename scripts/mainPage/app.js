let musicPlay = false;
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
    title: "elogiar um estranho",
    frequency: "semanal",
    id: 7,
  },
];
let darkMode = false;
const music = document.getElementById("music");
const musicBtn = document.getElementById("music-btn");
const darkBtn = document.getElementById("dark-btn");
const body = document.body;
const vitaminsDisplay = document.getElementById("vitamins-display-container");
const exerciseDisplay = document.getElementById("exercise-display-container");
const sportsDisplay = document.getElementById("sports-display-container");
const simpleActionsDisplay = document.getElementById(
  "simple-actions-display-container"
);
const vitamins = document.getElementById("vitamins");
const exercise = document.getElementById("exercise");
const sports = document.getElementById("sports");
const simpleActions = document.getElementById("simple-actions");
const infoButtons = [vitamins, exercise, simpleActions, sports];
const formChallenge = document.getElementById("form-challenge");
const inputChallenge = document.getElementById("input-challenge");
const goalsContainer = document.getElementById("goals-container");
const selectFrequency = document.getElementById("frequency-select");
const deleteButtons = document.querySelectorAll(".delete-icon");
const coverImgAbout = document.getElementById("about-cover-img");
const logoImg = document.getElementById("logo-img");

// dark mode
darkBtn.addEventListener("click", () => {
  if (darkMode === false) {
    darkMode = true;
    body.classList.add("dark-mode");
    coverImgAbout.src = "../../assets/images/inverted-logo.png";
    logoImg.src = "../../assets/images/inverted-logo.png";
    darkBtn.src = "../../assets/images/sun.png";
  } else {
    darkMode = false;
    body.classList.remove("dark-mode");
    coverImgAbout.src = "../../assets/images/cover.png";
    logoImg.src = "../../assets/images/cover.png";
    darkBtn.src =
      "https://cdn.icon-icons.com/icons2/1674/PNG/512/moon_111148.png";
  }
});

// display info page

const toggleInfoBtn = (e) => {
  // criacao da funcao toggleInfoBtn, que sera acionada quando um dos infoButtons forem clicados
  const clickedButton = e.target; // constante clickedButton recebe o componente que foi clicado com e.target
  switch (
    clickedButton // switch case, dependendo do botão clicado, define o estilo de exibição
  ) {
    case vitamins: // caso clicar em vitaminas
      vitaminsDisplay.style.display = "block"; // ele aparece na tela
      simpleActionsDisplay.style.display = "none"; // e todos os outros nao
      exerciseDisplay.style.display = "none";
      sportsDisplay.style.display = "none";
      break;
    case simpleActions: // mesma coisa
      vitaminsDisplay.style.display = "none";
      simpleActionsDisplay.style.display = "block";
      exerciseDisplay.style.display = "none";
      sportsDisplay.style.display = "none";
      break;
    case exercise: // mesma coisa
      vitaminsDisplay.style.display = "none";
      simpleActionsDisplay.style.display = "none";
      exerciseDisplay.style.display = "block";
      sportsDisplay.style.display = "none";
      break;
    case sports: // mesma coisa
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
  // para cada infoButtons
  button.addEventListener("click", toggleInfoBtn); // é adicionado um evento de click, e caso seja clicado, ativa a funcao toggleInfoBtn
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

// new goal creation

const newGoal = (goal) => {
  const goalElement = document.createElement("div");
  goalElement.classList.add("goal");
  goalElement.id = goal.id;

  const titleWrapper = document.createElement("div");
  titleWrapper.classList.add("goal-left-menu");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", (e) => {
    const clickedElement = e.target;
    if (clickedElement.type === "checkbox") {
      const titleElement = clickedElement
        .closest(".goal")
        .querySelector("#goal-title");
      if (clickedElement.checked) {
        titleElement.style.textDecoration = "line-through";
      } else {
        titleElement.style.textDecoration = "none";
      }
    }
  });
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

  goalsContainer.appendChild(goalElement);
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
    newGoal(goal);
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
      newGoal(goal);
    });
  }
};

// function calls

loadGoalsFromLocalStorage();
