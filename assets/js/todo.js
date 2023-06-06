const input=document.getElementById('input-add');
const btnAdd=document.getElementById('btn-add');
const appList=document.querySelector('.list');

let numberID=0;


/*FILTER SECTION*/
const filter=document.querySelector('.filter');
const itemsLeft=document.getElementById('items-left');
const btnClear=document.getElementById('clear-completed');
const btnAll=document.getElementById('all');
const btnActive=document.getElementById('active');
const btnCompleted=document.getElementById('completed');


let numberTasks=[];




btnAdd.addEventListener('click',()=>{
    if(input.value!=''){
        numberID++;

        const text=input.value;
        const task=document.createElement('div');

        task.innerHTML=`
            
            <div class="task__left">
                <input type="checkbox" class="check"/>
                <p>${text}</p>
            </div>
            <img src="assets/img/icon-cross.svg" />
            
        `;
        task.setAttribute('id',numberID);
        task.classList.add('task');
        numberTasks.push(task);

        appList.appendChild(task);

        input.value="";

        updateTask(task);
        showItems();
        switchFilter();
    }else{
        alert('Please enter a task in the input field.');
    }
});


const updateTask=(task)=>{
    task.addEventListener('click',(e)=>{
        if(e.srcElement.nodeName=="IMG"){
            deleteTask(e.srcElement.parentNode.id);
        }else if(e.srcElement.nodeName=="INPUT" && e.srcElement.checked==true){
            markTask(task);
        }else if(e.srcElement.nodeName=="INPUT" && e.srcElement.checked==false){
            noMarkTask(task);
        }
    });
}


const markTask=(t)=>{
    t.style.textDecoration="line-through";
    t.classList.add('task-completed');
    
}

const noMarkTask=(t)=>{
    t.style.textDecoration="none";
    t.classList.remove('task-completed');
}

const deleteTask=(id)=>{
    const taskToDelete=document.getElementById(id);
    appList.removeChild(taskToDelete);
    numberTasks.pop();
    showItems();
    switchFilter();
}




/*FILTER*/


const switchFilter=()=>{
    if(numberTasks.length>0){
        filter.style.display="flex";
    }else{
        filter.style.display="none";
    }
}

const showItems=()=>{
    itemsLeft.textContent=`${numberTasks.length}`;
}


btnClear.addEventListener('click',()=>{
    const tasksCompleted=document.querySelectorAll('.task-completed');
    
    for(let i=0;i<tasksCompleted.length;i++){
        appList.removeChild(tasksCompleted[i]);
        numberTasks.pop();
    }
    showItems();
    switchFilter();
});


btnAll.addEventListener('click',()=>{
    showAll(numberTasks);
});

btnActive.addEventListener('click',()=>{
    showActive(numberTasks);
});

btnCompleted.addEventListener('click',()=>{
  showCompleted(numberTasks);
});



const showAll=(tasks)=>{
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].classList.contains('task')){
            tasks[i].style.display="flex";
        }
    }
}

const showActive=(tasks)=>{

    for(let i=0; i<tasks.length;i++){
        if(tasks[i].classList.contains('task-completed')){
            tasks[i].style.display="none";
        }else{
            tasks[i].style.display="flex";
        }
    }
}

const showCompleted=(tasks)=>{
   
    for(let i=0; i<tasks.length;i++){
        if(tasks[i].classList.contains('task-completed')){
            tasks[i].style.display="flex";
        }else{
            tasks[i].style.display="none";
        }
    }
}

