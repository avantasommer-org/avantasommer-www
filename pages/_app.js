import React, { createContext, useContext } from "react";
import { usePulse, useDrive, useMirror, useSync } from "../core"; // adjust if your core package path differs

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

export function useCore() {
  return useContext(CoreContext);
}

// --- Add this App component for Next.js ---
export default function App({ Component, pageProps }) {
  return (
    <AvantaCoreProvider>
      <Component {...pageProps} />
    </AvantaCoreProvider>
  );
}
