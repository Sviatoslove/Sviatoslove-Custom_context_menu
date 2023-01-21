import './styles.css'
import { ClicksModule } from './modules/clicks.module'

const app = new ClicksModule('clicks', 'Считать клики за 3 секунды')
app.trigger()
