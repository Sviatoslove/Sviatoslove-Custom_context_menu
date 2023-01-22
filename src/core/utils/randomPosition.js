export function createRandomPosition() {
  const mainFormTimer = document.querySelector(".mainFormTimer");

  const size = getRandomNumber(10, 140);
  const { width, heigth } = document.body.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, heigth - size);
  /*
    //Добавить в итоговом проекте

    let getColorShadow = getRandomColor();
    let getColorBackGround = getRandomColor();
    let getColorText = getRandomColor();
  
    mainFormTimer.style.color = getColorText;
    mainFormTimer.style.background = getColorText;
    mainFormTimer.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    */
  mainFormTimer.style.top = `${y}px`;
  mainFormTimer.style.left = `${x}px`;
  mainFormTimer.style.bottom = `${y}px`;
  mainFormTimer.style.rigth = `${x}px`;

  function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
}
