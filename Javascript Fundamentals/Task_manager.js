let tasks = [];
let nextId = 1;



function addTask(title, priority) {

    const validPriorities = ["high", "medium", "low"];


    if (typeof title !== "string" || title.trim() === "") {
        console.log("Error: Task title is required");
        return;
    }

  
    if (!priority || !validPriorities.includes(priority.toLowerCase())) {
        console.log("Error: Priority must be high, medium, or low");
        return;
    }

    const newTask = {
        id: nextId++,
        title: title.trim(),
        completed: false,
        priority: priority.toLowerCase()
    };

    tasks.push(newTask);

    console.log("Task added:", newTask.title);
}



function viewTasks() {

    if (tasks.length === 0) {
        console.log("No tasks available");
        return;
    }

    console.log("All Tasks:");
    console.log(tasks);
}



function completeTask(id) {

    if (typeof id !== "number") {
        console.log("Error: Task id must be a number");
        return;
    }

    const task = tasks.find(task => task.id === id);

    if (!task) {
        console.log("Task not found");
        return;
    }

    if (task.completed === true) {
        console.log("Task is already completed:", task.title);
        return;
    }

    task.completed = true;

    console.log("Task completed:", task.title);
}



function deleteTask(id) {

    if (typeof id !== "number") {
        console.log("Error: Task id must be a number");
        return;
    }

    const oldLength = tasks.length;

    tasks = tasks.filter(task => task.id !== id);

    if (tasks.length < oldLength) {
        console.log("Task deleted");
    } else {
        console.log("Task not found");
    }
}


function viewPendingTasks() {

    const pendingTasks = tasks.filter(task => task.completed === false);

    if (pendingTasks.length === 0) {
        console.log("No pending tasks");
        return;
    }

    console.log("Pending Tasks:");
    console.log(pendingTasks);
}



function viewCompletedTasks() {

    const completedTasks = tasks.filter(task => task.completed === true);

    if (completedTasks.length === 0) {
        console.log("No completed tasks");
        return;
    }

    console.log("Completed Tasks:");
    console.log(completedTasks);
}





// addTask("Learn variables", "high");
// addTask("Practice loops", "medium");
// addTask("Build project", "low");

// viewTasks();

// completeTask(1);

// viewCompletedTasks();

// viewPendingTasks();

// deleteTask(2);

// viewTasks();