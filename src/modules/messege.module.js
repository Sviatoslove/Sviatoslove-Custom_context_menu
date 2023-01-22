import { Module } from '../core/module'
import { randomMessege } from '../utils'




export class Messege extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    randomMessege()
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
  }
}
