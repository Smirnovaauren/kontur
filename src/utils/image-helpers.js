export const IMAGE_TYPES = {
  gallery: 'gallery',
  icons: 'icons',
  backgrounds: 'backgrounds'
}

export function buildImagePath(fileName, type = IMAGE_TYPES.gallery) {
// Картинки лежат в public/images
  return `/images/${type}/${fileName}`
}
gi