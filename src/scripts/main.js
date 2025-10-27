import '../styles/main.scss'
import { loadImage } from './modules/image-loader.js'
import { registerAnimations } from './modules/animations.js'
import { validateForm } from './modules/form-validator.js'

registerAnimations()

const heroImage = loadImage('photo1.jpg')
console.debug('Hero image prepared:', heroImage.src)

const form = document.querySelector('.callback__form')
if (form) {
  form.addEventListener('submit', (event) => {
    if (!validateForm(form)) {
      event.preventDefault()
    }
  })
}
