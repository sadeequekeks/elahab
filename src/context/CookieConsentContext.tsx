import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  getCookieConsent,
  setCookieConsent,
  type CookieConsentStatus,
} from "../lib/cookies";

interface CookieConsentContextValue {
  bannerVisible: boolean;
  status: CookieConsentStatus | null;
  accept: () => void;
  decline: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<CookieConsentStatus | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setStatus(getCookieConsent());
    setReady(true);
  }, []);

  const accept = useCallback(() => {
    setCookieConsent("accepted");
    setStatus("accepted");
  }, []);

  const decline = useCallback(() => {
    setCookieConsent("declined");
    setStatus("declined");
  }, []);

  const value = useMemo(
    () => ({
      bannerVisible: ready && status === null,
      status,
      accept,
      decline,
    }),
    [ready, status, accept, decline],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}
