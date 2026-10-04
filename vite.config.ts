import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { swcDecoratorsPlugin } from 'swc-decorators-plugin'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/maksi/',
  plugins: [
    solid(),
    swcDecoratorsPlugin({
      decoratorVersion: '2022-03',
      target: 'es2024',
      useDefineForClassFields: true,
      externalHelpers: true,
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': import.meta.dirname + '/src',
    },
  },
})
