import {Menu} from './core/menu'
import * as functionStation from './core/utils/contextMenu'
import { getCoordinates } from './utils'

export class ContextMenu extends Menu {
 constructor(selector) {
  super(selector)
  this.modules = []
 }

 open(coordinates) {
  this.el.classList.add('open')
  this.el.innerHTML = functionStation.renderItemsHTML(this.modules)
  getCoordinates(this.el, coordinates)
  this.el.addEventListener('click', event => {
   event.stopImmediatePropagation()
   functionStation.getStartTrigger(event, this.el, this.modules)
  })
 }

 close() {
  this.el.classList.remove('open')
 }

 add(module) {
  this.modules.push(module)
 }

 greetingStart() {
  const refreshId = setInterval(() => {functionStation.decreaseTimerHello(this.el, refreshId)}, 1000)
 } 
}