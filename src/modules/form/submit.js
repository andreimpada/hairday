import dayjs from 'dayjs';

import {scheduleNew} from "../../services/schedule-new.js"
import {schedulesDay} from "../schedules/load.js"

const form = document.querySelector('form');
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")


//data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega data atual e defini a data minima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday


form.onsubmit = async (event) => {
  //previne o comportamento padrão de envio do formulário
  event.preventDefault();

  try {
    //recuperando o nome do cliente
    const name = clientName.value.trim()
    if (!name) {
      return alert("Informe o seu nome para realizar o agendamento.")
    }

    //recupera o horario
    const hourSelected = document.querySelector('.hour-selected')

    if (!hourSelected) {
      return alert("Selecione um horário.")
    }

    //recupera somente a hora 
    const [hour] = hourSelected.innerText.split(":")
    
    //inserir a hora na data
    const when = dayjs(selectedDate.value).add(hour,"hour")
    
    //gera um ID

    const id = new Date().getTime().toString()

    //Faz agendamento 
    await scheduleNew ({
      id,
      name,
      when,
    })

    //recarrega os agendamentos
    await schedulesDay()

    //limpa o input do nome do cliente
    clientName.value = ""

  } catch (error) {
    alert("Não foi possivel realizar o agendamento")
    console.log(error)
  }
}