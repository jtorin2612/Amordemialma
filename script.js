document.addEventListener('DOMContentLoaded', function() {
    const fondoLluvia = document.querySelector('.fondo-lluvia');
    const palabras = ['JyK', 'JyK', 'JyK', 'JyK', 'JyK'];  // Palabras a mostrar en la lluvia

    // Crear y agregar las palabras "JyK" al fondo
    palabras.forEach(function(palabra, index) {
        const divPalabra = document.createElement('div');
        divPalabra.classList.add('palabra');
        divPalabra.textContent = palabra;
        divPalabra.style.animationDuration = `${Math.random() * 5 + 5}s`;  // Duración aleatoria
        divPalabra.style.animationDelay = `${Math.random() * 5}s`;  // Retraso aleatorio
        fondoLluvia.appendChild(divPalabra);
    });

    const botonMostrar = document.getElementById('mostrar-carta');
    const carta = document.getElementById('carta');
    const pregunta = document.getElementById('pregunta');
    const respuestaInput = document.getElementById('respuesta');
    const verCartaBtn = document.getElementById('ver-carta');
    
    // Al hacer clic en el botón "Ver Carta", mostrar la pregunta
    botonMostrar.addEventListener('click', function() {
        pregunta.classList.add('show'); // Muestra la pregunta
    });

    // Detectar la tecla Enter en el input de respuesta
    respuestaInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            verificarRespuesta();
        }
    });

    // Responder la pregunta
    verCartaBtn.addEventListener('click', function() {
        verificarRespuesta();
    });

    function verificarRespuesta() {
        const respuesta = respuestaInput.value.trim().toLowerCase(); // Capturamos la respuesta

        if (respuesta === '21 de julio') {  // Comprobamos la respuesta
            carta.classList.add('show'); // Si es correcta, muestra la carta
            pregunta.classList.remove('show'); // Oculta la pregunta
        } else {
            alert('Respuesta incorrecta. Intenta nuevamente.'); // Si la respuesta es incorrecta
        }
    }
});
