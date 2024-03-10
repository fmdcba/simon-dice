const turnoSimon = [];
const turnoUsuario = [];

document.querySelector('#iniciar').onclick = function() {
  const $colores = document.querySelectorAll('.color');

  /* reiniciar(); */
  bloquearInputUsuario();
  manejarTurnoSimon($colores);
}

function manejarTurnoSimon(colores) {
  actualizarSecuenciaSimon(colores);
  resaltarColor();
  manejarTurnoUsuario();
}

function manejarTurnoUsuario() {
  desbloquearInputUsuario();
  actualizarSecuenciaUsuario()
  const esValido = chequearJugada();

  if(esValido) {
    manejarTurnoSimon()
  } else {
    mostrarMensaje
  }

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




/* function manejarTurnoSimon(){
  const $colores = document.querySelectorAll('.color');
  turnoSimon.push(obtenerNumeroAleatorio($colores))

  turnoSimon.forEach(turno)
}

function pintarCuadro(cuadro){
  cuadro.style.opacity = "100%";

  setTimeout(function() {
  cuadro.style.opacity = "60%";
  }, 1000);
}

function obtenerNumeroAleatorio(cuadros) {
  return Math.floor(Math.random() * cuadros.length)
}

function obtenerColorAleatorio(colores) {
  const numeroAleatorio = obtenerNumeroAleatorio(colores)
  return pintarCuadro(colores[numeroAleatorio]);
}
 */
