import {Menu} from './core/menu'
import { BackgroundModule } from './modules/background.module'
import { getCoordinatesForMenu } from './utils'

export class ContextMenu extends Menu {
 constructor(selector) {
  super(selector)
  this.background = new BackgroundModule('background', 'Поменять цвет')
 }

 open(coordinates) {
  this.el.classList.add('open')
  this.add()
  getCoordinatesForMenu(coordinates, this.el)
  this.el.addEventListener('click', event => {
   const { type } = event.target.dataset
   switch(type) {
    case 'background':
     this.background.trigger()
    break;
   }
   this.el.classList.remove('open')
  })
 }

 close() {
  this.el.classList.remove('open')
 }

 add() {
  this.el.innerHTML = ''
  this.el.innerHTML = this.background.toHTML()
 }
}