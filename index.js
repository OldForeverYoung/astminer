// Import stylesheets
import './style.css';
import './obj.js';

// кнопки будут тут
let updateX = 0;
let updateY = 0;
let startPositionShipX = 50;
let startPositionShipY = 50;
const asteroidSpeed = 0.5;

//я начал путаться немного, вероятно тут лишняя переменная
let upRun = document.getElementById('upRun');
upRun.addEventListener('click', () => {
  updateY--;
});
let downRun = document.getElementById('downRun');
downRun.addEventListener('click', () => {
  updateY++;
});
let leftRun = document.getElementById('leftRun');
leftRun.addEventListener('click', () => {
  updateX--;
});
let rightRun = document.getElementById('rightRun');
rightRun.addEventListener('click', () => {
  updateX++;
});
let stopRun = document.getElementById('stopShip');
stopRun.addEventListener('click', () => {
  updateX = 0;
  updateY = 0;
});
//ебашим в "кашу"
//спилино с примера -_- сорян
window.addEventListener('keydown', function(e) {
  KeyDown(e);
});
function KeyDown(e) {
  switch (e.keyCode) {
    case 37: //Влево
      updateX--;
      break;
    case 39: //Вправо
      updateX++;
      break;
    case 38: //Вверх
      updateY--;
      break;
    case 40: //Вниз
      updateY++;
      break;
  }
}
//перестаём ебашить
//ну, сорян, что оно здесь

let startGame = document.getElementById('startRun');
startGame.addEventListener('click', startRun);
function startRun() {
  startGame.disabled = 1;
  const id = setInterval(() => {
    startPositionShipX = startPositionShipX + updateX;
    startPositionShipY = startPositionShipY + updateY;
    ship.style.left = startPositionShipX + 'px';
    ship.style.top = startPositionShipY + 'px';
  }, 1000 / 30);
}
