import './styles.css'
import { ContextMenu } from './menu.js'
import { BackgroundModule } from './modules/background.module'
import { ClicksModule } from './modules/clicks.module'
import { ShapeModule } from './modules/shape.module'
import { SoundsModule } from './modules/sounds.module'
import { TimerModule } from './modules/timer.module'
import { Messege } from './modules/messege.module'
import { BackgroundMusicModul } from './modules/backgroundMusic.module'

const app = new ContextMenu('.menu')

app.greetingStart()

app.add(new ClicksModule('clicks', 'Считать клики(за 3 секунды)'))
app.add(new ShapeModule('shape', 'Создать фигуру'))
app.add(new BackgroundModule('background', 'Поменять цвет'))
app.add(new Messege('messege', 'Вызвать сообщение'))
app.add(new TimerModule('timer', 'Таймер отсчёта'))
app.add(new SoundsModule('sounds', 'Случайный звук'))
app.add(new BackgroundMusicModul('backgroundMusic', 'Включить фоновую музыку'))

setTimeout(() => {
 document.body.addEventListener('contextmenu', event => {
  event.preventDefault()
  const { x, y } = event
  app.open({x: x , y: y})
 })
}, 17000)