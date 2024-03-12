let sequenciaSimon = []
let sequenciaUsuario = [];
let puntos = 0;

document.querySelector('#jugar').onclick = comenzarNuevaPartida;

function comenzarNuevaPartida() {
  document.querySelector('h1').textContent = 'Simón dice';
  document.querySelector('button').textContent = 'Jugar';

  sequenciaSimon = [];
  sequenciaUsuario = [];
  puntos = 0;

  manejarTurnoSimon();
}

function manejarTurnoSimon() {
  const $colores = document.querySelectorAll('.color');

  actualizarTurno('simón');
  bloquearInputUsuario();
  actualizarSecuenciaSimon($colores);
  mostrarSequenciaSimon();
  manejarTurnoUsuario();
}

function manejarTurnoUsuario(){
  sequenciaUsuario = [];

  setTimeout(function () {
    actualizarTurno('usuario');
    desbloquearInputUsuario();
  }, sequenciaSimon.length * 1000);

}

function actualizarSecuenciaUsuario(elemento) {
  sequenciaUsuario.push(elemento);
}

function actualizarSecuenciaSimon($colores) {
  sequenciaSimon.push(obtenerColorAleatorio($colores));
}

function bloquearInputUsuario(){
  document.querySelectorAll('.color').forEach(function(color) {
    color.onclick = function() {
      return '';
    }
  })
}

function mostrarSequenciaSimon(){
  sequenciaSimon.forEach(function(elemento, indice){
    const RETRASO_MS = (indice + 1) * 1000

    setTimeout(function () {
      resaltarColor(elemento);
    }, RETRASO_MS);
  })
}

function reiniciar() {
  document.querySelector('#color').textContent = 'Hacé click en "Jugar"';
  document.querySelector('#puntos').textContent = puntos;

  sequenciaSimon = [];
  sequenciaUsuario = [];
  puntos = [];
}

function obtenerColorAleatorio(colores) {
  const numeroAleatorio = Math.floor(Math.random() * colores.length);
  return colores[numeroAleatorio]
}

function resaltarColor(cuadro){
  cuadro.style.opacity = "100%";

  setTimeout(function() {
    cuadro.style.opacity = "60%";
  }, 500);
}

function desbloquearInputUsuario() {
  document.querySelectorAll('.color').forEach(function(color) {
    color.onclick = manejarInputUsuario;
  })
}

function manejarInputUsuario(e) {
  const eleccionUsuario = e.target;

  resaltarColor(eleccionUsuario);
  actualizarSecuenciaUsuario(eleccionUsuario);
  validarEleccionUsuario(eleccionUsuario);
}

function validarEleccionUsuario(color) {

    console.log(sequenciaSimon[sequenciaUsuario.length - 1].id)

    if (color.id !== sequenciaSimon[sequenciaUsuario.length - 1].id) {
      terminarJuego();
      return '';
    }


    if (sequenciaSimon.length === sequenciaUsuario.length) {
      actualizarPuntos();
      manejarTurnoSimon();
    }
  }

function actualizarTurno(turno) {
  document.querySelector('#turno').textContent = turno
}

function actualizarPuntos() {
  puntos++;
  document.querySelector('#puntos').textContent = puntos
}

function terminarJuego() {
  document.querySelector('h1').textContent = 'Simón dice: Perdiste';
  document.querySelector('button').textContent = 'Reiniciar';
}
