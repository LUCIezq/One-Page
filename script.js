const button  = document.getElementById('nav__button');
const body = document.body;

button.addEventListener('click',e=>{
    body.classList.toggle('nav__active');
})