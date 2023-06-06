const btnSwitch=document.querySelector('.nav__toggle');


let modeDark=false;

btnSwitch.addEventListener('click',()=>{
    if(modeDark==true){
        document.querySelector('.app-head').classList.remove('dark-back');
        document.querySelector('.app-list').style.background='#fff';
        modeDark=false;
    }else{
        document.querySelector('.app-head').classList.add('dark-back');
        document.querySelector('.app-list').style.background='var(--veryDarkBlue)';
        document.querySelectorAll('.task').style.background='var(--veryDarkDesaturatedBlue)';
        modeDark=true;

    }
});