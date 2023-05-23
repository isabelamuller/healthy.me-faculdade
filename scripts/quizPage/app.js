let counter = 0;
let optionClicked;
const checkboxes = document.querySelectorAll(".option-quiz");
const nextQuestion = document.getElementById("next-question-btn");

const option1 = document.getElementById("option-1");
const option2 = document.getElementById("option-2");
const option3 = document.getElementById("option-3");
const option4 = document.getElementById("option-4");
const options = [option1, option2, option3, option4];


checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    checkboxes.forEach((option) => {
      if (option !== e.target) {
        option.checked = false;
      }
    });
  });
});

const handleCount = () => {
    counter = parseInt(optionClicked.value) + counter;
    optionClicked = ''
};

nextQuestion.addEventListener("click", (e) => {
  e.preventDefault();
  handleCount();
});

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    optionClicked = e.target
});
});
