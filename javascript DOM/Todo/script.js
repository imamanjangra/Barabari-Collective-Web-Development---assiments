const addBtn = document.querySelector(".btn");

const input = document.querySelector(".text");

const taskList = document.querySelector(".task-list");

const filterButtons = document.querySelectorAll(".filter-btn");



let tasks = [];

let currentFilter = "all";



loadTasks();



function addTask(){

    const text = input.value.trim();


    if(text === ""){

        alert("Please enter task");

        return;

    }



    const newTask = {

        id:Date.now(),

        text:text,

        completed:false

    };


    tasks.push(newTask);


    saveTasks();


    input.value="";


    showTasks();

}





addBtn.addEventListener(
    "click",
    addTask
);



input.addEventListener(
"keydown",
(e)=>{

    if(e.key==="Enter"){

        addTask();

    }

});








function showTasks(){


    taskList.innerHTML="";



    let filteredTasks;



    if(currentFilter==="active"){

        filteredTasks = tasks.filter(
            task=>!task.completed
        );

    }


    else if(currentFilter==="completed"){

        filteredTasks = tasks.filter(
            task=>task.completed
        );

    }


    else{

        filteredTasks = tasks;

    }






    filteredTasks.forEach(task=>{


        const li=document.createElement("li");

        li.className="task-item";



        const left=document.createElement("div");

        left.className="task-left";



        const checkbox=document.createElement("input");

        checkbox.type="checkbox";

        checkbox.checked=task.completed;



        checkbox.addEventListener(
        "change",
        ()=>{


            task.completed = checkbox.checked;


            saveTasks();


            showTasks();

        });






        const span=document.createElement("span");


        span.textContent=task.text;



        if(task.completed){

            span.classList.add("completed");

        }





        const deleteBtn=document.createElement("button");


        deleteBtn.textContent="Delete";


        deleteBtn.className="delete-btn";



        deleteBtn.addEventListener(
        "click",
        ()=>{


            tasks = tasks.filter(
                item=>item.id!==task.id
            );


            saveTasks();


            showTasks();

        });





        left.appendChild(checkbox);

        left.appendChild(span);



        li.appendChild(left);

        li.appendChild(deleteBtn);



        taskList.appendChild(li);



    });


}






filterButtons.forEach(button=>{


    button.addEventListener(
    "click",
    ()=>{


        filterButtons.forEach(btn=>{

            btn.classList.remove("active");

        });



        button.classList.add("active");



        currentFilter = button.dataset.filter;


        showTasks();


    });


});







function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}





function loadTasks(){

    const data = localStorage.getItem("tasks");


    if(data){

        tasks = JSON.parse(data);

    }


    showTasks();

}