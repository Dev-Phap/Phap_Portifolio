


    



/* MENU HAMBURGUER - ANIMAÇÃO E FUNCIONAMENTO. */

const menuMobile = document.querySelector('.menu_mobile');
const menuIcon = document.querySelector('.menu_mobile_icon');


menuIcon.addEventListener('click', () => {
    menuMobile.classList.toggle('active');
});


/* EVENTO DE CLICK FORA FECHAR O MENU */

const menuOverlay = document.querySelector('.menu_overlay');

menuOverlay.addEventListener('click', () => {
    menuMobile.classList.toggle('active');
});

const btnCloseMenu = document.querySelector('.btn_close_menu')

btnCloseMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('active');

});