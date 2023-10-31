 /*window.onload = function(){ 
let txtbox = document.getElementById ("type_task");
let addbtn = document.getElementById("add");
let tasksDiv = document.getElementById("tasks");
let container = document. getElementsByClassName("container");
let deleteAll = document.getElementsByClassName("delete_all");
let arrayOfTasks =[];
if(window.localStorage.getItem("tasks")){
    arrayOfTasks= JSON.parse(window.localStorage.getItem("tasks"))
}

getTaskFromLocalStorage();
addbtn.onclick= function(){
   if(txtbox.value !== ""){
    addTaskToArray(txtbox.value);
    txtbox.value="";
   }
}

function addTaskToArray(taskText){
    const task={
        id: Date.now(),
        title : taskText,
        completed : false,
    };
    arrayOfTasks.push(task);
    addTaskToPage(arrayOfTasks);
    addTaskToLocalStorage(arrayOfTasks);
}

function addTaskToPage(arrayOfTasks){
    tasksDiv.innerHTML="";
    arrayOfTasks.forEach((task) => {
        let div= document.createElement("div");
        div.className ="task";
        if(task.completed){
            div.className ="task done";
        }
        div.setAttribute("data-id",task.id);
        div.appendChild(document.createTextNode(task.title));
        let span = document.createElement("button");
        span.className = "del";
        span.appendChild(document.createTextNode("🗑"));
        span.style.marginLeft = "34px"; 
        div.appendChild(span);
        tasksDiv.appendChild(div)
    });
}

function addTaskToLocalStorage(arrayOfTasks){
    window.localStorage.setItem("tasks",JSON.stringify(arrayOfTasks));
}
function getTaskFromLocalStorage(){
    let data =window.localStorage.getItem("tasks")
    if(data){
        let tasks =JSON.parse(data);
        addTaskToPage(tasks);
    }
}

function addElementsToPageFrom(arrayOfTasks){
    // Empty Tasks Div
    tasksDiv.innerHTML="";
    //Looping on Array of Tasks
    arrayOfTasks.forEach((task) =>{
        //Create Main Div
        let div = document.createElement("div");
        div.className ="task" ;
        //Check IF Task is Done
        if(task.completed){
            div.className=" task Done";
        }
        dispatchEvent.setAttribute("data-id",task.id);
        div.appendChild(document.createTextNode(task.title));
        //Create Delete Button
        let span = document.createElement("span");
        span.className="del";
        span.appendChild(document.createTextNode(" Delete"));
        //Append Button to Main Div
        div.appendChild(span);
        //Add Task Div to Task Container
        tasksDiv.appendChild(div);
    });
}

tasksDiv.onclick=((e) => {
    if (e.target.classList.contains("del")){
        e.target.parentElement.remove();
        deleteTaskFromLocalStorage(e.target.parentElement.getAttribute("data-id"));
    }
    if (e.target.classList.contains("task")){
        e.target.classList.toggle("done");
        updateStatusInLocalStorage (e.target.getAttribute("data-id"));
    }
})

function deleteTaskFromLocalStorage(taskId){
    arrayOfTasks=arrayOfTasks.filter((task) => task.id != taskId);
    addTaskToLocalStorage(arrayOfTasks);
}
function updateStatusInLocalStorage(taskId){
    arrayOfTasks.forEach((task) => {
        if(task.id == taskId){
            task.completed == false ? task.completed = true:task.completed =false;
        }
    });
    addTaskToLocalStorage(arrayOfTasks);
}

deleteAll.onclick=function(e) {
   tasksDiv.innerHTML="";
   window.localStorage.removeItem("tasks");
}
