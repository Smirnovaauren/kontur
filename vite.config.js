// vite.config.js
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import pugPlugin from 'vite-plugin-pug'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        imagetools({
            defaultDirectives: new URLSearchParams({
                format: 'webp;jpg',
                quality: '80'
            })
        }),
        pugPlugin({
            pretty: process.env.NODE_ENV !== 'production'
        })
    ],

    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/styles/variables.scss";`
            }
        }
    },

    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@images': resolve(__dirname, 'src/assets/images'),
            '@styles': resolve(__dirname, 'src/styles'),
            '@pug': resolve(__dirname, 'src/pug')
        }
    },

    // Уберите или закомментируйте root и publicDir, если используете index.html в корне
    // root: resolve(__dirname, 'src'),
    // publicDir: resolve(__dirname, 'public'),

    build: {
        outDir: resolve(__dirname, 'dist'),
        emptyOutDir: true,
        rollupOptions: {
            input: resolve(__dirname, 'index.html')
        }
    },

    server: {
        port: 3000,
        open: true
    }
})