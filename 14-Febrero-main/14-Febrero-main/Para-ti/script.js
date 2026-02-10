// Script para tulipanes azules
document.addEventListener('DOMContentLoaded', function() {
    const btnParaTi = document.getElementById('btn-para-ti');
    const pantallaInicial = document.getElementById('pantalla-inicial');
    const contenidoPrincipal = document.getElementById('contenido-principal');
    const audioParaTi = document.getElementById('audio-para-ti');

    // Función para iniciar la experiencia
    btnParaTi.addEventListener('click', function() {
        // Reproducir audio
        audioParaTi.play().catch(err => {
            console.log('Error al reproducir audio:', err);
        });

        // Ocultar pantalla inicial con fade out
        pantallaInicial.style.animation = 'modalFadeOut 0.8s forwards';
        
        setTimeout(() => {
            pantallaInicial.style.display = 'none';
            contenidoPrincipal.style.display = 'block';
            
            // Crear partículas
            createParticles();
            
            // Mostrar ramo después de que las flores crezcan
            setTimeout(() => {
                const ramo = document.querySelector('.ramo');
                if (ramo) {
                    ramo.classList.add('ramo--visible');
                }
            }, 5000); // 5 segundos después
        }, 800);
    });

    // Crear partículas flotantes
    function createParticles() {
        const particlesContainer = document.querySelector('.particles');
        const particleCount = 30;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Posición aleatoria en X
            particle.style.left = Math.random() * 100 + 'vw';
            
            // Duración aleatoria
            const duration = 8 + Math.random() * 10;
            particle.style.animationDuration = duration + 's';
            
            // Delay aleatorio
            particle.style.animationDelay = Math.random() * 5 + 's';
            
            particlesContainer.appendChild(particle);
        }
    }
});

// Agregar animación de fade out al CSS dinámicamente si no existe
const style = document.createElement('style');
style.textContent = `
    @keyframes modalFadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);