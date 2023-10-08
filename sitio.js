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

// Agregar un evento de desplazamiento para controlar el video
window.addEventListener('scroll', verificarScroll);

// Llamar a verificarScroll al cargar la página
window.addEventListener('load', verificarScroll);

// Reproducir el video cuando se inicie la página
video.play();
