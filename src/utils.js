export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export function getCoordinates(elem, coordinates) {
  const { width, height } = document.body.getBoundingClientRect()
   if(!coordinates) {
    coordinates = {
      x: random(10, width - 10),
      y: random(10, height - 10)
    }
  }
 
  if(coordinates.x > width - elem.clientWidth) elem.style.left = coordinates.x - elem.clientWidth + 'px'
  else elem.style.left = coordinates.x + 'px'
 
  if(coordinates.y > height - elem.clientHeight) elem.style.top = coordinates.y - elem.clientHeight + 'px'
  else elem.style.top = coordinates.y + 'px'
}