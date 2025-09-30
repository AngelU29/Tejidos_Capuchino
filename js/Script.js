// Abre/cierra la carta
function abrirCarta() {
  document.getElementById('carta').classList.toggle('abierta');
}

// Muestra un panel y oculta los demás
function togglePanel(id) {
  ['mision','vision','valores','foda'].forEach(pid => {
    document.getElementById(pid).classList.remove('open');
  });
  document.getElementById(id).classList.toggle('open');
}
