/**
 * Image placeholder layer — the seam for real photography.
 *
 * All placeholder images come from picsum.photos (a developer-standard
 * placeholder service). When MDDA supplies official photos, swap these
 * functions to return local paths (e.g. `/images/hero.jpg`) or CMS URLs
 * without touching any page or component.
 *
 * Seeds are deterministic: same seed always returns the same photo.
 */

function picsum(seed: string, width: number, height: number): string {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}

// ─── Hero / Feature ──────────────────────────────────────────────────────────

export const heroImage = picsum("menyamya-highland", 1920, 900);
export const districtLandscapeImage = picsum("morobe-landscape", 1200, 600);
export const cultureImage = picsum("papua-community", 1200, 500);

// ─── LLGs ────────────────────────────────────────────────────────────────────

const LLG_IMAGES: Record<string, string> = {
  "kapao-rural":        picsum("kapao-highland", 800, 450),
  "kome-rural":         picsum("kome-valley", 800, 450),
  "nanima-kariba-rural": picsum("aseki-forest", 800, 450),
  "wapi-rural":         picsum("wapi-river", 800, 450),
};

export function llgImage(slug: string): string {
  return LLG_IMAGES[slug] ?? picsum(`llg-${slug}`, 800, 450);
}

// ─── Programs ─────────────────────────────────────────────────────────────────

const PROGRAM_IMAGES: Record<string, string> = {
  "scholarship-program":          picsum("students-graduation", 800, 450),
  "academic-incentive-program":   picsum("school-students", 800, 450),
  "new-district-office":          picsum("government-building", 800, 450),
  "road-infrastructure":          picsum("mountain-road", 800, 450),
  "health-services":              picsum("health-clinic", 800, 450),
  "agriculture-support":          picsum("tropical-agriculture", 800, 450),
};

export function programImage(slug: string): string {
  return PROGRAM_IMAGES[slug] ?? picsum(`program-${slug}`, 800, 450);
}

// ─── News ────────────────────────────────────────────────────────────────────

const NEWS_IMAGES: Record<string, string> = {
  "loifa-applauds-graduates":          picsum("graduation-ceremony", 800, 450),
  "new-district-office-contract":      picsum("construction-site", 800, 450),
  "academic-incentive-program-launch": picsum("student-awards", 800, 450),
};

export function newsImage(slug: string): string {
  return NEWS_IMAGES[slug] ?? picsum(`news-${slug}`, 800, 450);
}

// ─── Gallery ─────────────────────────────────────────────────────────────────

export function galleryImage(index: number): string {
  const seeds = [
    "district-groundbreaking",
    "graduation-2026",
    "road-works-station",
    "awards-night",
    "community-kapao",
    "adra-partnership",
    "community-kome",
    "community-wapi",
  ];
  const seed = seeds[index] ?? `gallery-${index}`;
  return picsum(seed, 600, 600);
}
