//Menu del Correo
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
//Menu mobile
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
//Menu carrito
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

//Menu del Correo
menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu(){
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

//Menu mobile
menuHamIcon.addEventListener('click', toogleMobileMenu);
function toogleMobileMenu(){
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive')
}

//Menu carrito
menuCarritoIcon.addEventListener('click', toogleCarritoAside);
function toogleCarritoAside(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.toggle('inactive')
}

/*prueba loca
const body = document.querySelector('body');
body.addEventListener('click', bodyPrueba);
function bodyPrueba(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
} */