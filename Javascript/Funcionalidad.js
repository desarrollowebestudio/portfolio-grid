// Identificación Elementos
const barraNavegacion = document.querySelector('#barra-navegacion');
const botonMenuNavegacion = document.querySelector('#boton-menu-navegacion');
const botonCerrarNavegacion = document.querySelector('#boton-cerrar-navegacion');
const navegacionLateral = document.querySelector('#navegacion-lateral');

// Funcionalidad Navegación Lateral
botonMenuNavegacion.addEventListener('click', function () {
  navegacionLateral.classList.add('visible');
});

botonCerrarNavegacion.addEventListener('click', function () {
  navegacionLateral.classList.remove('visible');
});
