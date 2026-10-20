/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   6. evidenzia(indice) / togliEvidenza(indice)
   7. data automatica nel task
   8. contaPerPriorita()
*/

// catturo lista-task
const taskList = document.querySelector('#lista-task')
const  contatore = document.querySelector('#contatore')

// creo la lista dei task
const task = [,

]

// creo la funzione aggiungi task con la decostruzione delle priorità

// l'elemento padre degli li è tasklist 

// dentro gli li  ci sarà

// h4 pagare le bollette

// button priorità
// span e button



const aggiungiTask = ({name,data,priority})=>{
  task.push({name,data,priority})
  console.log(...task)
  const li = document.createElement('li')
  const title = document.createElement('span')
  title.textContent = name
  const date = document.createElement('span')
  date.textContent =  data
  const prioritybutton = document.createElement('button')
  prioritybutton.textContent = priority
  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'elimina'
  li.appendChild(title)
  li.appendChild(prioritybutton)
  li.appendChild(date)
  li.appendChild(deleteButton)
  taskList.appendChild(li)
}

const dataFormattata =  new Date().toDateString('it-IT')



const newtask ={
  name:"Nome task",
  data: dataFormattata,
  priority:"alta"
}

aggiungiTask(newtask)
aggiungiTask(newtask)
aggiungiTask(newtask)


//  cercando di capire se inserire l'oggetto in una lsita però credo di si perchè altrimenti non ho la lista degli elementi da stampare

contatore.innerHTML = task.length - 1