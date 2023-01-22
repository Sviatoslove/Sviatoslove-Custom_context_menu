import { Module } from '../core/module'
import { randomMessege } from '../utils'
import { getAllMes } from '../utils'



export class Messege extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    getAllMes()
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
  }
}
