<template>
  <div :class="initialTheme">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// 防止主题切换时的闪烁问题
const initialTheme = useState('color-mode', () => {
  if (process.server) {
    // 服务端默认使用浅色主题
    return 'light'
  }
  // 客户端使用localStorage中保存的主题
  if (process.client && typeof localStorage !== 'undefined') {
    return localStorage.getItem('nuxt-color-mode') || 'light'
  }
  return 'light'
})
</script>