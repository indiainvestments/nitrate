import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export function useDarkMode(): [boolean, () => void] {
  const { resolvedTheme, setTheme } = useTheme();
  const [mountedOnClient, setMountedOnclient] = useState<boolean>(false);

  const switchTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setMountedOnclient(true);
  }, []);

  return [mountedOnClient, switchTheme];
}
