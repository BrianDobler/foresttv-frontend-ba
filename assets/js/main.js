//---------------------------------------------------------------------
// Cargar en el DOM la funcion MostrarMenuMobile
document.addEventListener('DOMContentLoaded', function mostrarMenuMobile() {
	const navMenu = document.getElementById('navbar-menu');
	const navOpcion = document.getElementById('navbar-opc');
	const navSalir = document.getElementById('navbar-salir');
	const navLogo = document.querySelector('.navbar_logo');

	// Mostrar Menú
	if (navOpcion) {
		navOpcion.addEventListener('click', () => {
			navMenu.classList.add('show-menu');
			navLogo.style.display = 'block';
			navOpcion.style.display = 'none';
			navSalir.style.display = 'block';
		});
	}

	// Ocultar Menú
	if (navSalir) {
		navSalir.addEventListener('click', () => {
			navMenu.classList.remove('show-menu');
			navLogo.style.display = 'block';
			navSalir.style.display = 'none';
			navOpcion.style.display = 'block';
		});
	}

	//==================== Eliminar Menu Mobile ====================//
	const navLink = document.querySelectorAll('.navbar_link');

	function linkAction() {
		const navMenu = document.getElementById('navbar-menu');
		navMenu.classList.remove('show-menu');
	}
	navLink.forEach((n) => n.addEventListener('click', linkAction));
});

//=====Variables que se utilizan en las dos funciones siguientes=====//

var video = document.getElementById('video-intro');
var botonMute = document.querySelector('.boton-mute');
var botonDesmute = document.querySelector('.boton-desmute');

//---------------------------------------------------------------------
// Función para escuchar los eventos de mute y desmute e iniciar
function escucharBotonesMute() {
	// Agrega un evento click al botón de mute
	botonMute.addEventListener('click', function () {
		video.muted = !video.muted;
		actualizarBotones();
	});

	botonDesmute.addEventListener('click', function () {
		video.muted = !video.muted;
		actualizarBotones();
	});
}

//--------------------------------------------------------------------
// Función para actualizar los botones de mute y desmute
function actualizarBotones() {
	if (video.muted) {
		botonMute.style.display = 'block';
		botonDesmute.style.display = 'none';
	} else {
		botonMute.style.display = 'none';
		botonDesmute.style.display = 'block';
	}
}

//---------------------------------------------------------------------
// Función para conocer la posición del Navbar para luego cambierle el
// color al scrollear.
function posicionNavbar() {
	const navbar = document.getElementById('header');

	window.addEventListener('scroll', function () {
		// Verifica la posición del scroll
		if (window.scrollY > 0) {
			navbar.classList.add('scroll-header');
		} else {
			navbar.classList.remove('scroll-header');
		}
	});
}

//---------------------------------------------------------------------
// Función para simular logueo y luego actualizar navbar con mi nombre
function actualizarNavbar() {
	const urlParams = new URLSearchParams(window.location.search);
	const registroParam = urlParams.get('registro');
	const autenticadoParam = urlParams.get('autenticado');

	// Actualizar el título del navbar si el parámetro está presente
	if (registroParam === 'true' && autenticadoParam === 'true') {
		document.getElementById('user-navbar').innerText = 'Brian Dobler';
		document.getElementById('user-navbar').style.display = 'block';
	}
}

//---------------------------------------------------------------------
// Funcion para moverme a la seccion En Vivo desde el boton 'Ver Ahora'
function irASeccionEnVivo() {
	const seccionEnVivo = document.getElementById('envivo');
	const posicionSeccion = seccionEnVivo.offsetTop;

	window.scrollTo({
		top: posicionSeccion,
		behavior: 'smooth',
	});
}

//---------------------------------------------------------------------
// Función para agrupar todas las llamadas a funciones.
function agruparLlamadasFunciones() {
	escucharBotonesMute();
	video.play();
	actualizarBotones();
	posicionNavbar();
}

actualizarNavbar();
agruparLlamadasFunciones();

const fila = document.querySelector('.container_carousel');
const partidos = document.querySelectorAll('.card_partido_liga');

const flechaIzquierda = document.getElementById('flecha-izq');
const flechaDerecha = document.getElementById('flecha-der');

//  Evento Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.activo');
	if (indicadorActivo.nextSibling) {
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// Evento Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.activo');
	if (indicadorActivo.previousSibling) {
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// Hover ----- -----
partidos.forEach((card_partido_liga) => {
	card_partido_liga.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			partidos.forEach((card_partido_liga) => card_partido_liga.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 10);
	});
});

fila.addEventListener('mouseleave', () => {
	partidos.forEach((card_partido_liga) => card_partido_liga.classList.remove('hover'));
});

// =========== Deslizar carousel con el dedo en dispositivos mobile
const filas = document.querySelector('.container_carousel');
let isDragging = false;
let startX;

filas.addEventListener('touchstart', (e) => {
	isDragging = true;
	startX = e.touches[0].clientX;
});

filas.addEventListener('touchmove', (e) => {
	if (!isDragging) return;

	const currentX = e.touches[0].clientX;
	const diffX = startX - currentX;

	filas.scrollLeft += diffX;
	startX = currentX;
});

filas.addEventListener('touchend', () => {
	isDragging = false;
});
//=======================================================
// Agregar un evento de desplazamiento para controlar el video
window.addEventListener('scroll', verificarScroll);

// Llamar a verificarScroll al cargar la página
window.addEventListener('load', verificarScroll);
