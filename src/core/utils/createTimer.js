import { createRandomPosition } from "./randomPosition";

export function createTimer() {
  const timer = `<form class="mainFormTimer">
  <p class="textTimer">
    Таймер обратного отсчета
  </p>
  <p>
    <span id="minutesAndSeconds" class="countDownTimer"></span>
  </p>
</form>`;
  document.body.innerHTML = timer;

  const startingTime = Number(prompt("Введите время в минутах")); //в минутах
  if (startingTime % 1 !== 0) {
    //проверка на целое число при вводе
    alert("Введенное число должно быть целым!");
    time = 0;
  }
  let time = startingTime * 60; //в секундах
  let appendTime = document.querySelector("#minutesAndSeconds");

  function countDownTimer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    createRandomPosition();
    if (time === -1) {
      document.querySelector("form").innerHTML = "";
      return;
    }
    if (time === 0) {
      appendTime.innerHTML = "Конец таймера";
      time--;
    } else {
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds > 59) {
        seconds = "00";
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      appendTime.innerHTML = `${minutes}:${seconds}`;
      time--;
    }
  }
  countDownTimer();
  setInterval(countDownTimer, 1000);
}
