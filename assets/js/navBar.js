
/* BOTAO SWITCH THEMA ANIMAÇÃO e FUNCIONALIDADE */

const btnSwitch = document.querySelector('#btnSwitch');
const btnCircle = document.querySelector('#btnCircle');

// Verifica se já existe um tema salvo no localStorage
//Tenta pegar o valor da chave 'theme' no localStorage
const savedTheme = localStorage.getItem("theme"); 

if (savedTheme === "light") {
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

    



