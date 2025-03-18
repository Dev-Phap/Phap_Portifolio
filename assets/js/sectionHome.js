


//Adiciona Evento ao no carregamento do conteudo da DOM.
document.addEventListener("DOMContentLoaded", function () {

    //Traz elemento que vao receber efeito de digitação.
    const element = document.querySelectorAll('.digitando');

    element.forEach((element, index )=> {
        let texto = element.innerText; 
        element.innerText = "";
        element.style.visibility = "visible";

        /* O conteudo quando vem pelo innerText não reconhece a quebra de linha então é preciso fazer a substituição da quebra de linha pelo elemento html <br>, O metodo split vai dividir o conteudo de "texto" para um array, esse array vai ser separado para cada quebra de linha /n, entao se tiver 3 quebra de linha esse array vai ter 3 itens.
        
        ja o metodo .join vai juntar os itens do array ja colocando o <br> entre eles para ser lido como elemento html.*/
        texto = texto.split("\n").join("<br>");

        let i = 0; // contador para o loop na função.
        //Função efeito de digitação de letra por letra. 
        function digitar() {

            //Se Contador I é menor que o tamanho do texto. faça:
            if ( i < texto.length ) {

                if (i < texto.length) {
                    // Se o caractere que estiver no i é = "<" (inicio do <br>), verifica as proximas 4 letras se tem <br> se for verdadeiro aplica o <br> na DOM para gerar a quebra de linha.
                    if (texto[i] === "<" && texto.substring(i, i + 4) === "<br>") {
                        element.innerHTML += "<br>"; // Insere a quebra de linha
                        i += 4;  // Avança para pular o <br> completo
                    } else {
                        // Caso contrário, insere o caractere normal
                        element.innerHTML += texto.charAt(i);
                        i++;
                    }
                }
                setTimeout(digitar, 50);
            } else {
                // Quando o texto for totalmente digitado, aplica o efeito de esmaecer nos outros elementos
                aplicarEfeitoEsmaecer();
            }
        } setTimeout(digitar, index * 1800 )    
    });    
});