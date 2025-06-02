


//Ao Carregar a DOM
document.addEventListener("DOMContentLoaded", function () {

    
    const element = document.querySelectorAll('.digitando');

    element.forEach((element, index )=> {
        let texto = element.innerText; 
        element.innerText = "";
        element.style.visibility = "visible";

      
        texto = texto.split("\n").join("<br>");

        let i = 0; 


        function digitar() {

            
            if ( i < texto.length ) {

                if (i < texto.length) {
                    // Se o caractere que estiver no i é = "<" (inicio do <br>), verifica as proximas 4 letras se tem <br>, se for verdadeiro aplica o <br> na DOM para gerar a quebra de linha.
                    if (texto[i] === "<" && texto.substring(i, i + 4) === "<br>") {
                        element.innerHTML += "<br>"; 
                        
                        i += 4;  // Avança para pular o <br> completo
                    } else {
                        // Caso contrário, insere o caractere normal
                        element.innerHTML += texto.charAt(i);
                        i++;
                    }
                }
                setTimeout(digitar, 50);
            } else {
              
                aplicarEfeitoEsmaecer('.fadeIn-home');
            }
        } setTimeout(digitar, index * 1800 )    
    });    
});