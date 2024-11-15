import { useEffect, useState } from "react";

export default function useDarkMode() {
  // `isDarkMode` 상태를 생성하여 다크 모드 여부를 저장
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // 이전 설정을 확인하고, 시스템 설정에 따라 초기 다크 모드 설정
    const userPreference = localStorage.getItem("theme");
    console.log(userPreference);
    if (userPreference) {
      return userPreference === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // 다크 모드 상태에 따라 HTML 태그에 "dark" 클래스 추가/제거
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // 다크 모드를 토글하는 함수
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    // console.log(isDarkMode);
  };

  return { isDarkMode, toggleDarkMode };
}
