const { listTasks, addTask, updateTask, deleteTask, markTaskInProgress, markTaskDone } = require('./taskDoer');

const args = process.argv;

const command = args[2];


if (command === 'add') {
    try {
        const task = args[3];
        if (!task) {
            console.error('Error: Task is required');
            process.exit(1);
        }
        addTask(task);
        console.log('Task added successfully');
    } catch (error) {
        console.error('Error:', error.message);
    }
    
}

if (command === 'update') {
    try {
        const taskId = args[3];
        const task = args[4];
        updateTask(taskId, task);
        console.log('Task updated successfully');
    } catch (error) {
        console.error('Error: Task ID and task are required');
    }

}

if(command === 'delete') {
    try {
        const taskId = args[3];
        deleteTask(taskId);
        console.log('Task deleted successfully');
    } catch (error) {
        console.error('Error: Task ID is required');
    }
}

if(command === 'mark-in-progress'){
    try {
        const taskId = args[3];
        markTaskInProgress(taskId);
        console.log('Task marked in progress successfully');
    } catch (error) {
        console.error('Error: Task ID is required');
    }

}

if(command === 'mark-done'){
    try {
        const taskId = args[3];
        markTaskDone(taskId);
        console.log('Task marked done successfully');
    } catch (error) {
        console.error('Error: Task ID is required');
    }

}

if(command === 'list'){
    try {
        const type = args[3];
        const tasks = listTasks(type);
        console.log(tasks.map(task => task.taskName));
        if(tasks.length === 0){
            console.log('No tasks found');
        }
    } catch (error) {
        console.error('Error: Type is required');
    }
}