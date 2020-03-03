import { RefObject } from 'react';

export const createUseObserverVisible = (observerOptions: IntersectionObserverInit) => (
  containerRef: RefObject<HTMLDivElement>
) => {
  return true;
};
