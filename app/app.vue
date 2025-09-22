<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useColorMode } from '#imports'

// 在客户端尽快应用主题，减少闪烁
if (process.client) {
  const colorMode = useColorMode()
  // 使用微任务尽快应用主题
  queueMicrotask(() => {
    // 强制更新一次，确保主题正确应用
    const preference = colorMode.preference
    colorMode.preference = preference
  })
}
</script>