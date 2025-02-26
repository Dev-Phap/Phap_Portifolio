
/* BOTAO SWITCH THEMA ANIMAÇÃO e FUNCIONALIDADE */

const btnSwitch = document.querySelector('#btnSwitch');
const btnCircle = document.querySelector('#btnCircle');

// Verifica se já existe um tema salvo no localStorage
//Tenta pegar o valor da chave 'theme' no localStorage
const savedTheme = localStorage.getItem("theme"); 

//verifica se o valor de saveTheme é igual a "light"
if (savedTheme === "light") {
    //se verdadeiro, entao adiciona as classes "lightTheme" e "move" nos elementos.
    document.documentElement.classList.add("lightTheme");
    btnSwitch.classList.add("move");
    btnCircle.classList.add("move");
}

btnSwitch.addEventListener("click", () => {
    btnSwitch.classList.toggle("move");
    btnCircle.classList.toggle("move");
    document.documentElement.classList.toggle("lightTheme");

    // Verifica o tema atual e salva no localStorage
    //verifica se contem o "lightTheme" na classe do elemento.
    const isLight = document.documentElement.classList.contains("lightTheme");
    //Se tiver a classe "lightTheme" no elemento, salva "light" no localStorage, senão salva "dark".
    localStorage.setItem("theme", isLight ? "light" : "dark");
})

    



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