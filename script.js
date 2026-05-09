const  inputTask = document.getElementById("input-task")
const taskList = document.getElementById("task-list")
const btn = document.querySelector(".btn")

// add new task to the list //
function addTask() {
    let taskvalue = inputTask.value;
// check if there is a no value alert message you must add one //
    if(taskvalue ===""){
        alert("you MUST add a value"); 
    }else {
// check if there is a value then creat list item and add that list item to ul //

let li = document.createElement("li");
let span = document.createElement("span");

li.innerHTML = taskvalue;
taskList.appendChild(li);

span.innerHTML = "&times;" ;
li.appendChild(span);
    }
// clear input after adding a new task //
inputTask.value = "";
setTask();
}
// adding a task when click to add button //
btn.addEventListener("click" , addTask);

taskList.addEventListener("click", function (e) {
// onClick to circle let task to be checked/unchecked//
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        setTask();

    }// onClick to x icon remove a task// 
     else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        setTask();

    }
    
});

// add functionality when click Enter it`ll add a new task//
inputTask.addEventListener("keydown", function(e) {
    if(e.key === "Enter"){
        addTask();
    }
})

//save tasks in local storage //
function setTask() {
    localStorage.setItem("Lists", taskList.innerHTML);
}
// load the saved tasks from local storage //
function loadTasks(){
    taskList.innerHTML = localStorage.getItem("Lists");

}

loadTasks();