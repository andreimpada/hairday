import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js";
const periods = document.querySelectorAll('.period');


//gera evento de click para cada lista
periods.forEach((period) => {
  //captura o evento de click na lista 
  period.addEventListener('click', async (event) => {
    if (event.target.classList.contains('cancel-icon')) {
      //Obtém a li pai do elemento clickado
      const item = event.target.closest("li")

      //Pega o id do agendamento para remover
      const { id } = item.dataset

      //confirma que o id é selecionado
      if (id) {
        //confirma se o usuario quer cancelar .
        const isConfirm = confirm("Tem certeza que deseja cancelar esse agendamento?")
        if (isConfirm) {

          //Faz requisição na api para cancelar o agendamento
          await scheduleCancel({ id })

          //recarrega os agendamentos
          schedulesDay()
        }
      }
    }
  })
})
