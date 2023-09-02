// vite.config.ts
import { defineConfig } from "file:///D:/MeiZhuo/Project/Vue/MyVue/%E5%B0%9A%E5%8C%BB%E9%80%9A/code/HospitalRegistrationSystem/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/MeiZhuo/Project/Vue/MyVue/%E5%B0%9A%E5%8C%BB%E9%80%9A/code/HospitalRegistrationSystem/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/MeiZhuo/Project/Vue/MyVue/%E5%B0%9A%E5%8C%BB%E9%80%9A/code/HospitalRegistrationSystem/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/MeiZhuo/Project/Vue/MyVue/%E5%B0%9A%E5%8C%BB%E9%80%9A/code/HospitalRegistrationSystem/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///D:/MeiZhuo/Project/Vue/MyVue/%E5%B0%9A%E5%8C%BB%E9%80%9A/code/HospitalRegistrationSystem/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import { createStyleImportPlugin, VantResolve } from "file:///D:/MeiZhuo/Project/Vue/MyVue/%E5%B0%9A%E5%8C%BB%E9%80%9A/code/HospitalRegistrationSystem/node_modules/vite-plugin-style-import/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "D:\\MeiZhuo\\Project\\Vue\\MyVue\\\u5C1A\u533B\u901A\\code\\HospitalRegistrationSystem";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    createStyleImportPlugin({
      resolves: [VantResolve()],
      libs: [
        {
          libraryName: "element-plus",
          esModule: true,
          resolveStyle: (name) => {
            return `element-plus/theme-chalk/${name}.css`;
          }
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  //    配置代理跨域vite官网
  server: {
    proxy: {
      "/api": {
        target: "http://syt.atguigu.cn",
        changeOrigin: true
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxNZWlaaHVvXFxcXFByb2plY3RcXFxcVnVlXFxcXE15VnVlXFxcXFx1NUMxQVx1NTMzQlx1OTAxQVxcXFxjb2RlXFxcXEhvc3BpdGFsUmVnaXN0cmF0aW9uU3lzdGVtXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxNZWlaaHVvXFxcXFByb2plY3RcXFxcVnVlXFxcXE15VnVlXFxcXFx1NUMxQVx1NTMzQlx1OTAxQVxcXFxjb2RlXFxcXEhvc3BpdGFsUmVnaXN0cmF0aW9uU3lzdGVtXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9NZWlaaHVvL1Byb2plY3QvVnVlL015VnVlLyVFNSVCMCU5QSVFNSU4QyVCQiVFOSU4MCU5QS9jb2RlL0hvc3BpdGFsUmVnaXN0cmF0aW9uU3lzdGVtL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbi8vIFx1NjMwOVx1OTcwMFx1NUYxNVx1NTE2NVx1OTE0RFx1N0Y2RWVsZW1lbnQtcGx1c1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xyXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZUltcG9ydFBsdWdpbiwgVmFudFJlc29sdmUgfSBmcm9tICd2aXRlLXBsdWdpbi1zdHlsZS1pbXBvcnQnO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuLy8gXHU5MTREXHU3RjZFXHU1MjJCXHU1NDBEXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgICB2dWUoKSxcclxuICAgICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcclxuICAgICAgfSksXHJcbiAgICAgIENvbXBvbmVudHMoe1xyXG4gICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXHJcbiAgICAgIH0pLFxyXG4gICAgICBjcmVhdGVTdHlsZUltcG9ydFBsdWdpbih7XHJcbiAgICAgICAgICByZXNvbHZlczogW1ZhbnRSZXNvbHZlICgpXSxcclxuICAgICAgICAgIGxpYnM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGxpYnJhcnlOYW1lOiAnZWxlbWVudC1wbHVzJyxcclxuICAgICAgICAgICAgICAgICAgZXNNb2R1bGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVTdHlsZTogKG5hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgZWxlbWVudC1wbHVzL3RoZW1lLWNoYWxrLyR7bmFtZX0uY3NzYFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICB9KSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJylcclxuICAgIH1cclxuICB9LFxyXG4vLyAgICBcdTkxNERcdTdGNkVcdTRFRTNcdTc0MDZcdThERThcdTU3REZ2aXRlXHU1Qjk4XHU3RjUxXHJcbiAgIHNlcnZlcjoge1xyXG4gICAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgICAnL2FwaSc6IHtcclxuICAgICAgICAgICAgICB0YXJnZXQ6ICdodHRwOi8vc3l0LmF0Z3VpZ3UuY24nLFxyXG4gICAgICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwWixTQUFTLG9CQUFvQjtBQUN2YixPQUFPLFNBQVM7QUFFaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywyQkFBMkI7QUFDcEMsU0FBUyx5QkFBeUIsbUJBQW1CO0FBSXJELE9BQU8sVUFBVTtBQVZqQixJQUFNLG1DQUFtQztBQVd6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDTCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNuQyxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNuQyxDQUFDO0FBQUEsSUFDRCx3QkFBd0I7QUFBQSxNQUNwQixVQUFVLENBQUMsWUFBYSxDQUFDO0FBQUEsTUFDekIsTUFBTTtBQUFBLFFBQ0Y7QUFBQSxVQUNJLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxVQUNWLGNBQWMsQ0FBQyxTQUFTO0FBQ3BCLG1CQUFPLDRCQUE0QixJQUFJO0FBQUEsVUFDM0M7QUFBQSxRQUNKO0FBQUEsTUFDSjtBQUFBLElBQ0osQ0FBQztBQUFBLEVBQ0w7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUNwQztBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUMsUUFBUTtBQUFBLElBQ0gsT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLFFBQ0osUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLE1BQ2xCO0FBQUEsSUFDSjtBQUFBLEVBQ0Y7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
