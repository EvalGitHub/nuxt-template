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

import { ref } from 'vue'
import useTheme from '@/composables/useTheme'

const options: { value: 'theme-light' | 'theme-dark'; label: string }[] = [
  {
    value: 'theme-light',
    label: '明亮主题',
  },
  {
    value: 'theme-dark',
    label: '黑暗主题',
  },
]

const value = ref('theme-light')

const { setTheme } = useTheme()


function changeTheme(value: 'theme-light' | 'theme-dark') {
  console.log('changeTheme', value)
  setTheme(value)
}

</script>