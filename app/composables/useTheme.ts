import { useHead } from "#imports";

// 静态导入所有主题 CSS，让构建工具处理路径和 hash
const themeImports = {
  "theme-dark": () => import("@/assets/styles/theme-dark.scss"),

  "theme-light": () => import("@/assets/styles/theme-light.scss"),
};

const useTheme = () => {
  const currentTheme = useState("currentTheme", () => "theme-light");

  const setTheme = async (themeName: keyof typeof themeImports) => {
    try {
      console.log(`切换到主题: ${themeName}`);
      // 动态导入对应的主题文件
      // await themeImports[themeName]();

      // 更新状态和本地存储
      currentTheme.value = themeName;
      localStorage.setItem("theme", themeName);
      // 重新设置
      useHead({
        link: [
          {
            rel: "stylesheet",
            href: `/assets/styles/${themeName}.scss`,
            key: "theme-style", // 用 key 确保替换
            // 但 href 必须是静态字符串才能被构建工具正确处理
          },
        ],
      });
    } catch (error) {
      console.error("加载主题失败:", error);
    }
  };

  // 初始化
  if (process.client) {
    const savedTheme =
      (localStorage.getItem("theme") as keyof typeof themeImports) ||
      "theme-light";
    setTheme(savedTheme);
  }

  return {
    currentTheme,
    setTheme,
  };
};

export default useTheme;
