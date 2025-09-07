const fs = require('fs');


const addTask = (taskName) => {
    // write in format of {id , taskName , status}
    const tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));
    const id = tasks.length + 1;
    const task = {
        id: id,
        taskName,
        status: 'pending'
    }
    tasks.push(task);
    fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
}

const updateTask = (taskId, taskName) => {
    const tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));
    tasks.forEach(task => {
        if(task.id === parseInt(taskId)){
            task.taskName = taskName;
        }
    });
    fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
}

const deleteTask = (taskId) => {
    const tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));
    const filteredTasks = tasks.filter(task => task.id !== parseInt(taskId));
    fs.writeFileSync('tasks.json', JSON.stringify(filteredTasks, null, 2));
}

const markTaskInProgress = (taskId) => {
    const tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));
    tasks.forEach(task => {
        if(task.id === parseInt(taskId)){
            task.status = 'in progress';
        }
    });
    fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
}

const markTaskDone = (taskId) => {
    const tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));
    tasks.forEach(task => {
        if(task.id === parseInt(taskId)){
            task.status = 'done';
        }
    });
    fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
}

const listTasks = (type) => {
    const tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));
    
    const filteredTasks = tasks.filter(task => task.status === type);
    return filteredTasks;
}

module.exports = {
    addTask,
    updateTask,
    deleteTask,
    markTaskInProgress,
    markTaskDone,
    listTasks
}