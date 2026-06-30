import type { LucideIcon } from "lucide-react";
import { Building2, Briefcase, LineChart, Plane } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Residential Sales",
    description:
      "Apartments, villas, and townhouses across New Cairo, NAC, October, and Sheikh Zayed — curated for lifestyle and investment.",
    icon: Building2,
  },
  {
    title: "Commercial Properties",
    description:
      "Office units, retail spaces, and mixed-use assets in Egypt's fastest-growing business districts with strong lease potential.",
    icon: Briefcase,
  },
  {
    title: "Property Investment Consultation",
    description:
      "ROI analysis, market reports, and portfolio strategy tailored to your budget and long-term goals.",
    icon: LineChart,
  },
  {
    title: "Relocation & Legal Assistance",
    description:
      "End-to-end support for foreign buyers: ownership structures, contracts, residency guidance, and developer coordination.",
    icon: Plane,
  },
];
