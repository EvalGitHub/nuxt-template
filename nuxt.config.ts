// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  // 启用SSR（默认就是启用的）
  ssr: true,
  // 引入 Element Plus 模块， 根据需求自己替换
  modules: ["@element-plus/nuxt", "@nuxtjs/color-mode"],
  css: [
    // 引入所有主题文件，Vite 会为每个生成独立的 CSS 文件
    "@/assets/styles/theme-light.scss",
    "@/assets/styles/theme-dark.scss",
    // 注意：不要在这里引入全局通用的、非主题相关的 CSS，以免重复
  ],
  // color-mode配置
  colorMode: {
    preference: 'system', // 遵循系统主题设置
    fallback: 'light', // 备用主题
    classSuffix: '' // 类名后缀，空字符串表示不添加后缀
  }
});