// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@element-plus/nuxt"],
  css: [
    // 引入所有主题文件，Vite 会为每个生成独立的 CSS 文件
    // "@/assets/styles/theme-light.scss",
    // "@/assets/styles/theme-dark.scss",
    // 注意：不要在这里引入全局通用的、非主题相关的 CSS，以免重复
  ],
});
