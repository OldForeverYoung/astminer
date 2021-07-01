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
  // id[0] тут больше для тестов передачи - пусть висят
};
let getAsteroid = document.getElementById('spawnAsteroid');
getAsteroid.addEventListener('click', spawnAsteroid);
let idAsteroid = 0;
function spawnAsteroid() {
  // я начал ловить тупняки
  // я застрял -_- я знаю что нужно сделать, но, не могу сосредоточиться
  // так, аспирина жахнул - погнали по шагу...
  // 1 - создаём "блок астероида"
  idAsteroid++;
  // сразу наверное пропишу ++ что бы траблов небыло с id
  let newAsteroid = document.createElement('a');
  newAsteroid.innerText = '@';
  newAsteroid.id = `asteroid${idAsteroid}`;

  // чё там дальше надо... наверное пнуть массив, сгенерить координаты
  let asteroidOptions = Math.random();
  // получаем псевдорандом
  let digits = asteroidOptions.toString().split('');
  console.log(digits);
  // формула для координат по оси updateY
  let astY =
    100 + digits[4] * 10 + digits[6] * digits[5] - digits[15] * digits[14];
  console.log(astY);
  asteroids.asteroidY[idAsteroid] = astY;
  asteroids.asteroidX[idAsteroid] = 1000;
  // надо передать в астероид начальные координаты
  // вообще, эти строки можно соеденить, ссылка на одно и тоже на этом шаге

  //newAsteroid.style.
  // какой блядь стайл? -_- нахуй я сюда полез =(

  newAsteroid.style.position = 'absolute';

  // короче... по моей идеи мне нужно ебашить в offsetTop и offsetWidth
  // вроде немного раздуплился... у меня есть коры - можно создавать эту хуйню
  // фигачим астероид?? (пока что чисто в документ)
  document.body.appendChild(newAsteroid);
  newAsteroid.style.left = asteroids.asteroidX[idAsteroid] + 'px';
  newAsteroid.style.top = asteroids.asteroidY[idAsteroid] + 'px';
  console.log(newAsteroid.style.left);
  console.log(newAsteroid.style.top);
  // перепутал изначально X и Y и на своём рабочем мониторе не понимал, где бля астероиды?
  // пока через консоль не нашел)))
}
