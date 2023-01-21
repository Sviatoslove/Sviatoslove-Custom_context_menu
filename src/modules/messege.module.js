import { Module } from '../core/module'

export class Messege extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger(messegeText) {
    const customMessege = document.createElement('div')
    customMessege.className = 'messege'
    customMessege.textContent = messegeText
    customMessege.classList.add('hidden')
    document.body.append(customMessege)

    document.addEventListener('click', (event) => {
      const { target } = event
      // console.log(target)
      const clickMessege = target.dataset.type
      // console.log(clickMessege)
      if (clickMessege === this.type) {
        customMessege.classList.remove('hidden')
        setTimeout(() => {
          customMessege.classList.add('hidden')
        }, 5000)

      }
    })

  }

  toHTML() {
    const unlist = document.querySelector('ul')
    const menuItem = document.createElement('li')
    menuItem.className = 'menu-item'
    menuItem.dataset.type = this.type
    menuItem.textContent = this.text
    unlist.append(menuItem)
    // return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
  }
}