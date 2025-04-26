import { useState, useEffect } from 'react';
export function useIntent(threshold = 500) {
  const [intent, setIntent] = useState(false);
  useEffect(() => {
    let hoverStart = 0;
    const handler = () => { hoverStart = hoverStart || Date.now(); };
    const leave = () => {
      setIntent(Date.now() - hoverStart > threshold);
      hoverStart = 0;
    };
    document.addEventListener('mouseover', handler);
    document.addEventListener('mouseout', leave);
    return () => {
      document.removeEventListener('mouseover', handler);
      document.removeEventListener('mouseout', leave);
    };
  }, [threshold]);
  return intent;
}
