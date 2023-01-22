import './styles.css'
import { ContextMenu } from './menu.js'
import { BackgroundModule } from './modules/background.module'
import { ClicksModule } from './modules/clicks.module'
import { ShapeModule } from './modules/shape.module'
import { SoundsModule } from './modules/sounds.module'

const app = new ContextMenu('.menu')
const app1 = new ShapeModule('shape', 'Создать фигуру')
const app2 = new BackgroundModule('background', 'Поменять цвет')

// setInterval(() => {
//  app1.trigger()
//  app2.trigger()
// }, 200)

// app.greetingStart()

app.add(new ClicksModule('clicks', 'Считать клики(за 3 секунды)'))
app.add(new ShapeModule('shape', 'Создать фигуру'))
app.add(new BackgroundModule('background', 'Поменять цвет'))
app.add(new BackgroundModule('messege', 'Вызвать сообщение'))
app.add(new BackgroundModule('timer', 'Таймер отсчёта'))
app.add(new SoundsModule('sounds', 'Случайный звук'))


// setTimeout(() => {

// },17000)

document.body.addEventListener('contextmenu', event => {
 event.preventDefault()
 const { x, y } = event
 app.open({x: x , y: y})
})
