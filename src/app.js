import './styles.css'

import { Messege } from './modules/messege.module'
import { getAllMes } from './utils'

const getMessege = new Messege('messege', 'Высплывающее сообщение')

// getMessege.trigger()
// getMessege.toHTML()

document.addEventListener('click', () => {
  getMessege.trigger()
})

