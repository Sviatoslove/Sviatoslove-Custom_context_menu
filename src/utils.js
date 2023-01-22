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
export function createRandomCircle() {
  const circle = document.createElement('div')
  const size = getRandomNumber(10, 60)
  const {width, height} = body.getBoundingClientRect()
  const x = getRandomNumber(0, width - size)
  const y = getRandomNumber(0, height - size)
  circle.classList.add('circle')
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  circle.style.background = getRandomColor()
  body.append(circle)
}

// create function createRandomSquare
export function createRandomSquare() {
  const square = document.createElement('div')
  const size = getRandomNumber(10, 60)
  const {width, height} = body.getBoundingClientRect()
  const x = getRandomNumber(0, width - size)
  const y = getRandomNumber(0, height - size)
  square.classList.add('square')
  square.style.width = `${size}px`
  square.style.height = `${size}px`
  square.style.top = `${y}px`
  square.style.left = `${x}px`
  square.style.background = getRandomColor()
  body.append(square)
}
