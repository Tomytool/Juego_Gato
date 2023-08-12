const casillas = document.querySelectorAll('.casilla');
const opciones = document.querySelectorAll('.opcion');
const reiniciar = document.querySelector('#reiniciar');
const cuadroGanador =document.querySelector('#cuadroGanador')
let valorGato = 'X';
let ganador = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let jugador1 = [];
let jugador2 = [];

const revision = (jugador) => {
  for (let index = 0; index < ganador.length; index++) {
    const element = ganador[index];
    if (
      opciones[element[0]].innerText == jugador &&
      opciones[element[1]].innerText == jugador &&
      opciones[element[2]].innerText == jugador
    ) {
      cuadroGanador.style.display='flex'
      cuadroGanador.innerHTML=`<h2>El ganador es el jugador ${jugador}</h2>`
      console.log(`Ganador es el jugador ${jugador}`);
    }
  }
};

reiniciar.addEventListener('click', () => {
  opciones.forEach((elemento) => {
    elemento.innerText = '';
    cuadroGanador.style.display='none'
    valorGato = 'X'
  });
});

casillas.forEach((elemento, indice) => {
  elemento.addEventListener('click', (e) => {
    opciones[indice].innerText = valorGato;
    if (valorGato == 'X') {
      revision('X');
      valorGato = 'O';
    } else {
      revision('O');
      valorGato = 'X';
    }
  });
});
