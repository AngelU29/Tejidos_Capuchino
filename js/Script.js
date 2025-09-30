

function abrirCarta() {
  document.getElementById('carta').classList.toggle('abierta');
}

// mostrar/ocultar paneles
function togglePanel(id) {
  ['mision','vision','valores','foda'].forEach(pid => {
    document.getElementById(pid).classList.remove('open');
  });
  document.getElementById(id).classList.toggle('open');
}

// asignar evento al sello cuando el DOM esté listo
window.addEventListener('DOMContentLoaded', () => {

  //texto
  const form = document.getElementById('formSugerencias');
form.addEventListener('submit', function(e) {
  e.preventDefault();                          // evita recarga
  alert('Gracias por su sugerencia');          // muestra el mensaje
  form.reset();                                // limpia el formulario
}); 

  const sello = document.querySelector('.sello');
  if (sello) {
    sello.addEventListener('click', abrirCarta);
  }
});
