import { getCoordinates, getRandomColor } from '../../utils'

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
  if(time === 0) {
    elem.classList.remove('timer')
    clearInterval(refreshId)
    return
  }

 let current

 elem.classList.add('timer')

 getCoordinates(elem)

 current = --time

  if(time > 5) {
   if(time > 10) {
      elem.innerHTML = 'Приветствуем наших дорогих наставников!'
    }else {
      elem.innerHTML = 'Запуск хакатончика № 1'
    }
  }else {
    if(time === 0) {
      elem.innerHTML = 'Поехали!'
    } else {
      elem.style.width = 'fit-content'
      elem.innerHTML = current
    }
  }
 randomColorsAll(elem)
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