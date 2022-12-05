import './index.css'
import avatar from './assets/avatar.jpeg'
import type { Test } from './test'
import fake from './test'

const createImg = () => {
  const img = document.getElementById('img') as HTMLImageElement
  img.src = avatar
}

createImg()

const test: Test = {
  name: 'a',
  gender: 2,
}

console.log(test)
fake()
