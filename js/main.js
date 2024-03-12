let sequenciaSimon = []
let sequenciaUsuario = [];
let puntos = 0;

document.querySelector('#jugar').onclick = comenzarNuevaPartida;

function comenzarNuevaPartida() {
  reiniciar();
  manejarTurnoSimon();
}

function reiniciar() {
  document.querySelector('#turno').textContent = 'Hace click en "Jugar"';
  const $botonJugar = document.querySelector('button');
  $botonJugar.textContent = 'Jugar';
  $botonJugar.className = 'btn btn-primary btn-lg';

  sequenciaSimon = [];
  sequenciaUsuario = [];
  puntos = 0;
}

function manejarTurnoSimon() {
  const $colores = document.querySelectorAll('.color');

  actualizarTurno('Turno Simón');
  bloquearInputUsuario();
  actualizarSecuenciaSimon($colores);
  mostrarSequenciaSimon();
  manejarTurnoUsuario();
}

function manejarTurnoUsuario(){
  sequenciaUsuario = [];

  setTimeout(function () {
    actualizarTurno('Turno usuario');
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
  const $botonJugar = document.querySelector('button');
  $botonJugar.className = 'btn btn-danger btn-lg';
  $botonJugar.textContent = 'Reinciar';

  document.querySelector('#turno').textContent = 'Perdiste!'
}
