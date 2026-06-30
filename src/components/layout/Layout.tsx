import { CookieConsentProvider } from "../../context/CookieConsentContext";
import { PageTransition } from "../motion/PageTransition";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";
import { CookieConsent } from "./CookieConsent";

export function Layout() {
  return (
    <CookieConsentProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <PageTransition />
        </main>
        <Footer />
        <WhatsAppFab />
        <CookieConsent />
      </div>
    </CookieConsentProvider>
  );
}
