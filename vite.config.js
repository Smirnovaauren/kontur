// vite.config.js с поддержкой multiple Pug templates
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import { createHtmlPlugin } from 'vite-plugin-html'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        imagetools({
            defaultDirectives: new URLSearchParams({
                format: 'webp;jpg;avif',
                quality: '80'
            })
        }),
        createHtmlPlugin({
            minify: true,
            pages: [
                {
                    entry: 'src/scripts/main.js',
                    template: 'index.pug',
                    filename: 'index.html',
                },
                {
                    entry: 'src/scripts/main.js',
                    template: 'about.pug',
                    filename: 'about.html',
                },
                {
                    entry: 'src/scripts/main.js',
                    template: 'contact.pug',
                    filename: 'contact.html',
                }
            ]
        })
    ],

    // Для обработки Pug файлов как шаблонов
    assetsInclude: ['**/*.pug'],

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                contact: resolve(__dirname, 'contact.html')
            }
        }
    }
})
