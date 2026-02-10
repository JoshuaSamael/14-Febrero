// Script para tulipanes azules
document.addEventListener('DOMContentLoaded', function() {
    const btnParaTi = document.getElementById('btn-para-ti');
    const pantallaInicial = document.getElementById('pantalla-inicial');
    const contenidoPrincipal = document.getElementById('contenido-principal');
    const audioParaTi = document.getElementById('audio-para-ti');

    const frases = [
        "Conocerte fue como una canción que se quedó conmigo.",
        "No fuimos nada, pero lo poco que fuimos alcanzó para pintarme por dentro.",
        "No duró, pero mientras duró, fue de las cosas más reales que he sentido.",
        "Te guardo en ese cajón donde uno pone las cosas bonitas que no supo sostener.",
        "Tienes algo que no sé nombrar, pero que se nota desde lejos.",
        "Fuiste el 'qué hubiera pasado' más bonito que me ha quedado pendiente.",
        "Esto es solo un poco de lo mucho que me importaste. Cuídate, y que la vida te trate bonito."
    ];

    let fraseActual = 0;

    function ajustarTamanoFuente(elemento, texto) {
    const longitud = texto.length;
    
    if (longitud < 50) {
        elemento.style.fontSize = 'clamp(1.4rem, 4vw, 2.2rem)';
    } else if (longitud < 80) {
        elemento.style.fontSize = 'clamp(1.1rem, 3.2vw, 1.8rem)';
    } else {
        elemento.style.fontSize = 'clamp(0.95rem, 2.8vw, 1.5rem)';
    }
}

// Función para cambiar frases con fade
function rotarFrases() {
    const specialText = document.querySelector('.special-text');
    if (!specialText) return;

    specialText.style.transition = 'opacity 0.8s ease';
    specialText.style.opacity = '0';

    setTimeout(() => {
        fraseActual = (fraseActual + 1) % frases.length;
        const nuevaFrase = `"${frases[fraseActual]}"`;
        specialText.textContent = nuevaFrase;
        ajustarTamanoFuente(specialText, nuevaFrase);
        specialText.style.opacity = '1';
    }, 800);
}

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

            const specialText = document.querySelector('.special-text');
            if (specialText) {
                specialText.textContent = `"${frases[0]}"`;
            }
            
            // Crear partículas
            createParticles();

            setInterval(rotarFrases, 5000);
            
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

// Poner la primera frase del array
const specialText = document.querySelector('.special-text');
if (specialText) {
    const primeraFrase = `"${frases[0]}"`;
    specialText.textContent = primeraFrase;
    ajustarTamanoFuente(specialText, primeraFrase);
}

// Agregar animación de fade out al CSS dinámicamente si no existe
const style = document.createElement('style');
style.textContent = `
    @keyframes modalFadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);