import { async } from "regenerator-runtime"

export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}
const MES_URL = 'https://jsonplaceholder.typicode.com/comments'

export const getAllMes = async () => {
  const response = await fetch(MES_URL)
  const result = await response.json()
  let rand = Math.floor(Math.random() * result.length)
  let rValue = result[rand].body
  console.log(rValue)

  const customMessege = document.createElement('div')
  customMessege.className = 'messege'
  customMessege.textContent = rValue
  document.body.append(customMessege)


  setTimeout(() => {
    customMessege.remove()
  }, 5000)
}

  // document.addEventListener('click', (event) => {
  //   const { target } = event
  //   const clickMessege = target.dataset.type
  //   console.log(clickMessege)

  //   if (clickMessege) {
  //     customMessege.textContent = rValue
  //     document.body.append(customMessege)
  //     customMessege.classList.remove('hidden')
  //   }

  // })
