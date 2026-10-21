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

/* - Intercettare la lista (#lista-task) FATTO
- Creare un array con dentro degli oggetti con testo, data formattata (stringa), priorità (alta-media-bassa) FATTO
- Scrivere gli oggetti nella lista FATTO
- intercettare lo span #contatore FATTO
- Sostituire il contenuto dello span contatore col numero di oggetti nell'array FATTO */

let tasks = [
    {
		titoloTask: 'Mangiare',
		priorita: 'alta',
		isCompletata: "tutti",
		data: new Date(),
	},
    {
		titoloTask: 'Pagare le bollette',
		priorita: 'alta',
		isCompletata: "da fare",
		data: new Date(),
	},
    {
		titoloTask: 'Studiare',
		priorita: 'alta',
		isCompletata: "completati",
		data: new Date(),
	},
	
]
const tabs =[
     "tutti",
     "da fare",
     "completati"
  
]
let filtroAttuale = 'tutti';

let tasksFiltrati = [...tasks];


let taskForm = document.querySelector('#taskForm')
let nomeTask = document.querySelector('#nuovo-task')
let nuovoTask
taskForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(nomeTask.value)
    nuovoTask = {
        titoloTask:nomeTask.value,
        priorita: "alta",
        data: new Date(),
        isCompletata: "da fare",
    }
    tasks = [...tasks, nuovoTask]
    renderizza()
})

tabs.map((tab=>{
    let bottone = document.createElement('button')
    
    
    bottone.textContent = tab
      if(tab === filtroAttuale ){
        bottone.classList.add('btnBlack')
    }
      
    bottone.addEventListener('click',()=>{
        
        console.log(tab,"tipo")
        console.log(filtroAttuale,"filtra per")
        filtroAttuale = tab
        console.log(tab,"tab")
        const tabsNere = document.getElementsByClassName('btnBlack')
        console.log(tabsNere)
        if(tabsNere.length > 0){
            tabsNere[0].classList.remove('btnBlack')
        }
        if(tab.isCompletata === filtroAttuale){
            console.log("io sono qualcuno")
        }
         bottone.classList.add('btnBlack')

        tasksFiltrati = tasks.filter((task)=>{
            return task.isCompletata === filtroAttuale
            
        })
        
        renderizza()
        
    })
      
    filtro.appendChild(bottone)

}))


function renderizza() {
    if (filtroAttuale === 'tutti') {
        ciclaLista(tasks)
        
    }
    else if (filtroAttuale === 'da fare' || filtroAttuale === 'completati'){
       tasksFiltrati = tasks.filter(task=>{
        return task.isCompletata == filtroAttuale
       })
       ciclaLista(tasksFiltrati)
    }
}

function EliminaItem(item) {
    tasks = tasks.filter((task) => {
        return task !== item
    })
    renderizza()

}


let container = document.querySelector('#lista-task')
let nTask = document.querySelector('#contatore')


const ciclaLista = (lista)=>{
    container.textContent = ''
    lista.forEach((task=>{
        let list = document.createElement('li')
        list.classList.add(`priorita-${task.priorita}`);
        let nomeTask = document.createElement('span')
        let complessita = document.createElement('button')
        complessita.classList.add('badge');
        let date = document.createElement('span')
        date.textContent = task.data.toLocaleString('it-IT');
        date.classList.add('data', 'divData');
        nomeTask.textContent = task.titoloTask
        complessita.textContent = task.priorita
        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'Elimina'
        deleteButton.addEventListener('click',()=>EliminaItem(task))
        let isCompletata = document.createElement('input')
        isCompletata.setAttribute('type','checkbox')
        isCompletata.checked = task.isCompletata == 'completati'
        if(isCompletata.checked){
            nomeTask.classList.add('completata')
        }
        isCompletata.addEventListener('change',(e)=>{
            console.log(e.target.checked)

            if(e.target.checked === true){
                task.isCompletata = 'completati'
                 nomeTask.classList.add('completata')
            }
            else{
                task.isCompletata = 'da fare'
                 nomeTask.classList.remove('completata')
            }
            console.log(task)
        })
        list.appendChild(isCompletata)
        list.appendChild(nomeTask)
        list.appendChild(complessita)
        list.appendChild(date)
        date.appendChild(deleteButton)
        container.appendChild(list)
    }))
    nTask.textContent = tasks.length
}





renderizza()