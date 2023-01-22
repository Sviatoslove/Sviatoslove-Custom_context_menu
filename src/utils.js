export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

// create function getRandomColor
export function getRandomColor() {
    let color = '#';
    // create cycle for, where six elements for create color
    for (let i = 0; i < 6; i++) {
      // add six random elements to variable color
      color += (Math.random() * 16 | 0).toString(16);
    } 
    return color
}

// create function getRandomNumber
export function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

// create function createRandomCircle
// export function createRandomCircle(body) {
//   const circle = document.createElement('div')
//   let color = getRandomColor()
//   const size = getRandomNumber(10, 500)
//   const {width, height} = body.getBoundingClientRect()
//   const x = getRandomNumber(0, width - size)
//   const y = getRandomNumber(0, height - size)
//   circle.classList.add('circle', 'shape')
//   circle.style.width = `${size}px`
//   circle.style.height = `${size}px`
//   circle.style.top = `${y}px`
//   circle.style.left = `${x}px`
//   circle.style.background = color
//   circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
//   body.append(circle)
//   setTimeout(() => {
//     body.childNodes.forEach(element => {
//       console.log(element.className)

//       element.className && element.className.includes('shape') ? element.remove() : null});
//   }, 3000)
// }

// // create function createRandomSquare
// export function createRandomSquare(body) {
//   let color = getRandomColor()
//   const square = document.createElement('div')
//   const size = getRandomNumber(10, 60)
//   const {width, height} = body.getBoundingClientRect()
//   const x = getRandomNumber(0, width - size)
//   const y = getRandomNumber(0, height - size)
//   square.classList.add('square', 'shape')
//   square.style.width = `${size}px`
//   square.style.height = `${size}px`
//   square.style.top = `${y}px`
//   square.style.left = `${x}px`
//   square.style.background = color
//   square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
//   body.append(square)
//   setTimeout(() => {
//     body.childNodes.forEach(element => {
//       console.log(element.className)

//       element.className && element.className.includes('shape') ? element.remove() : null});
//   }, 3000)
// }

export function createRandomShape(body, selector) {

  const {width, height} = body.getBoundingClientRect()
  const shape = document.createElement('div')
  shape.classList.add(`${selector}`, 'shape')
  const min = 70
  const color = getRandomColor()
  const sizeWidth = getRandomNumber(min, width/2 - min)
  const sizeHeight = getRandomNumber(min, height/2 - min)
  const sizeBorderLeft = getRandomNumber(min, height/2 - min)
  const sizeBorderRight = getRandomNumber(min, height/2 - min)
  const borderRadius = getRandomNumber(0, 50)

  const x = getRandomNumber(min, width - sizeWidth - min)
  const y = getRandomNumber(min, height - sizeHeight - min)
 
  shape.style.width = `${sizeWidth}px`
  shape.style.height = `${sizeHeight}px`
  shape.style.left = `${x}px`
  shape.style.top = `${y}px`
  shape.style.background = color
  shape.style.boxShadow = `0 0 2px ${color}, 0 0 10px 5px ${color}`

  if(selector === 'triangleUp' || selector === 'triangleDown') {
    if(selector === 'triangleUp') {
      shape.style.borderBottom = `${sizeHeight}px solid ${color}`
    }else shape.style.borderTop = `${sizeHeight}px solid ${color}`
    shape.style.borderLeft = `${sizeBorderLeft/3}px solid transparent`
    shape.style.borderRight = `${sizeBorderRight/3}px solid transparent`
    shape.style.background = 'none'
    shape.style.boxShadow = 'none'
    shape.style.left = `${x - min/3}px`
    shape.style.top = `${y}px`
    shape.style.width = `${sizeWidth/2}px`
    shape.style.height = `${sizeHeight/2}px`
  } else if (selector === 'squareRadius') {
    shape.style.borderRadius = borderRadius + 'px'
  }
  body.append(shape)
  // setTimeout(() => {
  //   body.childNodes.forEach(element => {
  //     element.className && element.className.includes('shape') ? element.remove() : null
  //   });
  // }, 10000)
// clicker
export function runClicker(warning, button, time, clicks) {

  warning.textContent = '3';
  warning.className = 'clicker-warning';

  button.className = 'clicker-button';
  button.textContent = 'Закрыть';

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
      warning.textContent = 'Start!';
      warning.style.background = 'rgba(0, 255, 68, 0.528)';
      warning.style.color = 'black';
      clicks = 0;
      return time++
    } 
  }, 1000);

    setTimeout(() => {
            if (clicks === 1) {
                warning.textContent = `${clicks} click`;}
            else {
                warning.textContent = `${clicks} clicks`;
                }
                warning.style.background = 'black';
                warning.style.color = 'white';
                warning.style.letterSpacing = '3px'

            // Кнопка закрытия окна
            button.className = 'clicker-button'
            button.textContent = 'Закрыть';
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