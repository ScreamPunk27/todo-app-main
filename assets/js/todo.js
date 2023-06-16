const input=document.getElementById('input-add');
const btnAdd=document.getElementById('btn-add');
const appList=document.querySelector('.list');

let numberID=0;
let numberTasks=[];
let items=0;

/*FILTER SECTION*/
const filter=document.querySelector('.filter');
const itemsLeft=document.getElementById('items-left');
const btnClear=document.getElementById('clear-completed');
const btnAll=document.getElementById('all');
const btnActive=document.getElementById('active');
const btnCompleted=document.getElementById('completed');




document.addEventListener('keypress',(e)=>{
    if(e.code=='Enter'){
       addTask();
    }
});

btnAdd.addEventListener('click',()=>{
    addTask();
});


const addTask=()=>{
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
        allTasks(numberTasks);
        updateTask(task);
        countItems();
        input.value="";
    }else{
        alert('Please enter a task in the input field.');
    }
}


const updateTask=(task)=>{
    task.addEventListener('click',(e)=>{
        if(e.srcElement.nodeName=='IMG'){
            deleteTask(e.target.parentElement.id);
        }else if(e.srcElement.nodeName=='INPUT'){
            checkTask(task);
        }
    });
}


const checkTask=(task)=>{
    task.classList.toggle('task-completed');
    if(task.classList.contains('task-completed')){
        task.style.textDecoration="line-through";
        task.style.color="var(--darkGrayishBlue)";
    }else{
        task.style.textDecoration="none";
        if(document.body.classList.contains('darkmode')){
            task.style.color="var(--lightGrayishBlueD)";
        }else{
            task.style.color="var(--veryDarkBlue)";
        }
    }
}

const deleteTask=(id)=>{
    const taskID=document.getElementById(id);
    appList.removeChild(taskID);
    items--;
    itemsLeft.textContent=items;
}

const countItems=()=>{
    items++;
    itemsLeft.textContent=items;
}

/*CLEAR COMPLETED TASKS*/

btnClear.addEventListener('click',()=>clearCompletedTask());

const clearCompletedTask=()=>{

    const completedTasks=document.querySelectorAll('.task-completed');

    for(let i=0;i<completedTasks.length;i++){
        appList.removeChild(completedTasks[i]);
        items--;
        itemsLeft.textContent=items;
    }
}


/*FILTER*/

btnAll.addEventListener('click',()=>allTasks(numberTasks));
btnActive.addEventListener('click',()=>activeTasks(numberTasks));
btnCompleted.addEventListener('click',()=>completedTasks(numberTasks));

const allTasks=(tasks)=>{
    btnAll.style.color='#2980B9';
    btnActive.style.color='var(--darkGrayishBlue)';
    btnCompleted.style.color='var(--darkGrayishBlue)';

    for(let i=0;i<tasks.length;i++){
        if(tasks[i].classList.contains('task')){
            tasks[i].style.display="flex";
        }
    }
}


const activeTasks=(tasks)=>{
    btnAll.style.color='var(--darkGrayishBlue)';
    btnActive.style.color='#2980B9';
    btnCompleted.style.color='var(--darkGrayishBlue)';

    for(let i=0;i<tasks.length;i++){
        if(!tasks[i].classList.contains('task-completed')){
            tasks[i].style.display="flex";
        }else{
            tasks[i].style.display="none";
        }
    }
}

const completedTasks=(tasks)=>{
    btnAll.style.color='var(--darkGrayishBlue)';
    btnActive.style.color='var(--darkGrayishBlue)';
    btnCompleted.style.color='#2980B9';

    for(let i=0;i<tasks.length;i++){
        if(tasks[i].classList.contains('task-completed')){
            tasks[i].style.display="flex";
        }else{
            tasks[i].style.display="none";
        }
    }

    
}

