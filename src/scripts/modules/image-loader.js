import { buildImagePath } from '../../utils/image-helpers.js'

export function loadImage(fileName, type) {
  const image = new Image()
  image.src = buildImagePath(fileName, type)
  return image
}
