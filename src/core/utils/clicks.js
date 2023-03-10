export function runClicker(warning, button, time, clicks) {

 warning.textContent = '3'
 warning.className = 'clicker-warning'
 warning.style.color = 'black'
 warning.style.background = 'red'

 button.className = 'clicker-button'
 button.textContent = 'Закрыть'

 document.body.append(warning)

 setInterval(() => {
  if (time === 0) {
   time++
  }
  if (time === 1) {
   warning.textContent = '2'
   return time++
  }
  if (time === 2) {
   warning.textContent = '1'
   return time++
  }
  if (time === 3) {
   warning.textContent = 'Start!'
   warning.style.background = 'rgba(0, 255, 68, 0.528)'
   warning.style.color = 'black'
   clicks = 0
   return time++
  } 
 }, 1000)

 setTimeout(() => {
  if (clicks === 1) {
   warning.textContent = `${clicks} click`
  }else {
  warning.textContent = `${clicks} clicks`
  }
  warning.style.background = 'black'
  warning.style.color = 'white'
  warning.style.letterSpacing = '3px'

  // Кнопка закрытия окна
  button.className = 'clicker-button'
  button.textContent = 'Закрыть'
  warning.append(button)

  // Слушатель на кнопку для закрытия окна
  button.addEventListener('click', () => {
   warning.remove()
  })
 }, 6000)

 // Подсчет ВСЕХ кликов 
 document.addEventListener('click', () => {
  clicks++
 })
}