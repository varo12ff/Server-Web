document.addEventListener('DOMContentLoaded', function() {
    var startButton = document.getElementById('startButton');
    var audio = document.getElementById('ost_server');
    var imagen1 = document.querySelector('.proximamente');
    var imagen2 = document.querySelector('.logo');

    startButton.addEventListener('click', function() {
        startButton.style.display = 'none'; // Oculta el botón
        audio.play().catch(function(error) {
            console.log('Error en la reproducción del audio: ', error);
        });

        // Inicia la animación de las imágenes
        imagen1.classList.add('mostrar');
        setTimeout(function() {
            imagen2.classList.add('mostrar');
        }, 19000); // 4 segundos después
    });
});