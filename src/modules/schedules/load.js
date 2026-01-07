import { hoursLoad } from "../form/hours-load.js"

//seleciona o input de data
const selectDate =document.getElementById("date")
export function schedulesDay() {
  //obtem a data do input
  const date = selectDate.value 
  
  //renderiza as horas disponiveis
  hoursLoad({date})
}