const nameForm = document.getElementById("name-form-field");
const phoneForm = document.getElementById("phone-form-field");
const emailForm = document.getElementById("email-form-field");
const cityForm = document.getElementById("city-form-field");
const submitBtn = document.getElementById("submit-btn-form");
const dayWeekForm = document.getElementById("day-week-form-field");
const specialistForm = document.getElementById("specialist-form-field");
const hourForm = document.getElementById("hour-form-field");
const messageForm = document.getElementById("message-form-field");

submitBtn.addEventListener("click", (e) => { // metodo para adicionar o evento de click no botao submit-btn-form
  e.preventDefault(); // previne que a pagina atualize (como um f5), ao clicar no botao de submit
  let formData = { // criacao do objeto formData
    name: nameForm.value, // cada propriedade do objeto é um campo do formulario
    phone: parseInt(phoneForm.value), // aqui, como o phone retorna em string, passamos o parseInt para transformarmos em number
    email: emailForm.value,
    cityState: cityForm.value,
    day: dayWeekForm.value,
    specialist: specialistForm.value,
    timeOfDay: hourForm.value,
    message: messageForm.value,
  };
  console.log(formData) // imprimimos o objeto no console para melhor visualizacao
  formData = {}; // limpamos o objeto formData
});
