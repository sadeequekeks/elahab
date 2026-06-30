import { site } from "../data/site";

export function buildWhatsAppUrl(message: string, number?: string): string {
  const encoded = encodeURIComponent(message);
  const target = number || site.whatsapp;
  return `https://wa.me/${target}?text=${encoded}`;
}

export function openWhatsApp(message: string, number?: string): void {
  window.open(buildWhatsAppUrl(message, number), "_blank", "noopener,noreferrer");
}

export function buildPropertyInquiryMessage(propertyTitle: string): string {
  return `Hello El Albab Real Estate,\n\nI am interested in: ${propertyTitle}\n\nPlease share more details and schedule a viewing.\n\nThank you.`;
}

export function buildContactFormMessage(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): string {
  return `Hello El Albab Real Estate,\n\nName: ${data.name}\nEmail: ${data.email}\nWhatsApp: ${data.phone}\n\nMessage:\n${data.message}`;
}
