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

const tasks = [
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
const isCompletata =[
     "tutti",
     "da fare",
     "completati"
  
]
let filtraPer = 'tutti';

let tasksFiltrati = [...tasks];

isCompletata.map((task=>{
    let bottone = document.createElement('button')
    bottone.textContent = task
    bottone.addEventListener('click',()=>{
        filtraPer = task
        tasksFiltrati = tasks.filter((task)=>{
            return task.isCompletata === filtraPer
            
        })
        renderizza()
        
    })
    filtro.appendChild(bottone)

}))


function renderizza() {
    if (filtraPer === 'tutti') {
        ciclaLista(tasks)
        
    }
    else if (filtraPer === 'da fare' || filtraPer === 'completati'){
        ciclaLista(tasksFiltrati)
    }


    
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
        list.appendChild(nomeTask)
        list.appendChild(complessita)
        list.appendChild(date)
        date.appendChild(deleteButton)
        container.appendChild(list)
    }))
}





renderizza()