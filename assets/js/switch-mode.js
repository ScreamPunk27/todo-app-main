const imgSwitchMode=document.getElementById('img-mode');


imgSwitchMode.addEventListener('click',()=>{
    document.body.classList.toggle('darkmode');
    if(document.body.classList.contains('darkmode')){
        imgSwitchMode.setAttribute('src','assets/img/icon-sun.svg');
    }else{
        imgSwitchMode.setAttribute('src','assets/img/icon-moon.svg');
    }
});