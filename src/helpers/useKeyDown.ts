import { useEffect } from 'react';

export const useKeyDown = (callback: any, keys: any) => {
    const onKeyDown = (event: any) => {
      const wasAnyKeyPressed = keys.some((key: any) => event.key.toLocaleLowerCase() === key.toLocaleLowerCase());    
      if (wasAnyKeyPressed || keys.length === 0) {
        event.preventDefault();
        callback(event.key);
      }
    };  
    useEffect(() => {
      document.addEventListener('keydown', onKeyDown);   
      return () => {
        document.removeEventListener('keydown', onKeyDown);
      };
    }, [onKeyDown]);
  };