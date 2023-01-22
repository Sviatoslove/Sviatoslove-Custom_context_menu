import './styles.css'

import { BackgroundMusicModul } from './modules/backgroundMusic.module'

const music = new BackgroundMusicModul('music', 'фоновая музыка')

document.addEventListener('click', () => {
  music.trigger()
})
