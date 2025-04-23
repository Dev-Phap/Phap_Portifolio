const btnExpand2 = document.querySelectorAll(".btn_arrowImage_portifolio");

//para cada botão expansivo vai adicionar o evento de click
btnExpand2.forEach((btn) => {

 btn.addEventListener('click', () =>{
        //no enveto de click sera expandido o conteudo que se refere ao elemento pai do botão que foi clicado.

        //o metodo closest procura o ancestro mais proximo que tenha a classe "boxSection" 
        //Apos procurar o elemento pai com closest usamos query selector que pega o primeiro filho com a classe testeConteudo
        const conteudo = btn.closest('.container_work, .container_project').querySelector('.content_work, .content_project');
        conteudo.classList.toggle('active');
        
        
        //aqui verifica se o botão de seta tem incluso "baixo" no src da tag img, e caso verdadeiro muda de "baixo" para "cima". caso falso muda de "cima" para  "baixo"
        if (btn.src.includes('baixo')) {
            btn.src = btn.src.replace('baixo', 'cima');
        } else {
            btn.src = btn.src.replace('cima', 'baixo');
        }
 });
});