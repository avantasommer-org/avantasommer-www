import { useState, useEffect } from 'react';
export function useTrust(key = 'avanta-trust') {
  const [trust, setTrust] = useState(0);
  useEffect(() => {
    const stored = localStorage.getItem(key);
    setTrust(stored ? parseInt(stored) : 0);
  }, [key]);
  const increase = (amount) => {
    const newTrust = trust + amount;
    localStorage.setItem(key, newTrust.toString());
    setTrust(newTrust);
  };
  return { trust, increase };
}
