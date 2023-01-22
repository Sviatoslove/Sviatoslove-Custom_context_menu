import './styles.css'
import { ContextMenu } from './menu.js'
import { BackgroundModule } from './modules/background.module'
import { ClicksModule } from './modules/clicks.module'
import { ShapeModule } from './modules/shape.module'

const app = new ContextMenu('.menu')

// app.greetingStart()

app.add(new ClicksModule('clicks', 'Считать клики(за 3 секунды)'))
app.add(new ShapeModule('shape', 'Создать фигуру'))
app.add(new BackgroundModule('background', 'Поменять цвет'))
app.add(new BackgroundModule('messege', 'Вызвать сообщение'))
app.add(new BackgroundModule('timer', 'Таймер отсчёта'))


document.body.addEventListener('contextmenu', event => {
 event.preventDefault()
 const { x, y } = event
 app.open({x: x , y: y})
})
import { SoundsModule } from './modules/sounds.module'

const randomSounds = new SoundsModule('sounds', 'случайный звук')

// document.addEventListener('click', () => {
//   randomSounds.trigger()
// })
// Проверка работы souns.module
