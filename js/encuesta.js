
window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formEncuesta');

  form.addEventListener('submit', function(e) {
    e.preventDefault();                   // evita recarga
    alert('Gracias por la encuesta');     // muestra el mensaje

    form.reset();                         // limpia campos

    // redirige a la página principal (index.html)
    window.location.href = 'index.html';
  });
});