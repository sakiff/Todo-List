

//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', checkDelete)

//Functions

function addTodo(e) {
    //prevent form from submitting
    event.preventDefault();
    //create that todo list(div)
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo")
    //create LI
    const newTodo = document.createElement('li')
    newTodo.classList.add('todo-item')
    newTodo.innerText = todoInput.value

    //add task to todo Div
    todoDiv.appendChild(newTodo);

    
    //CheckMark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check-square"></i>'
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);

    //Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton);

    //add that created row of task, and two buttons to the task list
    todoList.appendChild(todoDiv);
    todoInput.value = "";
    
}

function checkDelete(e) {
    const item = e.target;
    if(item.classList[0] == 'completed-btn'){
         const todo = item.parentElement;
         todo.classList.toggle('completed');
        }
    else{
        const todo = item.parentElement;
        todo.classList.add('fall')
        todo.addEventListener('transitioned', () => {
        todo.remove();
        });
    }
}