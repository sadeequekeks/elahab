import { useState, type FormEvent } from "react";
import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "../data/site";
import { buildContactFormMessage, openWhatsApp } from "../lib/whatsapp";
import { Container } from "../components/ui/Container";
import { PageMeta } from "../components/layout/PageMeta";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { AnimateIn } from "../components/motion/AnimateIn";

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [targetNumber, setTargetNumber] = useState<string>(site.allWhatsapps[0].number);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Name is required";
      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? "" : "Please enter a valid email address";
      case "phone":
        return value.trim() ? "" : "WhatsApp number is required";
      case "message":
        return value.trim() ? "" : "Message is required";
      default:
        return "";
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const allTouched = { name: true, email: true, phone: true, message: true };
    setTouched(allTouched);

    const newErrors = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      phone: validateField("phone", form.phone),
      message: validateField("message", form.message),
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err !== "");
    if (hasErrors) {
      return;
    }

    openWhatsApp(buildContactFormMessage(form), targetNumber);
  };

  return (
    <>
      <PageMeta
        title="Contact"
        description="Get in touch with El Albab Real Estate via WhatsApp, phone, or visit our offices in Cairo and Abuja."
      />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <Container className="py-8 sm:py-12 lg:py-16">
          <SectionHeading
            title="Contact Us"
            subtitle="Join Us. Invest In Egypt. Invest in Your Future."
          />

          <div className="mb-12 rounded-3xl border border-neutral-100 bg-neutral-50 p-8 text-center sm:text-left">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-2">
              Brochure | 7 October 2025
            </span>
            <div className="mt-4 inline-block bg-gold px-6 py-3 rounded-xl shadow-xs">
              <span className="font-[family-name:var(--font-heading)] text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white block">
                Ready to Build Your Future?
              </span>
            </div>
            <p className="mt-6 max-w-4xl text-base leading-relaxed text-neutral-600">
              Now is the time to make your real estate aspirations a reality. With El Albab by your side, you gain expert guidance, innovative solutions, and a trusted partner. Contact us today to begin a journey toward achieving your property goals.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <AnimateIn delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <p className="text-sm text-neutral-500">
                  Fill in the form and select the agent department. We will open WhatsApp with your pre-filled message.
                </p>
                <div>
                  <label htmlFor="targetNumber" className="block text-sm font-medium text-ink">
                    Select Department / Agent
                  </label>
                  <select
                    id="targetNumber"
                    value={targetNumber}
                    onChange={(e) => setTargetNumber(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-neutral-200 px-4 py-3 bg-white focus:border-emerald focus:outline-none focus:ring-1 focus:ring-emerald text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
                  >
                    {site.allWhatsapps.map((chan) => (
                      <option key={chan.number} value={chan.number}>
                        {chan.label} ({chan.display})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink">
                    Name
                  </label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={(e) => {
                      const val = e.target.value;
                      setForm({ ...form, name: val });
                      if (touched.name) {
                        setErrors((prev) => ({ ...prev, name: validateField("name", val) }));
                      }
                    }}
                    onBlur={() => {
                      setTouched((prev) => ({ ...prev, name: true }));
                      setErrors((prev) => ({ ...prev, name: validateField("name", form.name) }));
                    }}
                    className={`mt-1 w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-1 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald ${
                      errors.name && touched.name
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                        : "border-neutral-200 focus:border-emerald focus:ring-emerald bg-white"
                    }`}
                  />
                  {errors.name && touched.name && (
                    <p className="mt-1 text-xs text-red-500 font-medium">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => {
                      const val = e.target.value;
                      setForm({ ...form, email: val });
                      if (touched.email) {
                        setErrors((prev) => ({ ...prev, email: validateField("email", val) }));
                      }
                    }}
                    onBlur={() => {
                      setTouched((prev) => ({ ...prev, email: true }));
                      setErrors((prev) => ({ ...prev, email: validateField("email", form.email) }));
                    }}
                    className={`mt-1 w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-1 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald ${
                      errors.email && touched.email
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                        : "border-neutral-200 focus:border-emerald focus:ring-emerald bg-white"
                    }`}
                  />
                  {errors.email && touched.email && (
                    <p className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-ink">
                    WhatsApp Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => {
                      const val = e.target.value;
                      setForm({ ...form, phone: val });
                      if (touched.phone) {
                        setErrors((prev) => ({ ...prev, phone: validateField("phone", val) }));
                      }
                    }}
                    onBlur={() => {
                      setTouched((prev) => ({ ...prev, phone: true }));
                      setErrors((prev) => ({ ...prev, phone: validateField("phone", form.phone) }));
                    }}
                    className={`mt-1 w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-1 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald ${
                      errors.phone && touched.phone
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                        : "border-neutral-200 focus:border-emerald focus:ring-emerald bg-white"
                    }`}
                  />
                  {errors.phone && touched.phone && (
                    <p className="mt-1 text-xs text-red-500 font-medium">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => {
                      const val = e.target.value;
                      setForm({ ...form, message: val });
                      if (touched.message) {
                        setErrors((prev) => ({ ...prev, message: validateField("message", val) }));
                      }
                    }}
                    onBlur={() => {
                      setTouched((prev) => ({ ...prev, message: true }));
                      setErrors((prev) => ({ ...prev, message: validateField("message", form.message) }));
                    }}
                    className={`mt-1 w-full resize-none rounded-xl border px-4 py-3 focus:outline-none focus:ring-1 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald ${
                      errors.message && touched.message
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50/20"
                        : "border-neutral-200 focus:border-emerald focus:ring-emerald bg-white"
                    }`}
                  />
                  {errors.message && touched.message && (
                    <p className="mt-1 text-xs text-red-500 font-medium">{errors.message}</p>
                  )}
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send via WhatsApp
                </Button>
              </form>
            </AnimateIn>

            <AnimateIn delay={0.2} className="space-y-8">
              {/* Dual Offices */}
              <div className="grid gap-6 sm:grid-cols-2">
                {site.offices.map((office) => (
                  <div key={office.country} className="rounded-3xl bg-neutral-50 p-6 flex flex-col justify-between border border-neutral-100 shadow-2xs">
                    <div>
                      <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-2">
                        {office.country} Office
                      </span>
                      <p className="text-xs leading-relaxed text-neutral-600 min-h-[4rem]">
                        {office.address}
                      </p>
                    </div>
                    <a
                      href={office.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald hover:underline inline-flex items-center gap-1 mt-4"
                    >
                      View on Map →
                    </a>
                  </div>
                ))}
              </div>

              {/* Contact Channels list */}
              <div className="rounded-3xl bg-neutral-50 p-6 border border-neutral-100 shadow-2xs">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-ink mb-4">
                  Direct Inquiries
                </h3>
                <ul className="space-y-4">
                  {site.allWhatsapps.map((chan) => (
                    <li key={chan.number} className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200/40 pb-3 last:border-0 last:pb-0 text-sm">
                      <div>
                        <span className="font-semibold text-neutral-800 block text-xs">{chan.label}</span>
                        <span className="text-neutral-500 text-xs">{chan.display}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <a
                          href={`tel:${chan.display.replace(/\s/g, "")}`}
                          className="flex items-center gap-1 text-xs font-semibold text-neutral-500 hover:text-gold"
                        >
                          <Phone className="h-3 w-3" /> Call
                        </a>
                        <span className="text-neutral-300">|</span>
                        <button
                          onClick={() => openWhatsApp("Hello El Albab, I'd like to make an inquiry.", chan.number)}
                          className="flex items-center gap-1 text-xs font-semibold text-emerald hover:text-emerald-700"
                        >
                          <MessageCircle className="h-3 w-3" /> WhatsApp
                        </button>
                      </div>
                    </li>
                  ))}
                  <li className="pt-2">
                    <a
                      href={`mailto:${site.email}`}
                      className="flex items-center gap-3 text-sm text-neutral-600 transition hover:text-emerald"
                    >
                      <Mail className="h-5 w-5 text-gold" />
                      {site.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex gap-3">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 transition hover:border-gold hover:text-gold"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={site.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-xs font-bold transition hover:border-gold hover:text-gold animate-pulse"
                  aria-label="TikTok"
                >
                  TT
                </a>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </div>
    </>
  );
}
