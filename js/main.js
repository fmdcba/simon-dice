const sequenciaSimon = [];
let sequenciaUsuario = [];

document.querySelector('#iniciar').onclick = function() {
  manejarTurnoSimon();
}

function manejarTurnoSimon() {
  const $colores = document.querySelectorAll('.color');
  bloquearInputUsuario();
  obtenerColorAleatorio($colores);
  mostrarSequenciaSimon($colores);
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
  let contador = 0;

  document.querySelectorAll('.color').forEach(function(color) {
    color.onclick = function(event) {
      contador++;
      const eleccionUsuario = event.target
      sequenciaUsuario.push(eleccionUsuario)
      resaltarColor(eleccionUsuario);
      chequearEleccionUsuario(contador);
      if(contador === sequenciaSimon.length) {
        manejarTurnoSimon()
      }
    }
  })
}

function manejarTurnoUsuario(){
  sequenciaUsuario = [];
  setTimeout(function() {
    desbloquearInputUsuario();
  }, sequenciaSimon.length * 1000);
}

function chequearEleccionUsuario(contador){

  while (contador < sequenciaSimon.length) {
    sequenciaUsuario.forEach(function(elemento, indice) {
      if (elemento !== sequenciaSimon[indice]) {
        alert('perdiste');
        contador = sequenciaSimon.length;
      } else {
        contador ++;
    }
  })
  }
}
