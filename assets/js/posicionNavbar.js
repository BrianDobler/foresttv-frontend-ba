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
