export type PropertyType = "Residential" | "Commercial" | "Coastal" | "NAC";
export type PropertyLocation =
  | "New Administrative Capital"
  | "New Cairo"
  | "North Coast"
  | "6th October"
  | "Sheikh Zayed";

export interface Property {
  slug: string;
  title: string;
  location: PropertyLocation;
  type: PropertyType;
  price: number;
  currency: "EGP" | "USD";
  beds: number;
  baths: number;
  sqm: number;
  featured: boolean;
  images: string[];
  description: string;
  amenities: string[];
  paymentPlan: {
    downPaymentPercent: number;
    installmentYears: number;
    notes: string;
  };
}
