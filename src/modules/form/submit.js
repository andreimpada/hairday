import dayjs from 'dayjs';
const form = document.querySelector('form');
const selectedDate = document.getElementById("date")

//data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega data atual e defini a data minima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday


form.onsubmit = (event) => {
  //previne o comportamento padrão de envio do formulário
  event.preventDefault();
  console.log ("enviado")
}