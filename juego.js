const casillas = document.querySelectorAll(".casilla");
const opciones = document.querySelectorAll(".opcion");
const btnReiniciar = document.querySelector("#reiniciar");
const cuadroGanador = document.querySelector("#cuadroGanador");

let estadoTablero = ["", "", "", "", "", "", "", "", ""];
let jugadorActual = "X";
let juegoActivo = true;

const combinacionesGanadoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const mensajes = {
  ganador: (jugador) => `<h2>El ganador es el jugador ${jugador}</h2>`,
  empate: () => `<h2>¡Es un empate!</h2>`,
};

const validarResultado = () => {
  let rondaGanada = false;

  for (let i = 0; i < combinacionesGanadoras.length; i++) {
    const [a, b, c] = combinacionesGanadoras[i];
    const valA = estadoTablero[a];
    const valB = estadoTablero[b];
    const valC = estadoTablero[c];

    if (valA === "" || valB === "" || valC === "") {
      continue;
    }

    if (valA === valB && valB === valC) {
      rondaGanada = true;
      break;
    }
  }

  if (rondaGanada) {
    cuadroGanador.style.display = "flex";
    cuadroGanador.innerHTML = mensajes.ganador(jugadorActual);
    juegoActivo = false;
    return;
  }

  const rondaEmpate = !estadoTablero.includes("");
  if (rondaEmpate) {
    cuadroGanador.style.display = "flex";
    cuadroGanador.innerHTML = mensajes.empate();
    juegoActivo = false;
    return;
  }

  cambiarJugador();
};

const cambiarJugador = () => {
  jugadorActual = jugadorActual === "X" ? "O" : "X";
};

const manejarClickCasilla = (casilla, indice) => {
  if (estadoTablero[indice] !== "" || !juegoActivo) {
    return;
  }

  estadoTablero[indice] = jugadorActual;
  opciones[indice].innerText = jugadorActual;

  validarResultado();
};

const reiniciarJuego = () => {
  estadoTablero = ["", "", "", "", "", "", "", "", ""];
  juegoActivo = true;
  jugadorActual = "X";

  opciones.forEach((opcion) => (opcion.innerText = ""));
  cuadroGanador.style.display = "none";
  cuadroGanador.innerHTML = "";
};

casillas.forEach((casilla, indice) => {
  casilla.addEventListener("click", () => manejarClickCasilla(casilla, indice));
});

btnReiniciar.addEventListener("click", reiniciarJuego);
