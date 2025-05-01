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



/* Botao para abrir a seção e recolher */

const btnExpand = document.querySelectorAll(".btn_arrowImage");

//para cada botão expansivo vai adicionar o evento de click
btnExpand.forEach((btn) => {

 btn.addEventListener('click', () =>{
        //no enveto de click sera expandido o conteudo que se refere ao elemento pai do botão que foi clicado.

        //o metodo closest procura o ancestro mais proximo que tenha a classe "boxSection" 
        //Apos procurar o elemento pai com closest usamos query selector que pega o primeiro filho com a classe testeConteudo
        const conteudo = btn.closest('.boxSection').querySelector('.content');
        conteudo.classList.toggle('active');
        

        //aqui verifica se o botão de seta tem incluso "baixo" no src da tag img, e caso verdadeiro muda de "baixo" para "cima". caso falso muda de "cima" para  "baixo"
        if (btn.src.includes('baixo')) {
            btn.src = btn.src.replace('baixo', 'cima');
        } else {
            btn.src = btn.src.replace('cima', 'baixo');
        }
 });
});







/* Botão para abri e fechar subs seções */


const btnExpandSubSection = document.querySelectorAll(".btn_arrowImage_subBoxSection");

//para cada botão expansivo vai adicionar o evento de click
btnExpandSubSection.forEach((btn) => {

 btn.addEventListener('click', () =>{
        //no enveto de click sera expandido o conteudo que se refere ao elemento pai do botão que foi clicado.

        //o metodo closest procura o ancestro mais proximo que tenha a classe "boxSection" 
        //Apos procurar o elemento pai com closest usamos query selector que pega o primeiro filho com a classe testeConteudo
        const conteudo = btn.closest('.container_subSection').querySelector('.content_subSection');
        conteudo.classList.toggle('active');
        
        
        //aqui verifica se o botão de seta tem incluso "baixo" no src da tag img, e caso verdadeiro muda de "baixo" para "cima". caso falso muda de "cima" para  "baixo"
        if (btn.src.includes('baixo')) {
            btn.src = btn.src.replace('baixo', 'cima');
        } else {
            btn.src = btn.src.replace('cima', 'baixo');
        }
 });
});


/* Preciso refatorar a as duas funções acima ^^^ fazem a mesma coisa porem para section e outra para subsection */





/* Aplicando Efeitos Globais  */


/* Efeito esmaecer - precisa colocar  */
function aplicarEfeitoEsmaecer(seletor) {
    // Seleciona os elementos restantes e aplica o efeito de esmaecer
    const outrosElementos = document.querySelectorAll(seletor);
    
    // Aplica o efeito de esmaecer após 1 segundo da digitação finalizar
    setTimeout(() => {
        outrosElementos.forEach((elemento) => {
            elemento.classList.add('visible');
        });
    }, 1300); // Delay antes de iniciar o esmaecimento (depois da digitação)
}



/* Observador do Scroll se o elemento esta visivel  aplicar o efeito esmaecer para ele*/

const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    root: null, //observa a vieport
    rootMargin:'0px',
    threshold: 0.5 //Dispara quando 10%do elemento estiver visivel.
});



document.querySelectorAll('[class*="fadeIn-section"]').forEach(element => {
    const bounding = element.getBoundingClientRect();

    if (bounding.top <= window.innerHeight && bounding.bottom >= 0 ) {
        element.classList.add('visible');
    } else {
        observador.observe(element);
    }
});


/* Script para fazer manutenção nos links */