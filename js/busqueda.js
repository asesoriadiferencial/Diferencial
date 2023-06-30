// Obtén los elementos por su id
const iconoBusqueda = document.getElementsByClassName('icon-busqueda');
const barraBusqueda = document.getElementById('barra-busqueda');

// Agrega un evento de clic al icono de búsqueda
iconoBusqueda[0].addEventListener('click', function() {
  // Muestra la barra de búsqueda
  barraBusqueda.style.display = 'block';
});

// Agrega un evento de presionar tecla al campo de búsqueda
barraBusqueda.addEventListener('keydown', function(event) {
  // Verifica si se presionó la tecla Enter
  if (event.key === 'Enter') {
    const valorBusqueda = barraBusqueda.value;
    const urlDestino = '/buscador.html?busqueda=' + encodeURIComponent(valorBusqueda);
    window.location.href = urlDestino;
    // Redirige a otra página
    //window.location.href = "/buscador.html";
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const valorBusqueda = urlParams.get('busqueda');
  
    const otroCampo = document.getElementById('buscador');
    otroCampo.value = valorBusqueda;
  });
  
