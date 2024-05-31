function loadTasks() {
    fetch("http://localhost:3000/task")
        .then(response => response.json())
        .then(data => {
            const taskList = document.getElementById('TaskList');
            taskList.innerHTML = '';
            data.forEach(tasks => {
                const li = document.createElement('li');
                li.textContent = tasks.tarea;
                taskList.appendChild(li);
            });
        });
}

function addTask(event) {
    event.preventDefault();
    
    const taskInput = document.getElementById('TaskInput');
    const newTask = {
        tarea: taskInput.value
    };
    
    fetch("http://localhost:3000/task", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    })
    .then(response => response.json())
    .then(() => {
        taskInput.value = '';
        loadTasks();
    });
}
        // Configura los eventos
        document.getElementById('TaskForm').addEventListener('submit', addTask);

        // Carga las tareas al cargar la página
        window.onload = loadTasks;