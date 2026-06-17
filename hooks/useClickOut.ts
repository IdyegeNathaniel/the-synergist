import { useEffect, useRef } from 'react';

export const useClickOutside = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);
  const callbackRef = useRef(callback);

 
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callbackRef.current();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); 

  return ref;
};