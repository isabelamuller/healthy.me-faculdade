const nameForm = document.getElementById("name-form-field");
const phoneForm = document.getElementById("phone-form-field");
const emailForm = document.getElementById("email-form-field");
const cityForm = document.getElementById("city-form-field");
const submitBtn = document.getElementById("submit-btn-form");
const dayWeekForm = document.getElementById("day-week-form-field");
const specialistForm = document.getElementById("specialist-form-field");
const hourForm = document.getElementById("hour-form-field");
const messageForm = document.getElementById("message-form-field");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let formData = {
    name: nameForm.value,
    phone: parseInt(phoneForm.value),
    email: emailForm.value,
    cityState: cityForm.value,
    day: dayWeekForm.value,
    specialist: specialistForm.value,
    timeOfDay: hourForm.value,
    message: messageForm.value,
  };
  console.log(formData);
  formData = {};
});
