import { random } from "../../utils"
import { getRandomColor } from "./background"

export function getCoordinatesForMenu(coordinates, elem) {
 const { width, height } = document.body.getBoundingClientRect()

 if(coordinates.x > width - elem.clientWidth) elem.style.left = coordinates.x - elem.clientWidth + 'px'
 else elem.style.left = coordinates.x + 'px'

 if(coordinates.y > height - elem.clientHeight) elem.style.top = coordinates.y - elem.clientHeight + 'px'
 else elem.style.top = coordinates.y + 'px'
}

export function getStartTrigger(event, elem, arr) {
 const { type } = event.target.dataset
  getCurrentModule(type, arr).trigger()
  elem.classList.remove('open')
  elem.innerHTML = ''
}

export function renderItemsHTML(arr) {
 return arr.map(item => item.toHTML()).join('')
}

export function getCurrentModule(type, arr) {
 return arr.find(module => module.type === type)
}

let time = 16

export function decreaseTimerHello(elem, refreshId) {
 let current
 if(time === 0) {
  elem.classList.remove('timer')
  randomColorsAll(elem, time)
  clearInterval(refreshId)
  return
 }

 getCoordinatesForMenu({x: random(50, 600), y: random(200, 600)}, elem)

 elem.classList.add('timer')
 current = --time

 if(time > 5) {
   if(time > 10) {
     elem.innerHTML = 'Приветствуем наших дорогих наставников!'
     randomColorsAll(elem)
   }else {
     elem.innerHTML = 'Запуск хакатончика № 1'
     randomColorsAll(elem)
   }
 }else {
  if(time === 0) {
   elem.innerHTML = 'Поехали!'
   randomColorsAll(elem)
  } else {
   elem.style.width = 'fit-content'
   elem.innerHTML = current
   randomColorsAll(elem)
  }
 }
}

function randomColorsAll(elem, time) {
 if(time === 0) {
 elem.style.boxShadow = `none`
 } else {
  let color = getRandomColor()
  elem.style.color = getRandomColor()
  elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
  document.body.style.background = getRandomColor()
 }
}