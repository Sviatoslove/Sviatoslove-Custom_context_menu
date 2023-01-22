export class Menu {
  constructor(selector) {
    this.el = document.querySelector(selector)

    setTimeout(() => {
      document.body.addEventListener('click', event => {
        if (event.target.offsetParent !== this.el) {
          this.close()
        }
      })
    },17000)
   
  }

  open() {
    throw new Error(`"open" method should be implemented in Menu"`)
  }

  close() {
    throw new Error(`"close" method should be implemented in Menu"`)
  }

  add() {
    throw new Error(`"add" method should be implemented in Menu"`)
  }
}