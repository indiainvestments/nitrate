/**
 * A hook for controlling mobile slide-in nav opening / closing
 */

import React, { useState, useEffect } from 'react';

export function useSideNav<T extends HTMLElement | null>(
  refToElement: React.MutableRefObject<T>,
): { sideNavOpen: boolean; openSideNav: () => void; closeSideNav: () => void } {
  const [sideNavOpen, setSideNavOpen] = useState<boolean>(false);
  const openSideNav = () => setSideNavOpen(true);
  const closeSideNav = () => setSideNavOpen(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }
    if (!sideNavOpen) {
      return;
    }

    if (!refToElement) {
      return;
    }

    const mobileTapHandler = (e: MouseEvent) => {
      const el = e.target as HTMLElement;

      if (!refToElement.current?.contains(el)) {
        /**
         * Close the menu
         */
        setSideNavOpen(false);
      }
    };
    window.addEventListener('click', mobileTapHandler);

    return () => {
      window.removeEventListener('click', mobileTapHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sideNavOpen]);

  return {
    sideNavOpen,
    openSideNav,
    closeSideNav,
  };
}
