export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}
const MES_URL = 'https://jsonplaceholder.typicode.com/comments'

let rValue = ''

export const getAllMes = () => {
  const result = fetch(MES_URL, {
    method: 'GET'
  })
  result
    .then((response) => {
      if (!response.ok) {
        throw new Error('Ошибка запроса')
      }
      return response.json()
    })
    .then((messege) => {
      let rand = Math.floor(Math.random() * messege.length)
      rValue = messege[rand]
      rValue = rValue.body
      return rValue

    })
    .catch((error) => {
      console.log('error', error)
    })
}

export function randomMessege() {

  const customMessege = document.createElement('div')
  customMessege.className = 'messege'
  customMessege.classList.add('hidden')


  document.addEventListener('click', (event) => {
    const { target } = event
    const clickMessege = target
    if (clickMessege) {
      getAllMes()
      customMessege.textContent = rValue
      document.body.append(customMessege)
      customMessege.classList.remove('hidden')
    }

    setTimeout(() => {
      customMessege.classList.add('hidden')
    }, 5000)
  })
}

