import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 按需引入配置element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
// 配置别名
import path from 'path'
export default defineConfig({
  plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      createStyleImportPlugin({
          resolves: [VantResolve ()],
          libs: [
              {
                  libraryName: 'element-plus',
                  esModule: true,
                  resolveStyle: (name) => {
                      return `element-plus/theme-chalk/${name}.css`
                  }
              }
          ]
      }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  },
//    配置代理跨域vite官网
   server: {
        proxy: {
          '/api': {
              target: 'http://syt.atguigu.cn',
              changeOrigin: true,
          },
      }
    }
})
