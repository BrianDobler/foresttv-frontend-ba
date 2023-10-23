// Obtener el elemento de video
var video = document.getElementById('video-intro');

// Obtener todas las secciones
var secciones = document.querySelectorAll('.seccion');

// Inicializar la variable para rastrear la última sección visible
var seccionVisible = 0;

// Función para verificar la posición de desplazamiento y controlar el video
function verificarScroll() {
	// Obtener la posición vertical actual del scroll
	var scrollY = window.scrollY || window.pageYOffset;

	// Comprobar si el usuario ha cambiado de sección
	for (var i = 0; i < secciones.length; i++) {
		var seccion = secciones[i];
		var seccionTop = seccion.offsetTop;
		var seccionBottom = seccionTop + seccion.clientHeight;

		if (scrollY >= seccionTop && scrollY < seccionBottom) {
			// El usuario está en esta sección
			seccionVisible = i;
			break;
		}
	}

	// Controlar la reproducción del video
	if (seccionVisible === 0) {
		// El usuario está en la primera sección, reproducir el video
		video.play();
	} else {
		// El usuario está en una sección diferente, pausar el video
		video.pause();
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
video.play();
