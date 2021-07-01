// достаём наш кораблик (точнее, сапаем его свойства с документа)
let ship = document.getElementById('ship');
// так же, мне нужно "ловить" астероиды, которые я наверное буду генерить уже в документ
let asteroid = document.getElementsByClassName('asteroid');

// короче, я решил ебануть астероиды через пачку с массивами...
// благодаря этому я в "полтора" прохода смогу сравнивать координаты
// так же - прям тут создавать другие свойства, на которые смогу ссылаться
let asteroids = {
  // id у астероида будет обозначать ссылку на его координаты в массивах
  asteroidX: [600],
  asteroidY: [100]
};
let getAsteroid = document.getElementById('spawnAsteroid');
getAsteroid.addEventListener('click', spawnAsteroid);
function spawnAsteroid() {
  let idAsteroid = 0;
  // я начал ловить тупняки
  // я застрял -_- я знаю что нужно сделать, но, не могу сосредоточиться
}
