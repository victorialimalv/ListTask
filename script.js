const input = document.querySelector("#input-task");
const buttonAdd = document.querySelector("#adicionar-task");
const listComplete = document.querySelector("#list-task");


let mylist = [];


function AddTask() {
    mylist.push({
        tarefa: input.value,
        concluida: false,
    })

    /*limpa o input quando clica no botao para adicionar*/
    input.value = '';

    listTask()
 }

buttonAdd.addEventListener("click", AddTask)


function listTask() {

    let newLi = '';

    mylist.forEach((element, index) => {
        newLi = newLi + `
                    <li class="task ${element.concluida  && 'done'}" id="task">
                        <img src="img/checked.png" alt="check-task" onclick="completedList(${index})">
                         <p>${element.tarefa}</p>
                        <img src="img/trash.png" alt="trash-task" onclick="deleteTask(${index})">
                     </li>
                 `
    });

    listComplete.innerHTML = newLi;

    localStorage.setItem("list", JSON.stringify(mylist))
}


function completedList(index) {
    mylist[index].concluida = !mylist[index].concluida;

    listTask()
}

function deleteTask(index) {
    mylist.splice(index, 1);

    listTask()
}

function rechargeTask() {
    const taskLocalStorage = localStorage.getItem("list")

    if(taskLocalStorage) {
        mylist = JSON.parse(taskLocalStorage)
    }

    listTask()
}

rechargeTask()





