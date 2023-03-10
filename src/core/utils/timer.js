import { getCoordinates, getRandomColor } from '../../utils'

let time

export function createTimer(container) {
  const startingTime = Number(prompt('Введите время в минутах')) //в минутах
  if(startingTime === 0 || container.children.length) {
    alert('Вы не ввели число либо таймер уже запущен.')
    return false
  }

  time = startingTime * 60 //в секундах

  if (startingTime % 1 !== 0) {
    //проверка на целое число при вводе
    alert("Введенное число должно быть целым!")
    return
  }

  const timer = `
  <form class="mainFormTimer">
    <p class="textTimer">
      Таймер обратного отсчета
    </p>
    <p>
      <span id="minutesAndSeconds" class="countDownTimer"></span>
    </p>
  </form>`

  container.innerHTML = timer
  document.body.append(container)
  
  return true
}

export function countDownTimer(refreshId) {
  let appendTime = document.querySelector('#minutesAndSeconds')

  let minutes = Math.floor(time / 60)
  let seconds = time % 60
  createRandomPositionAndColor()
  const form = document.querySelector('.mainFormTimer')
 
  if (time === 0) {
    appendTime.innerHTML = 'Конец таймера'
    clearInterval(refreshId)
    setTimeout(() => {
      form.parentElement.remove()
      form.parentElement.innerHTML = ''
    }, 1000)
  } else {
    if (minutes < 10) {
      minutes = "0" + minutes
    }
    if (seconds > 59) {
      seconds = "00"
    }
    if (seconds < 10) {
      seconds = "0" + seconds
    }
    appendTime.innerHTML = `${minutes}:${seconds}`
    time--
  }
}

function createRandomPositionAndColor() {
  const mainFormTimer = document.querySelector('.mainFormTimer')

  mainFormTimer.style.left = '40%'
  mainFormTimer.style.right = '40%'

  getCoordinates(mainFormTimer)

  let getColorShadow = getRandomColor()
  let getColorBackGround = getRandomColor()
  let getColorText = getRandomColor()

  document.querySelector('#minutesAndSeconds').style.color = getColorText
  document.querySelector('.textTimer').style.color = getColorShadow
  mainFormTimer.style.background = getColorBackGround
  mainFormTimer.style.boxShadow = `0 0 2px ${getColorShadow}, 0 0 10px ${getColorShadow}`
}