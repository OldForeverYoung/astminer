// Import stylesheets
import './style.css';
import './obj.js';

// кнопки будут тут
let updateX = 0;
let updateY = 0;
let startPositionShipX = 50;
let startPositionShipY = 50;
const asteroidSpeed = 0.5;

let asteroidX = 1000;
let startPositionAsteroidX = asteroidX;
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
let asteroidId = 0;
//id просто не сразу появилось - позже перенесу на место
let spawnAsteroid = document.getElementById('spawnAsteroid');
spawnAsteroid.addEventListener('click', addAsteroidInArea);
function addAsteroidInArea() {
  asteroidId++;
  let newAsteroid = document.createElement('a');
  newAsteroid.innerText = '@';
  newAsteroid.id = 'asteroid' + `${asteroidId}`;
  newAsteroid.className = 'asteroid';
  let coord = Math.random();
  let coordRandom = coord.toString().split('');
  newAsteroid.style.top =
    70 +
    coordRandom[4] * 2 +
    coordRandom[5] * 2 +
    coordRandom[6] * 10 -
    coordRandom[7] * 5 +
    'px';
  // newAsteroid.style.left = asteroidX + 'px';
  let ttlFromAsteroid = 0;
  //я решил перестраховаться и делаю TTL (Time To Live)
  const noIdeaAsteroid = setInterval(() => {
    startPositionAsteroidX = startPositionAsteroidX - asteroidSpeed;

    //есть проблема и не одна :D
    newAsteroid.style.left = startPositionAsteroidX + 'px';
    ttlFromAsteroid++;
    if (ttlFromAsteroid > 1000) {
      clearInterval(noIdeaAsteroid);
    }
  }, 50);
  document.body.append(newAsteroid);
}

let startGame = document.getElementById('startRun');
startGame.addEventListener('click', startRun);
function startRun() {
  startGame.disabled = 1;
  const id = setInterval(() => {
    startPositionShipX = startPositionShipX + updateX;
    startPositionShipY = startPositionShipY + updateY;
    ship.style.left = startPositionShipX + 'px';
    ship.style.top = startPositionShipY + 'px';
    // а как мне сделать так, что бы астероиды не стакали координаты?
  }, 50);
}
