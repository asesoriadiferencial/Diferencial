// Obtén el botón y el modal por su ID
const btnIniciarSesion = document.getElementById("btn-iniciar-sesion");
const modal = document.querySelector('.modal');
const closeModal = document.getElementById('close');

// Agrega un evento de clic al botón para abrir el modal
btnIniciarSesion.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
});

// Agrega un evento de clic al modal para cerrarlo
closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove('modal--show');
});

