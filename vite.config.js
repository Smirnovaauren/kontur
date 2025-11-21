// vite.config.js
import { defineConfig } from 'vite'
import pugPlugin from 'vite-plugin-pug'
import { resolve } from 'path'

export default defineConfig({
    base: '',
    plugins: [
        pugPlugin({
            pretty: process.env.NODE_ENV !== 'production',
            compileDebug: false,
            basedir: resolve(__dirname)
        })
    ],

    css: {
        preprocessorOptions: {
            scss: {
            }
        }
    },

    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@images': resolve(__dirname, 'public/images'),
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
            input: resolve(__dirname, 'index.html'),
            output: {
                assetFileNames: (assetInfo) => {
                    const isCssAsset = assetInfo.names?.some((name) => name.endsWith('.css'))

                    if (isCssAsset) {
                        return 'styles/[name]-[hash][extname]'
                    }

                    return 'assets/[name]-[hash][extname]'
                }
            }
        }
    },

    server: {
        port: 3000,
        open: true
    }
})