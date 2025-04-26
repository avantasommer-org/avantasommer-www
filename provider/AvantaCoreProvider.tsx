import React, { createContext, useContext } from 'react';
import { usePulse, useDrive, useMirror, useSync } from '../core';
const CoreContext = createContext(null);
export function AvantaCoreProvider({ children }) {
  const pulse = usePulse();
  const drive = useDrive();
  const mirror = useMirror();
  const sync = useSync();
  return (
    <CoreContext.Provider value={{ pulse, drive, mirror, sync }}>
      {children}
    </CoreContext.Provider>
  );
}
export function useCore() { return useContext(CoreContext); }
