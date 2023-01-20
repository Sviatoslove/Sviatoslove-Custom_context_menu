import {Menu} from './core/menu'
import { BackgroundModule } from './modules/background.module'

export class ContextMenu extends Menu {
 constructor(selector) {
  super(selector)
  this.backgroundColor = new BackgroundModule('background', 'Поменять цвет')
 }

 open() {
  

 }

 close() {

 }

 add() {

 }

}