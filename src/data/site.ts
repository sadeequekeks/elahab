export const site = {
  name: "El Albab Real Estate",
  tagline: "Opening Doors to Egypt's Finest Properties.",
  logo: `${import.meta.env.BASE_URL}logo.jpeg`,
  logoOnDark: `${import.meta.env.BASE_URL}logo1.jpeg`,
  whatsapp: "201551750636",
  allWhatsapps: [
    { label: "Egypt Sales (Primary)", number: "201551750636", display: "+20 155 175 0636" },
    { label: "Egypt Consulting", number: "201016389887", display: "+20 101 638 9887" },
    { label: "Nigeria Office", number: "234704403008", display: "+234 704 403 008" },
  ],
  phones: [
    "+20 155 175 0636",
    "+20 101 638 9887",
    "+234 704 403 008"
  ],
  email: "elalbabmajesticproperties@gmail.com",
  offices: [
    {
      country: "Egypt",
      address: "No 5460 MTI University Street, Mokattam, Cairo, Egypt",
      mapsUrl: "https://maps.app.goo.gl/D6jbcBsB4boRHqx9A?g_st=iw",
    },
    {
      country: "Nigeria",
      address: "No 19 Monrovia Street, Wuse 2, Abuja, Nigeria",
      mapsUrl: "https://maps.google.com/?q=19+Monrovia+St,+Wuse+2,+Abuja,+Nigeria",
    }
  ],
  office: {
    address: "No 5460 MTI University Street, Mokattam, Cairo, Egypt",
    mapsUrl: "https://maps.app.goo.gl/D6jbcBsB4boRHqx9A?g_st=iw",
  },
  social: {
    instagram:
      "https://www.instagram.com/el.albab_real_estate?igsh=enl4eDA2azFuMTQx&utm_source=qr",
    tiktok: "https://www.tiktok.com/@el_albab_properties?_r=1&_t=ZS-96czViFxGOj",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Properties", href: "/properties" },
  { label: "Invest in Egypt", href: "/invest" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
