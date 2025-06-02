/* BOTAO SWITCH THEME ANIMAÇÃO E FUNÇÃO SALVAR THEME */

const btnSwitch = document.querySelector('#btnSwitch');
const btnCircle = document.querySelector('#btnCircle');

const icons = document.querySelectorAll('.icon')



const savedTheme = localStorage.getItem("theme"); 


if (savedTheme === "light") {
    
    document.documentElement.classList.add("lightTheme");
    btnSwitch.classList.add("move");
    btnCircle.classList.add("move");

    //Deixo os Icons Dark quando thema branco
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
    const isLight = document.documentElement.classList.contains("lightTheme");
    //Se tiver a classe "lightTheme" no elemento, salva "light" no localStorage, senão salva "dark".
    localStorage.setItem("theme", isLight ? "light" : "dark");
});

/* ------------------------------------------------------------------- */

/* BOTÃO EXPANDIR E RECOLHER */

// Função genérica para lidar com botões de expandir/recolher
function configurarBotaoExpandir(selectorBotao, selectorContainer, selectorConteudo) {
    const botoes = document.querySelectorAll(selectorBotao);

    botoes.forEach((btn) => {
        btn.addEventListener('click', () => {
            const conteudo = btn.closest(selectorContainer).querySelector(selectorConteudo);
            conteudo.classList.toggle('active');

            // Alternar imagem da seta (baixo v - ^  cima)
            if (btn.src.includes('baixo')) {
                btn.src = btn.src.replace('baixo', 'cima');
            } else {
                btn.src = btn.src.replace('cima', 'baixo');
            }
        });
    });
}

// Aplicação para seções principais
configurarBotaoExpandir(
    ".btn_arrowImage",
    ".boxSection",
    ".content"
);

// Aplicação para subseções
configurarBotaoExpandir(
    ".btn_arrowImage_subBoxSection",
    ".container_subSection",
    ".content_subSection"
);

/* ------------------------------------------------------------------- */

/* APLICANDO EFEITOS GLOBAIS  */


/* EFEITO ESMAECER*/
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



/* Observador do Scroll se o elemento esta visivel  aplicar o efeito esmaecer*/

const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    root: null, //observa a vieport
    rootMargin:'0px',
    threshold: 0.5 //Dispara quando 50%do elemento estiver visivel.
});



document.querySelectorAll('[class*="fadeIn-section"]').forEach(element => {
    const bounding = element.getBoundingClientRect();

    if (bounding.top <= window.innerHeight && bounding.bottom >= 0 ) {
        element.classList.add('visible');
    } else {
        observador.observe(element);
    }
});




/* ---------------------------------------------------------------------- */

/* Script para fazer manutenção nos links 

class="hrefCVDowload"
class="hrefLinkedin"
class="hrefGithub"
class="hrefWhatsapp"


*/



/* objeto com os links */
const links = {
    hrefLinkedin: `https://www.linkedin.com/in/pauloalmeidapinto/`,
    hrefGithub: `https://github.com/Dev-Phap`,
    hrefCVDowload: `assets/documents/CV_PHAP_att_19.02.25.pdf`,
    hrefWhatsapp: `https://wa.me/5511983994412`, 
}
 

/* função para incluir o href dos elementos com o link dele.  */

Object.entries(links).forEach(([className, url]) => {
    document.querySelectorAll(`.${className}`).forEach((elemento) => {
        elemento.href = url;
    })
});


