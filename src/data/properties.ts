import type { Property, PropertyLocation, PropertyType } from "./types";
import { stockImages } from "../lib/images";

export const properties: Property[] = [
  {
    slug: "nac-skyline-residence",
    title: "NAC Skyline Residence",
    location: "New Administrative Capital",
    type: "NAC",
    price: 4500000,
    currency: "EGP",
    beds: 3,
    baths: 3,
    sqm: 185,
    featured: true,
    images: [
      stockImages.citySkyline,
      stockImages.modernBuilding,
      stockImages.modernHome,
    ],
    description:
      "Premium apartment in the heart of the New Administrative Capital with panoramic skyline views, smart home features, and access to world-class amenities including parks, malls, and business districts.",
    amenities: ["Smart Home", "Parking", "Gym", "Pool", "24/7 Security", "Green Spaces"],
    paymentPlan: {
      downPaymentPercent: 10,
      installmentYears: 8,
      notes: "Flexible developer payment plans available for qualified buyers.",
    },
  },
  {
    slug: "crystal-heights-villa",
    title: "Crystal Heights Villa",
    location: "New Cairo",
    type: "Residential",
    price: 12500000,
    currency: "EGP",
    beds: 5,
    baths: 6,
    sqm: 420,
    featured: true,
    images: [
      stockImages.luxuryVilla,
      stockImages.villaPool,
      stockImages.livingRoom,
    ],
    description:
      "Stand-alone luxury villa in a gated New Cairo compound with private garden, maid's room, and premium finishes throughout.",
    amenities: ["Private Garden", "Maid Room", "Double Garage", "Club Access", "Generator"],
    paymentPlan: {
      downPaymentPercent: 15,
      installmentYears: 6,
      notes: "Quarterly installments aligned with construction milestones.",
    },
  },
  {
    slug: "azure-coast-chalet",
    title: "Azure Coast Chalet",
    location: "North Coast",
    type: "Coastal",
    price: 6800000,
    currency: "EGP",
    beds: 3,
    baths: 2,
    sqm: 145,
    featured: true,
    images: [
      stockImages.beachCoast,
      stockImages.beachResort,
      stockImages.beachAerial,
    ],
    description:
      "Beachfront chalet steps from the Mediterranean with resort-style facilities, perfect for summer retreats and high rental yield.",
    amenities: ["Beach Access", "Pool", "Marina", "Restaurant", "Concierge"],
    paymentPlan: {
      downPaymentPercent: 20,
      installmentYears: 5,
      notes: "Seasonal rental management available through partner operators.",
    },
  },
  {
    slug: "capital-tower-office",
    title: "Capital Tower Office Suite",
    location: "New Administrative Capital",
    type: "Commercial",
    price: 3200000,
    currency: "EGP",
    beds: 0,
    baths: 2,
    sqm: 95,
    featured: true,
    images: [
      stockImages.officeBuilding,
      stockImages.officeInterior,
      stockImages.cityNight,
    ],
    description:
      "Grade-A office space in NAC's central business district, ideal for corporate headquarters or investment with strong lease demand.",
    amenities: ["Reception", "Meeting Rooms", "High-Speed Internet", "Parking", "Elevator"],
    paymentPlan: {
      downPaymentPercent: 25,
      installmentYears: 4,
      notes: "Corporate lease-back options available on request.",
    },
  },
  {
    slug: "palm-gardens-apartment",
    title: "Palm Gardens Apartment",
    location: "6th October",
    type: "Residential",
    price: 2800000,
    currency: "EGP",
    beds: 2,
    baths: 2,
    sqm: 120,
    featured: false,
    images: [
      stockImages.apartment,
      stockImages.apartmentInterior,
      stockImages.livingRoom,
    ],
    description:
      "Modern apartment in a family-friendly compound with landscaped gardens and excellent connectivity to major highways.",
    amenities: ["Garden View", "Parking", "Playground", "Security", "Maintenance"],
    paymentPlan: {
      downPaymentPercent: 10,
      installmentYears: 7,
      notes: "Move-in ready with immediate handover.",
    },
  },
  {
    slug: "marina-bay-penthouse",
    title: "Marina Bay Penthouse",
    location: "North Coast",
    type: "Coastal",
    price: 18500000,
    currency: "EGP",
    beds: 4,
    baths: 5,
    sqm: 310,
    featured: false,
    images: [
      stockImages.beachAerial,
      stockImages.beachResort,
      stockImages.villaPool,
    ],
    description:
      "Exclusive penthouse with private rooftop terrace overlooking the marina, premium finishes, and full resort privileges.",
    amenities: ["Rooftop Terrace", "Jacuzzi", "Private Elevator", "Marina View", "Valet"],
    paymentPlan: {
      downPaymentPercent: 30,
      installmentYears: 5,
      notes: "Limited units remaining — priority viewing for serious buyers.",
    },
  },
  {
    slug: "zayed-business-plaza",
    title: "Zayed Business Plaza Unit",
    location: "Sheikh Zayed",
    type: "Commercial",
    price: 4100000,
    currency: "EGP",
    beds: 0,
    baths: 1,
    sqm: 78,
    featured: false,
    images: [
      stockImages.officeInterior,
      stockImages.officeBuilding,
      stockImages.modernBuilding,
    ],
    description:
      "Retail-commercial unit on Sheikh Zayed's main corridor with high foot traffic and strong appreciation potential.",
    amenities: ["Street Frontage", "Storage", "AC", "Security", "Signage Rights"],
    paymentPlan: {
      downPaymentPercent: 20,
      installmentYears: 6,
      notes: "Suitable for retail, clinic, or showroom use.",
    },
  },
  {
    slug: "green-district-townhouse",
    title: "Green District Townhouse",
    location: "New Administrative Capital",
    type: "NAC",
    price: 7200000,
    currency: "EGP",
    beds: 4,
    baths: 4,
    sqm: 265,
    featured: false,
    images: [
      stockImages.modernHome,
      stockImages.luxuryVilla,
      stockImages.citySkyline,
    ],
    description:
      "Contemporary townhouse in NAC's Green River district with park views, community clubhouse, and sustainable design.",
    amenities: ["Park View", "Terrace", "Storage", "Clubhouse", "Cycling Paths"],
    paymentPlan: {
      downPaymentPercent: 10,
      installmentYears: 9,
      notes: "Early-bird pricing for off-plan reservations.",
    },
  },
  {
    slug: "cairo-skyline-loft",
    title: "Cairo Skyline Loft",
    location: "New Cairo",
    type: "Residential",
    price: 5400000,
    currency: "EGP",
    beds: 3,
    baths: 3,
    sqm: 175,
    featured: false,
    images: [
      stockImages.apartmentInterior,
      stockImages.livingRoom,
      stockImages.apartment,
    ],
    description:
      "Designer loft with double-height ceilings and floor-to-ceiling windows, located minutes from major malls and international schools.",
    amenities: ["Loft Design", "Balcony", "Gym", "Concierge", "Underground Parking"],
    paymentPlan: {
      downPaymentPercent: 15,
      installmentYears: 6,
      notes: "Furnishing packages available through design partners.",
    },
  },
  {
    slug: "sahel-sunset-villa",
    title: "Sahel Sunset Villa",
    location: "North Coast",
    type: "Coastal",
    price: 22000000,
    currency: "EGP",
    beds: 6,
    baths: 7,
    sqm: 480,
    featured: false,
    images: [
      stockImages.villaPool,
      stockImages.beachCoast,
      stockImages.beachAerial,
    ],
    description:
      "Ultra-luxury beach villa with infinity pool, private beach access, and smart home automation throughout.",
    amenities: ["Infinity Pool", "Private Beach", "Home Cinema", "Staff Quarters", "Smart Home"],
    paymentPlan: {
      downPaymentPercent: 35,
      installmentYears: 4,
      notes: "Turnkey delivery with interior design included.",
    },
  },
];

export const propertyTypes: PropertyType[] = [
  "Residential",
  "Commercial",
  "Coastal",
  "NAC",
];

export const propertyLocations: PropertyLocation[] = [
  "New Administrative Capital",
  "New Cairo",
  "North Coast",
  "6th October",
  "Sheikh Zayed",
];

export const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under 3M EGP", min: 0, max: 3000000 },
  { label: "3M – 7M EGP", min: 3000000, max: 7000000 },
  { label: "7M – 12M EGP", min: 7000000, max: 12000000 },
  { label: "12M+ EGP", min: 12000000, max: Infinity },
] as const;

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured);
}
