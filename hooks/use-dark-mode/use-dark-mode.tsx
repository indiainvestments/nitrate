import { useState, useEffect } from 'react';

const THEME_KEY = 'nitrate-dark-mode' as const;

export function useDarkMode(): [boolean, () => void] {
  const [darkMode, setDarkMode] = useState<boolean>((): boolean => {
    if (typeof window === 'undefined') {
      return false;
    }
    if (window.localStorage) {
      const keyFromStorage = localStorage.getItem(THEME_KEY);
      if (keyFromStorage !== null) {
        /**
         * There is a theme value against this
         */
        if (
          JSON.parse(keyFromStorage) === true ||
          JSON.parse(keyFromStorage) === 'true'
        ) {
          /**
           * Dark Mode should be set
           */
          return true;
        }
        if (
          JSON.parse(keyFromStorage) === false ||
          JSON.parse(keyFromStorage) === 'false'
        ) {
          /**
           * Dark mode should be unset
           */
          return false;
        }
      }
    }
    /**
     * No value was set in localstorage
     * Or localstorage doesn't exist
     * Need to get from user system preference
     */
    if (typeof window.matchMedia === 'function') {
      const userPrefersDarkTheme = window.matchMedia(
        '(prefers-color-scheme: dark)',
      );

      if (userPrefersDarkTheme) {
        return true;
      }
    }
    return false;
  });
  useEffect(() => {
    /**
     * Whenever dark mode value changes
     * persist it in local storage
     */
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }
    /**
     * update the class at document level
     */
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    if (window?.localStorage) {
      localStorage.setItem(THEME_KEY, JSON.stringify(darkMode));
    }
  }, [darkMode]);
  const themeSwitch = () => {
    setDarkMode(mode => !mode);
  };
  return [darkMode, themeSwitch];
}
