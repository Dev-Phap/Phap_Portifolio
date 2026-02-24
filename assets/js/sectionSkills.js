document.addEventListener('DOMContentLoaded', () => {
    const tracks = document.querySelectorAll('.slider-track');

    function checkSliderCondition() {
        const screenWidth = window.innerWidth;

        tracks.forEach((track, index) => {
            const list = track.querySelector('.images-list');
            if (!list) return;

            // Conta quantos itens existem de fato
            const items = list.querySelectorAll('.image-item');
            const totalItems = items.length;
            
            // Log para você ver no console (F12 no navegador)
            console.log(`Lista ${index}: ${totalItems} itens encontrados.`);

            let shouldAnimate = false;

            // Suas regras de quantidade
            if (screenWidth >= 1080) {
                shouldAnimate = totalItems > 6; 
            } else if (screenWidth >= 800) {
                shouldAnimate = totalItems > 4; 
            } else {
                shouldAnimate = totalItems > 3; 
            }

            if (shouldAnimate) {
                track.classList.remove('list_not_animation');
                
                // Só clona se ainda não houver um clone (para evitar loops infinitos)
                if (!track.dataset.cloned) {
                    list.innerHTML += list.innerHTML;
                    track.dataset.cloned = "true";
                }
            } else {
                // Aplica a classe que criamos no CSS acima
                track.classList.add('list_not_animation');
            }
        });
    }

    // Roda ao carregar e ao redimensionar
    checkSliderCondition();
    window.addEventListener('resize', checkSliderCondition);
});