import { stockImages } from "../lib/images";

export interface InvestRegion {
  title: string;
  description: string;
  image: string;
  highlights: string[];
  startingPrice: string;
  paymentPlan: string;
  delivery: string;
}

export const investRegions: InvestRegion[] = [
  {
    title: "New Administrative Capital",
    description:
      "Egypt's future government and business hub with smart city infrastructure, the Iconic Tower, and massive foreign direct investment.",
    image: stockImages.citySkyline,
    highlights: ["Government relocation", "Monorail & metro links", "Green River district"],
    startingPrice: "$75,000",
    paymentPlan: "Up to 10 years",
    delivery: "Ready to move to 4 years",
  },
  {
    title: "New Cairo",
    description:
      "Established luxury living with international schools, malls, and proven appreciation — ideal for families and stable rental income.",
    image: stockImages.luxuryVilla,
    highlights: ["Mature compounds", "Strong resale market", "Family-friendly"],
    startingPrice: "$150,000",
    paymentPlan: "Up to 8 years",
    delivery: "Ready to move",
  },
  {
    title: "North Coast",
    description:
      "Mediterranean coastline with resort living, seasonal rentals, and new developments like New Alamein expanding the market.",
    image: stockImages.beachCoast,
    highlights: ["Rental yield potential", "Resort amenities", "Capital appreciation"],
    startingPrice: "$150,000",
    paymentPlan: "Up to 8 years",
    delivery: "Ready to move / 4 years",
  },
  {
    title: "Ras El Hekma (Solare / Misr Italia)",
    description:
      "One of the Mediterranean's most breathtaking bays, slated to become Egypt's premier world-class tourism and residential mega-hub.",
    image: stockImages.beachResort,
    highlights: ["Breathtaking turquoise waters", "Massive international investment", "Solare Misr Italia project"],
    startingPrice: "$100,000",
    paymentPlan: "Up to 15 years",
    delivery: "4 years",
  },
];

export const roiStats = [
  { label: "NAC Annual Growth", value: "18%", note: "Illustrative market average" },
  { label: "New Cairo Rental Yield", value: "7–9%", note: "Long-term leases" },
  { label: "North Coast Seasonal Yield", value: "10–12%", note: "Managed short-term" },
  { label: "Foreign Buyer Growth", value: "35%", note: "Year-over-year demand" },
];

export const foreignBuyerBenefits = [
  "Legal ownership in approved zones for international buyers",
  "Flexible payment plans in EGP with developer financing",
  "Remote purchase support with virtual tours and digital contracts",
  "Strong currency hedge against inflation in mature districts",
  "Growing tourism and business migration driving demand",
  "Licensed agency support from inquiry to key handover",
];
