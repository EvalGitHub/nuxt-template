<template>
  <div class="header-wrapper bg-secondary">
    <el-select v-model="value" placeholder="Select"  class="selectStyle" @change="changeTheme">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  </div>
</template>
<style scoped lang="css">
  .header-wrapper {
    height: 60px;
    /* background-color: #f60; */
    position: relative;
  }
  .selectStyle {
    width: 100px;
    position: absolute;
    right: 10px;
    top: 15px;
  }
</style>
<script lang="ts" setup>

import { ref, watch } from 'vue'
import useTheme from '@/composables/useTheme'

const options = [
  {
    value: 'theme-light',
    label: '明亮主题',
  },
  {
    value: 'theme-dark',
    label: '黑暗主题',
  },
]

const { currentTheme, setTheme } = useTheme()
const value = ref(currentTheme.preference)

// 监听主题变化，同步更新select的值
watch(
  () => currentTheme.preference,
  (newMode) => {
    value.value = newMode
  }
)

function changeTheme(theme: string) {
  setTheme(theme)
}
</script>