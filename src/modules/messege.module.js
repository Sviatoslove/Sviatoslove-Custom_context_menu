import { Module } from '../core/module'

const MES_URL = 'https://jsonplaceholder.typicode.com/comments'

const customMessege = document.createElement('div')

document.body.append(customMessege)

export class Messege extends Module {
  constructor(type, text) {
    super(type, text)
  }

  async trigger() {
    const response = await fetch(MES_URL)
    const result = await response.json()
    let rand = Math.floor(Math.random() * result.length)
    let rValue = result[rand].body

    if (!customMessege.hasAttribute('class')) {
      customMessege.textContent = rValue
      customMessege.classList.add('messege')

      setTimeout(() => {
        customMessege.removeAttribute('class')
        customMessege.textContent = ''
      }, 3000)
    }
  }
}
