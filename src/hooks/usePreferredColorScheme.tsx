import { useState, useEffect } from "react";

type ColorScheme = boolean;

const usePreferredColorScheme = (): ColorScheme => {
  const [preferredColorScheme, setPreferredColorScheme] = useState<ColorScheme>(true);

  useEffect(() => {
    const mediaQueryDark = window.matchMedia("(prefers-color-scheme: dark)");
    const mediaQueryLight = window.matchMedia("(prefers-color-scheme: light)");

    const updateColorScheme = (e: MediaQueryListEvent) => {
      if (e.matches && e.media.includes("dark")) {
        setPreferredColorScheme(true);
      } else if (e.matches && e.media.includes("light")) {
        setPreferredColorScheme(false);
      }
    };

    updateColorScheme(mediaQueryDark as unknown as MediaQueryListEvent);
    updateColorScheme(mediaQueryLight as unknown as MediaQueryListEvent);

    mediaQueryDark.addEventListener("change", updateColorScheme);
    mediaQueryLight.addEventListener("change", updateColorScheme);

    return () => {
      mediaQueryDark.removeEventListener("change", updateColorScheme);
      mediaQueryLight.removeEventListener("change", updateColorScheme);
    };
  }, []);

  return preferredColorScheme;
};

export default usePreferredColorScheme;
