

const btnSeeMore = document.querySelectorAll('.btn_arrowImage_seeMore');

btnSeeMore.forEach((btn) => {

    btn.addEventListener('click', () => {
        const currentItem = btn.closest('.content_list_trajetoria')
        const currentDescription = currentItem.querySelector('.container_description_trajetoria');
        

        const allItems = document.querySelectorAll('.content_list_trajetoria');

               

        allItems.forEach( (item) => {

            //verifico se o item é diferente do item atual se verdadeiro entra no bloco
            if ( item !== currentItem) {
                
                const otherDescription = item.querySelector('.container_description_trajetoria');

                const otherBtn = item.querySelector('.btn_arrowImage_seeMore');

                //fecha os outros Descrição abertos removendo a classe active
                otherDescription.classList.remove('active');
                
                //muda posição da seta ao fechar as outras descrição
                if (otherBtn.src.includes('cima')){
                    otherBtn.src = otherBtn.src.replace('cima', 'baixo');
                }
            }
        })


        
        //ativa o descrição clicada atual. 
        currentDescription.classList.toggle('active');
        //muda a posição da seta para fechar 
        if (btn.src.includes('baixo')) {
            btn.src = btn.src.replace('baixo', 'cima');
        } else {
            btn.src = btn.src.replace('cima', 'baixo');
        }

    })
})

