import { useColorMode } from '#imports'

const useTheme = () => {
  const colorMode = useColorMode()
  
  const setTheme = (themeName: string) => {
    console.log(`切换到主题: ${themeName}`)
    colorMode.preference = themeName
    
    // 在客户端同时保存到localStorage，确保一致性
    if (process.client && typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', themeName)
    }
  }

  // 确保在客户端初始化时从localStorage读取主题
  if (process.client && typeof localStorage !== 'undefined') {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      colorMode.preference = savedTheme
    }
  }

  return {
    currentTheme: colorMode,
    setTheme,
  }
}

export default useTheme;
