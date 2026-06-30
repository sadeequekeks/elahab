const STORAGE_KEY = "elalbab-cookie-consent";

export type CookieConsentStatus = "accepted" | "declined";

export function getCookieConsent(): CookieConsentStatus | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (value === "accepted" || value === "declined") return value;
    return null;
  } catch {
    return null;
  }
}

export function setCookieConsent(status: CookieConsentStatus): void {
  try {
    localStorage.setItem(STORAGE_KEY, status);
  } catch {
    /* private browsing */
  }
}

export function hasAcceptedCookies(): boolean {
  return getCookieConsent() === "accepted";
}
