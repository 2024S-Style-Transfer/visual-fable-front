import { useState, useEffect } from 'react';

interface UseIntersectionObserverProps {
  root?: null;
  rootMargin?: string;
  threshold?: number;
  onIntersect: IntersectionObserverCallback;
}
export const useIntersectionObserver = ({ root, rootMargin, threshold, onIntersect }: UseIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
    if (!target) return;
    const observer: IntersectionObserver = new IntersectionObserver(onIntersect, { root, rootMargin, threshold });
    observer.observe(target);

    return () => observer.unobserve(target);
  }, [onIntersect, root, rootMargin, target, threshold]);

  return { setTarget };
};
