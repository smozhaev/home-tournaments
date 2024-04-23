import { useState } from "react";
import "./types.tsx";

const useChangeTheme: TUseChangeTheme = (themeStateProp: boolean) => {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [themState, setThemState] = useState<boolean>(themeStateProp);
  const changeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
    setThemState(!themState);
  };

  return [themState, changeTheme];
};

export default useChangeTheme;
