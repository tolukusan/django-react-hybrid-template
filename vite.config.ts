import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    base: '/static/', // This should match Django's settings.STATIC_URL
    build: {
        // Where Vite will save its output files.
        // This should be something in your settings.STATICFILES_DIRS
        outDir: path.resolve(__dirname, './static'),
        emptyOutDir: false, // Preserve the outDir to not clobber Django's other files.
        manifest: 'manifest.json',
        rollupOptions: {
            input: {
                'index': path.resolve(__dirname, './assets/js/index.js'),
                'hello': path.resolve(__dirname, './assets/js/hello.jsx'),
                'style': path.resolve(__dirname, './assets/css/style.css'),
            },
            output: {
                // Output JS bundles to js/ directory with -bundle suffix
                entryFileNames: `js/[name]-bundle.js`,
                assetFileNames: `css/[name].css`,
            },
        },
    },
    plugins: [
        react({
            babel: {
                plugins: [['babel-plugin-react-compiler']],
            },
        }),
    tailwindcss(),],
});
