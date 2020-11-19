let header = document.querySelector('.header');
let hamburguerMenu = document.querySelector('.hamburguer-menu');
let closeMenu = document.querySelector('.close-menu');
let img = document.querySelector('img');
let hamb = document.querySelector('.hamburger-menu');
let title = document.querySelector('.title-menu');


window.addEventListener('scroll',function(){
    
    let windowPosition = window.scrollY > 10;

    header.classList.toggle('active',window.scrollY > 40);
    if (window.scrollY > 40){
        img.src="images/mariza_logo_dark.svg";
        title.style.color = "rgb(0,0,0)";
        hamb.style.filter = "invert(1)";
    }else{
    img.src="images/mariza_logo_white.svg";
    title.style.color = "rgb(255,255,255)";
    hamb.style.filter = "invert(0)";
}
})

hamburguerMenu.addEventListener('click', function(){
    header.classList.add('menu-open');

})

closeMenu.addEventListener('click',function (){
    header.classList.remove('menu-open')
})

AOS.init({
    easing:'ease',
    duration:1000,
});