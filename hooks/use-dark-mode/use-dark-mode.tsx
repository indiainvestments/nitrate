import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export function useDarkMode(): [boolean, () => void] {
  const { theme, setTheme } = useTheme();
  const [mountedOnClient, setMountedOnclient] = useState<boolean>(false);

  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setMountedOnclient(true);
  }, []);

  return [mountedOnClient, switchTheme];
}
