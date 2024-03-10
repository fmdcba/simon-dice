const sequenciaSimon = [];
const turnoUsuario = [];

document.querySelector('#iniciar').onclick = function() {
  const $colores = document.querySelectorAll('.color');

  manejarTurnoSimon($colores);
}

function manejarTurnoSimon(colores) {
  obtenerColorAleatorio(colores);
  mostrarSequenciaSimon(colores)
}

function obtenerColorAleatorio(colores) {
  const colorAleatorio = Math.floor(Math.random() * colores.length);
  return sequenciaSimon.push(colorAleatorio)
}

function mostrarSequenciaSimon(colores) {
  sequenciaSimon.forEach(function(posicion, index){
    const RETRASO_MS = (index + 1) * 1000

    setTimeout(function () {
      resaltarColor(colores[posicion])
    }, RETRASO_MS);
  })
}

function resaltarColor(cuadro){
  cuadro.style.opacity = "100%";


  setTimeout(function() {
    cuadro.style.opacity = "60%";
  }, 500);
}

function bloquearInputUsuario(){
  document.querySelectorAll('.color').forEach(function(color) {
    color.onclick = function() {
      return '';
    }
  })
}

function desbloquearInputUsuario(){
  document.querySelectorAll('.color').forEach(function(color) {
    color.onclick = function(event) {
      console.log(event.target);
    }
  })
}
