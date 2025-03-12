/* BOTAO SWITCH THEMA ANIMAÇÃO e FUNCIONALIDADE */

const btnSwitch = document.querySelector('#btnSwitch');
const btnCircle = document.querySelector('#btnCircle');

const icons = document.querySelectorAll('.icon')


// Verifica se já existe um tema salvo no localStorage
//Tenta pegar o valor da chave 'theme' no localStorage
const savedTheme = localStorage.getItem("theme"); 

//verifica se o valor de saveTheme é igual a "light"
if (savedTheme === "light") {
    //se verdadeiro, entao adiciona as classes "lightTheme" e "move" nos elementos.
    document.documentElement.classList.add("lightTheme");
    btnSwitch.classList.add("move");
    btnCircle.classList.add("move");

    //Deixa os Icons Dark quando thema branco
    icons.forEach((icon) => {
        if (icon.src.includes('Dark')) {
            icon.src = icon.src.replace('Dark', 'White');
        } else {
            icon.src = icon.src.replace('White', 'Dark');
        }
    });
};

btnSwitch.addEventListener("click", () => {
    //Troca os themas e move o botão. 
    btnSwitch.classList.toggle("move");
    btnCircle.classList.toggle("move");
    document.documentElement.classList.toggle("lightTheme");


    //Troca as imagens dos icones
    icons.forEach((icon) => {
        if (icon.src.includes('Dark')) {
            icon.src = icon.src.replace('Dark', 'White');
        } else {
            icon.src = icon.src.replace('White', 'Dark');
        }
    });
    

    // Verifica o tema atual e salva no localStorage
    //verifica se contem o "lightTheme" na classe do elemento.
    const isLight = document.documentElement.classList.contains("lightTheme");
    //Se tiver a classe "lightTheme" no elemento, salva "light" no localStorage, senão salva "dark".
    localStorage.setItem("theme", isLight ? "light" : "dark");
});




