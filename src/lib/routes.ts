/** Routes where the header sits over a full-bleed hero image (home-style). */
export const HERO_OVERLAY_PATHS = ["/", "/about"] as const;

export function isHeroOverlayPath(pathname: string): boolean {
  return HERO_OVERLAY_PATHS.includes(pathname as (typeof HERO_OVERLAY_PATHS)[number]);
}
