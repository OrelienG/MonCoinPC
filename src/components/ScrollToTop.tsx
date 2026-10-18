import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const previousPath = useRef(pathname);

  useLayoutEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(hash.slice(1));
        target?.scrollIntoView();
        target?.focus({ preventScroll: true });
        previousPath.current = pathname;
        return;
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (previousPath.current !== pathname) {
        document.getElementById('main-content')?.focus({ preventScroll: true });
      }
      previousPath.current = pathname;
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};
