import './styles.css'

import { Messege } from './modules/messege.module'

const getMessege = new Messege('messege', 'Высплывающее сообщение')

getMessege.toHTML()
getMessege.trigger('Друзей выбираем мы сами, но лучших оставляет время')
