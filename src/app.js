import './styles.css'
import { ContextMenu } from './menu.js'

const app = new ContextMenu('.menu')

document.body.addEventListener('contextmenu', event => {
 event.preventDefault()
 const { x, y } = event
 app.open({x: x , y: y})
})