let secuenciaMaquina = [];
let secuenciaUsuario = [];
let ronda = 0;
let flash;
let intervalo;
let correcto;
let compTurn;
let on = false;
let win;
let nRondas=5;

const $cuadro = document.querySelectorAll('.cuadro');
const $inicio = document.getElementById('start');
const $pantalla = document.querySelector('#pantalla');
const $zona1 = document.querySelector('#zona1');
const $zona2 = document.querySelector('#zona2');
const $zona3 = document.querySelector('#zona3');
const $zona4 = document.querySelector('#zona4');
const $ronda = document.getElementsByName('rondas');

const cantidadRondas = () => {
  
  if ($ronda[0].checked) {
    nRondas = 5;
  }
  if ($ronda[1].checked) {
    nRondas = 10;
  }
  if ($ronda[2].checked) {
    nRondas = 15;
  }
  if ($ronda[3].checked) {
    nRondas = 20;
  }
  if ($ronda[4].checked) {
    nRondas = 25;
  }
}


$inicio.addEventListener('click', (event) => {
    on = true;
    win = false; 
    play();
});

function play(){
    secuenciaMaquina = [];
    secuenciaUsuario = [];
    flash = 0;
    intervalo = 0;
    ronda = 1;
    $pantalla.innerHTML = 1;
    $inicio.textContent = '';
    correcto = true;
    for (var i = 0; i < 30; i++) {
      secuenciaMaquina.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;
  
    intervalo = setInterval(gameTurn, 800);
}

function gameTurn() {
   on = false;
    if (flash == ronda) {
      clearInterval(intervalo);
      compTurn = false;
      clearColor();
      on = true;
    }
  
    if (compTurn) {
      clearColor();
      setTimeout(() => {
        if (secuenciaMaquina[flash] == 1) one();
        if (secuenciaMaquina[flash] == 2) two();
        if (secuenciaMaquina[flash] == 3) three();
        if (secuenciaMaquina[flash] == 4) four();
        flash++;
      }, 200);
    }
  }
  
  function one() {
    $zona1.style.backgroundColor = "lightgreen";
  }
  
  function two() {
    $zona2.style.backgroundColor = "tomato";
  }
  
  function three() {
    $zona3.style.backgroundColor = "lightyellow";
  }
  
  function four() {
    $zona4.style.backgroundColor = "lightskyblue";
  }

  function clearColor() {
    $zona1.style.backgroundColor = "darkgreen";
    $zona2.style.backgroundColor = "darkred";
    $zona3.style.backgroundColor = "goldenrod";
    $zona4.style.backgroundColor = "darkblue";
  }
  function flashColor() {
    $zona1.style.backgroundColor = "lightgreen";
    $zona2.style.backgroundColor = "tomato";
    $zona3.style.backgroundColor = "lightyellow";
    $zona4.style.backgroundColor = "lightskyblue";
  }

  $zona1.addEventListener('click', (event) => {
    if (on) {
      secuenciaUsuario.push(1);
      check();
      one();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })
  
  $zona2.addEventListener('click', (event) => {
    if (on) {
      secuenciaUsuario.push(2);
      check();
      two();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })
  
  $zona3.addEventListener('click', (event) => {
    if (on) {
      secuenciaUsuario.push(3);
      check();
      three();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })
  
  $zona4.addEventListener('click', (event) => {
    if (on) {
      secuenciaUsuario.push(4);
      check();
      four();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })
  

  function check() {
    if (secuenciaUsuario[secuenciaUsuario.length - 1] !== secuenciaMaquina[secuenciaUsuario.length - 1]){
        correcto = false;
    }  
    if (secuenciaUsuario.length == nRondas && correcto) {
      winGame();
    }
  
    if (correcto == false) {
      flashColor(); 
      $pantalla.innerHTML = "NO!";
      $inicio.textContent = 'PLAY';
    }
  
    if (ronda == secuenciaUsuario.length && correcto && !win) {
      ronda++;
      secuenciaUsuario = [];
      compTurn = true;
      flash = 0;
      $pantalla.innerHTML = ronda;
      intervalo = setInterval(gameTurn, 800);
    }
  
  }
  
  function winGame() {
    flashColor();
    $pantalla.innerHTML = "WIN!";
    $inicio.textContent = 'PLAY';
    on = false;
    win = true;
  }