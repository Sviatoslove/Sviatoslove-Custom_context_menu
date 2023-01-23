import { Module } from '../core/module'
import { random } from '../utils'

export class Messege extends Module {
  constructor(type, text) {
    super(type, text)

    this.MES_URL = 'https://jsonplaceholder.typicode.com/comments'
    this.customMessege = document.createElement('div')
    this.customMessege.classList.add('messege')
  }

  async trigger() {
    const response = await fetch(this.MES_URL)
    const result = await response.json()
    let rand = random(0, result.length)
    let rValue = result[rand].body

    if (!this.customMessege.textContent) {
      this.customMessege.textContent = rValue
      document.body.append(this.customMessege)

      setTimeout(() => {
        this.customMessege.textContent = ''
        document.querySelector('.messege').remove()
      }, 3000)
    }
  }
}