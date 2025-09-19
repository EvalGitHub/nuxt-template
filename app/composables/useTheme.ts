import { useState } from "#imports";

// 静态导入所有主题 CSS，让构建工具处理路径和 hash
// import "../assets/styles/theme-light.scss";
// import "../assets/styles/theme-dark.scss";

const useTheme = () => {
  const currentTheme = useState<"theme-light" | "theme-dark">("currentTheme", () => "theme-light");

  const setTheme = (themeName: "theme-light" | "theme-dark") => {
    try {
      console.log(`切换到主题: ${themeName}`);
      
      // 切换body上的主题类
      if (process.client) {
        const body = document.body;
        body.classList.remove("theme-light", "theme-dark");
        body.classList.add(themeName);
        
        // 更新状态和本地存储
        currentTheme.value = themeName;
        localStorage.setItem("theme", themeName);
      }
    } catch (error) {
      console.error("切换主题失败:", error);
    }
  };

  // 初始化
  if (process.client) {
    const savedTheme = 
      (localStorage.getItem("theme") as "theme-light" | "theme-dark") || 
      "theme-light";
    // 延迟设置主题，确保在客户端执行
    setTimeout(() => {
      setTheme(savedTheme);
    }, 0);
  }

  return {
    currentTheme,
    setTheme,
  };
};

export default useTheme;