import { random } from "../../utils"
import { getRandomColor } from "./background"

export function createRandomShape(body, selector) {

 const {width, height} = body.getBoundingClientRect()
 const shape = document.createElement('div')
 shape.classList.add(`${selector}`, 'shape')
 const min = 100
 const color = getRandomColor()
 const sizeWidth = random(min, width/2 - min)
 const sizeHeight = random(min, height/2 - min)
 const sizeBorderLeft = random(min, height/2 - min)
 const sizeBorderRight = random(min, height/2 - min)
 const borderRadius = random(0, 50)

 const x = random(min, width - sizeWidth - min)
 const y = random(min, height - sizeHeight - min)

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
 setTimeout(() => {
  body.childNodes.forEach(element => {
   element.className && element.className.includes('shape') ? element.remove() : null
  })
 }, 6000)
}