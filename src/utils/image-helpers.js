export const IMAGE_TYPES = {
  gallery: 'gallery',
  icons: 'icons',
  backgrounds: 'backgrounds'
}

export function buildImagePath(fileName, type = IMAGE_TYPES.gallery) {
  return `/src/assets/images/${type}/${fileName}`
}
