import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

import Components from '@uni-helper/vite-plugin-uni-components'
import { NutResolver } from 'uniapp-nutui'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    Components({
      resolvers: [NutResolver()]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "uniapp-nutui/styles/variables.scss";'
      }
    }
  }
})
