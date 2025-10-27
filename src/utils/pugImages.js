// src/utils/pugImages.js
export function initPugImages() {
    // Динамическая загрузка изображений в JavaScript
    const loadImage = async (src, widths = [300, 600, 900]) => {
        const sources = {}

        // Генерируем разные форматы
        for (const format of ['webp', 'jpg']) {
            sources[format] = widths.map(width =>
                `${src}?w=${width}&format=${format}&quality=80 ${width}w`
            ).join(', ')
        }

        return {
            sources,
            default: `${src}?w=${widths[0]}&format=jpg&quality=80`
        }
    }

    return { loadImage }
}