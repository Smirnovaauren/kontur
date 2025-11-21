export const IMAGE_TYPES = {
  gallery: 'gallery',
  icons: 'icons',
  backgrounds: 'backgrounds'
}

export function buildImagePath(fileName, type = IMAGE_TYPES.gallery) {
  // Используем new URL, чтобы Vite пометил картинку как зависимость и скопировал её в dist при сборке
  return new URL(`../assets/images/${type}/${fileName}`, import.meta.url).href
}
gi