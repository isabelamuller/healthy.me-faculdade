let counter = 0;
const checkboxes = document.querySelectorAll(".option-quiz");
const nextQuestion = document.getElementById("next-question-btn");

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
  
});
