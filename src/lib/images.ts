/** Reliable image URLs (Pexels CDN + pravatar for portraits). */

export const FALLBACK_PROPERTY =
  "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200";

export function pexels(id: number, width = 1200): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

export function avatar(seed: number, size = 400): string {
  return `https://i.pravatar.cc/${size}?img=${seed}`;
}

/** Curated Pexels IDs by theme */
export const stockImages = {
  hero: pexels(106399, 1920),
  aboutHero: pexels(1396122, 1920),
  testimonialBg: pexels(280222, 1920),
  floorPlan: pexels(1571453, 800),
  citySkyline: pexels(383838, 1200),
  modernBuilding: pexels(323775, 1200),
  luxuryVilla: pexels(1396122, 1200),
  villaPool: pexels(280222, 1200),
  beachCoast: pexels(457881, 1200),
  beachResort: pexels(1029604, 1200),
  beachAerial: pexels(1450360, 1200),
  apartment: pexels(1643383, 1200),
  apartmentInterior: pexels(1571460, 1200),
  officeBuilding: pexels(1181717, 1200),
  officeInterior: pexels(271624, 1200),
  cityNight: pexels(313691, 1200),
  modernHome: pexels(2102587, 1200),
  livingRoom: pexels(1571463, 1200),
  blogMarket: pexels(383838, 1200),
  blogLegal: pexels(1181717, 1200),
  blogCoast: pexels(457881, 1200),
} as const;
