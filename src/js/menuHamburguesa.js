const hamburguesa = document.querySelector('.menu');
const nav = document.querySelector('#nav');
const links = document.querySelectorAll('#nav li')

hamburguesa.addEventListener('click', () => {
    nav.classList.toggle("open");
   
})


