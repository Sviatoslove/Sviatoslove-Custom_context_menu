import { Module } from '../core/module'

const audio = document.createElement('audio')
audio.src = 'https://freemusicarchive.org/track/03_-_Glacier/download/'
// audio.display = none
document.body.append(audio)

export class BackgroundMusicModul extends Module {
  constructor(type, text) {
    super(type, text)
  }
  trigger() {
    if (audio.paused) {
      audio.volume = 0.2
      audio.play()
    } else {
      audio.pause()
    }
  }
}
