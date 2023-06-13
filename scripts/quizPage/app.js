let counter = 0;
let optionClicked;
let currentQuestion = 1;
const checkboxes = document.querySelectorAll('input[type="radio"]');
const options = document.querySelectorAll('.question-option');
const nextQuestion = document.getElementById("next-question-btn");
// const option1 = document.getElementById("option-1");
// const option2 = document.getElementById("option-2");
// const option3 = document.getElementById("option-3");
// const option4 = document.getElementById("option-4");
// const options = [option1, option2, option3, option4];
const question1 = document.getElementById("question-1");
const question2 = document.getElementById("question-2");
const question3 = document.getElementById("question-3");
const question4 = document.getElementById("question-4");
const question5 = document.getElementById("question-5");

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
  
})

nextQuestion.addEventListener("click", (e) => {
  optionClicked = e.target;
  console.log(optionClicked)
  // counter = parseInt(optionClicked.value) + counter;
  // optionClicked = "";

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
