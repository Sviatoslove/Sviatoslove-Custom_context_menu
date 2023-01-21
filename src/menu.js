import {Menu} from './core/menu'
import * as functionStation from './core/utils/contextMenu'


export class ContextMenu extends Menu {
 constructor(selector) {
  super(selector)
  this.modules = []
 }

 open(coordinates) {
  this.el.classList.add('open')
  this.el.innerHTML = functionStation.renderItemsHTML(this.modules)
  functionStation.getCoordinatesForMenu(coordinates, this.el)
  this.el.addEventListener('click', event => {
   event.stopImmediatePropagation()
   functionStation.getStartTrigger(event, this.el, this.modules)
  })
 }

 close() {
  this.el.classList.remove('open')
  this.el.innerHTML = ''
 }

 add(module) {
  this.modules.push(module)
 }

 greetingStart() {
  setInterval(() => {functionStation.decreaseTimerHello(this.el)}, 1000)
 } 
}