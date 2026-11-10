"use client";

import { useCallback, useSyncExternalStore } from "react";

export function useMediaQuery(query: string) {
  // Le dice a React cómo enterarse cuando cambia el tamaño de pantalla
  const subscribe = useCallback(
    (onChange: () => void) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches, // valor en el navegador
    () => false, // valor en el servidor, donde no hay pantalla
  );
}