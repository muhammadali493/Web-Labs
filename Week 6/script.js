const myList = document.getElementById('list');
const taskInput = document.getElementById('task-input');
const addTaskForm = document.getElementById('addTaskForm');

function add(task){
    const item = document.createElement('li');  //Create new list item to add to list
    item.innerText = task;

    myList.appendChild(item);
    taskInput.value = '';
}
addTaskForm.addEventListener('submit', function(event){
    event.preventDefault();
    const task = taskInput.value.trim();
    if(task){
        // console.log("Task Input is: ");
        // console.log(task);
        add(task);
    }
});
