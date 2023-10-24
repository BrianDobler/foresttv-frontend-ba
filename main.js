document.addEventListener('DOMContentLoaded', function () {
	var video = document.getElementById('video-intro');
	var botonMute = document.querySelector('.boton-mute');
	var botonDesmute = document.querySelector('.boton-desmute');

	// Agrega un evento click al botón de mute
	botonMute.addEventListener('click', function () {
		video.muted = !video.muted; // Cambia el estado de mute
		actualizarBotones();
	});

	// Agrega un evento click al botón de desmute
	botonDesmute.addEventListener('click', function () {
		video.muted = !video.muted; // Cambia el estado de mute
		actualizarBotones();
	});

	// Función para actualizar los botones y los íconos
	function actualizarBotones() {
		if (video.muted) {
			botonMute.style.display = 'block';
			botonDesmute.style.display = 'none';
		} else {
			botonMute.style.display = 'none';
			botonDesmute.style.display = 'block';
		}
	}

	// Detectar el evento de desplazamiento
	window.addEventListener('scroll', function () {
		const navbar = document.querySelector('.menu-headear');

		// Verificar la posición de desplazamiento
		if (window.scrollY > 100) {
			navbar.classList.add('scrolled');
		} else {
			navbar.classList.remove('scrolled');
		}
	});
	// Obtiene todos los enlaces del menú
	const enlaces = document.querySelectorAll('.menu-headear a');

	// Escucha el clic en cada enlace
	enlaces.forEach((enlace) => {
		enlace.addEventListener('click', (event) => {
			// Remueve la clase "active" de todos los enlaces
			enlaces.forEach((e) => e.classList.remove('active'));

			// Agrega la clase "active" al enlace clicado
			event.target.classList.add('active');
		});
	});
	video.play();
	actualizarBotones();
});

var searchInput = document.getElementById('searchInput');
var searchButton = document.getElementById('searchButton');

// Agregar un evento click al botón de búsqueda
searchButton.addEventListener('click', function () {
	var searchTerm = searchInput.value;
	// Realiza la acción de búsqueda aquí, por ejemplo, redirecciona a una página de resultados
	// window.location.href = '/busqueda?query=' + searchTerm;
	alert('Buscando: ' + searchTerm);
});
$(document).ready(function () {
	$('#carouselExampleIndicators').carousel();
});
// Agregar un evento de desplazamiento para controlar el video
window.addEventListener('scroll', verificarScroll);

// Llamar a verificarScroll al cargar la página
window.addEventListener('load', verificarScroll);

// Reproducir el video cuando se inicie la página
