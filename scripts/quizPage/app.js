let counter = 0;
let optionClicked;
let optionClickedValue;
let currentQuestion = 1;
const checkboxes = document.querySelectorAll('input[type="radio"]');
const options = document.querySelectorAll(".option-quiz");
const nextQuestion = document.getElementById("next-question-btn");
const question1 = document.getElementById("question-1");
const question2 = document.getElementById("question-2");
const question3 = document.getElementById("question-3");
const question4 = document.getElementById("question-4");
const question5 = document.getElementById("question-5");
const resultsBad = document.getElementById("results-quiz-1");
const resultsMedium = document.getElementById("results-quiz-2");
const resultsGood = document.getElementById("results-quiz-3");
const resultsCounterTitle = document.getElementById("results-counter");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    checkboxes.forEach((option) => {
      if (option !== e.target) {
        option.checked = false;
      }
    });
  });
});

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    optionClicked = e.target;
    optionClickedValue = optionClicked.value;
  });
});

const results = (counter) => {
  if (counter >= 15) {
    resultsBad.style.display = "block"
  } else if (counter >= 9 && counter <= 14) {
    resultsMedium.style.display = "block"
  } else {
    resultsGood.style.display = "block"
  }
  resultsCounterTitle.textContent = "seu resultado foi: ", counter.toString(); 
};

nextQuestion.addEventListener("click", (e) => {
  counter += parseInt(optionClickedValue);

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
    case 6:
      nextQuestion.style.display = "none";
      results(counter);
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
    case 6:
      nextQuestion.style.display = "none";
      results(counter);
      break;
  }
});

// regras:
// quanto maior o score, "pior" o resultado.
// ruim 15 a 20
// medio 9 a 14
// bom 5 a 8
