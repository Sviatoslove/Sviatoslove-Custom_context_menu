import { Module } from '../core/module'

export class BackgroundMusicModul extends Module {
  constructor(type, text) {
    super(type, text)

    this.audio = new Audio(
      'https://freemusicarchive.org/track/03_-_Glacier/download/'
    )
    this.musicSite = document.createElement('p')
    this.musicSite.className = 'musicSite'
  }

  trigger() {
    document.body.append(this.musicSite)
    if (this.audio.paused) {
      this.audio.volume = 0.2
      this.audio.play()
      this.text = 'Выключить фоновую музыку'
      this.musicSite.textContent = 'Music: www.freemusicarchive.org'
    } else {
      this.audio.pause()
      this.text = 'Включить фоновую музыку'
      this.musicSite.textContent = ''
      document.body.querySelector('.musicSite').remove()
    }
  }
}