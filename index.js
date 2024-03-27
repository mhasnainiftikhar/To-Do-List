// Array to store the todo items
let todos = [];

// Function to render the todo list
function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
               <span>${todo}</span>
               <button onclick="editTodo(${index})">Edit</button>
               <button onclick="deleteTodo(${index})">Delete</button>
           `;
        todoList.appendChild(listItem);
    });
}

// Function to add a new todo
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        todos.push(todoText);
        renderTodos();
        todoInput.value = '';
    }
}

// Function to edit a todo
function editTodo(index) {
    const newTodoText = prompt('Edit the task:', todos[index]);
    if (newTodoText !== null) {
        todos[index] = newTodoText.trim();
        renderTodos();
    }
}

// Function to delete a todo
function deleteTodo(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        todos.splice(index, 1);
        renderTodos();
    }
}

// Initial render
renderTodos();