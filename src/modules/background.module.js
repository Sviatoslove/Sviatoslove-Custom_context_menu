import {Module} from '../core/module'
import * as functionStation from '../utils'

export class BackgroundModule extends Module {
 constructor(type, text) {
  super(type, text)
  this.container = document.querySelector('body')
 }

 trigger() {
  this.container.style.backgroundColor = functionStation.getRandomColor()
 }
}