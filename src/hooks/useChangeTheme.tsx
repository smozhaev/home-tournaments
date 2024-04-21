import { useState } from "react";

interface IPropTheme {
  stateTheme: boolean;
}

type TChangeTheme = (theme: IPropTheme) => void;

const useChangeTheme = (stateTheme: boolean) => {
  const [theme, setTheme] = useState<boolean>(stateTheme || true);
  const setChangeTheme: TChangeTheme = (theme: IPropTheme) => {
    if (theme) {
      setTheme(!theme);
      document.documentElement.setAttribute("data-theme", "light");
    } else if (!theme) {
      setTheme(theme);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  };

  return [theme, setChangeTheme];
};

export default useChangeTheme;
