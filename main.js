let header = document.querySelector('.header');
let hamburguerMenu = document.querySelector('.hamburguer-menu');
let closeMenu = document.querySelector('.close-menu')

hamburguerMenu.addEventListener('click', function(){
    header.classList.add('menu-open');

})

closeMenu.addEventListener('click',function (){
    header.classList.remove('menu-open')
})