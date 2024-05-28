//tareas de localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Función para las tareas en el DOM
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.onclick = () => {
            deleteTask(index);
        };
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

//Agregar una tarea
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task !== '') {
        tasks.push(task);
        taskInput.value = '';
        updateLocalStorage();
        renderTasks();
    }
}

//Eliminar una tarea
function deleteTask(index) {
    tasks = tasks.filter((task, i) => i !== index);
    updateLocalStorage();
    renderTasks();
}

//Actualizar el localStorage
function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//click para agregar una tarea
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Actualiza las tareas al cargar la página
renderTasks();
