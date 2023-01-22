import { Module } from '../core/module'

const audio = new Audio(
  'https://freemusicarchive.org/track/03_-_Glacier/download/'
)
const musicSite = document.createElement('p')
musicSite.className = 'musicSite'
document.body.append(musicSite)

export class BackgroundMusicModul extends Module {
  constructor(type, text) {
    super(type, text)
  }
  trigger() {
    if (audio.paused) {
      audio.volume = 0.2
      audio.play()
      this.text = 'выключить фоновую музыку'
      musicSite.textContent = 'Music: www.freemusicarchive.org'
    } else {
      audio.pause()
      this.text = 'включить фоновую музыку'
      musicSite.textContent = ''
    }
  }
}
