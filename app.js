

//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', checkDelete);
document.addEventListener('DOMContentLoaded', getTodos);

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

    //add todo to local storage
    saveLocalTodos(todoInput.value)

    
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
    const todo = item.parentElement;

    if(item.classList[0] == 'completed-btn'){
        todo.classList.toggle('completed');
    }
    else{
        todo.classList.add('fall');
        console.log(todo);
        removeLocalTodos(todo);
        todo.addEventListener('transitioned',() => {
            todo.remove();
        });
    }
}


function saveLocalTodos(todo){
    //Check
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
        //Check
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }


    ///recreate UI from local storage.
    todos.forEach(function(todo){
    //create that todo list(div)
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo")
    //create LI
    const newTodo = document.createElement('li')
    newTodo.classList.add('todo-item')
    newTodo.innerText = todo;
    //add task to todo Div
    todoDiv.appendChild(newTodo);
    //add that created row of task, and two buttons to the task list
    todoList.appendChild(todoDiv);
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

    });
}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos" === null)){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex, 1));
    localStorage.setItem('todos', JSON.stringify(todos));
}
