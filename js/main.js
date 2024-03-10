const sequenciaSimon = [];
let sequenciaUsuario = [];

document.querySelector('#iniciar').onclick = function() {
  const $colores = document.querySelectorAll('.color');

  manejarTurnoSimon($colores);
}

function manejarTurnoSimon(colores) {
  bloquearInputUsuario();
  obtenerColorAleatorio(colores);
  mostrarSequenciaSimon(colores);
  manejarTurnoUsuario();
}

function obtenerColorAleatorio(colores) {
  const colorAleatorio = Math.floor(Math.random() * colores.length);
  return sequenciaSimon.push(colores[colorAleatorio])
}

function mostrarSequenciaSimon() {
  sequenciaSimon.forEach(function(elemento, indice){
    const RETRASO_MS = (indice + 1) * 1000

    setTimeout(function () {
      resaltarColor(elemento)
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
      const eleccionUsuario = event.target
      sequenciaUsuario.push(eleccionUsuario)
      resaltarColor(eleccionUsuario);
      chequearEleccionUsuario(eleccionUsuario);
      console.log(sequenciaUsuario)
    }
  })
}

function manejarTurnoUsuario(){
  sequenciaUsuario = [];
  setTimeout(function() {
    desbloquearInputUsuario();
  }, sequenciaSimon.length * 1000);
}

function chequearEleccionUsuario(){
  sequenciaUsuario.forEach(function(elemento, indice) {
    if (elemento !== sequenciaSimon[indice]) {
      alert('perdiste')
    }
  })
}
