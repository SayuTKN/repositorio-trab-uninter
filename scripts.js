document.addEventListener('DOMContentLoaded', function() { 
    const links = document.querySelectorAll('.menu a'); // Seleciona todos os links do menu
 
    links.forEach(link => { // Para cada link do menu
        link.addEventListener('click', function(event) { // Adiciona um evento de clique
            event.preventDefault(); // Impede o comportamento padrão do link (navegação para outra página)
            const targetId = this.getAttribute('href'); // Obtém o ID da seção alvo do atributo href do link
            const targetPosition = document.querySelector(targetId).offsetTop; // Obtém a posição vertical da seção alvo
            
            window.scrollTo({  // Faz a rolagem suave até a seção alvo
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});