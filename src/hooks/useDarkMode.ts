import { useEffect, useState } from "react";

const useDarkMode = (): boolean => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const updateLogo = () => setIsDarkMode(matchMedia.matches);

    updateLogo();
    matchMedia.addEventListener("change", updateLogo);

    return () => {
      matchMedia.removeEventListener("change", updateLogo);
    };
  }, []);

  return isDarkMode;
};

export default useDarkMode;
