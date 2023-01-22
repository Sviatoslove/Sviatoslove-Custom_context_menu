import './styles.css'

import { Messege } from './modules/messege.module'
import { getAllMes } from './utils'

const getMessege = new Messege('body', 'Высплывающее сообщение')

getMessege.toHTML()
getMessege.trigger()

