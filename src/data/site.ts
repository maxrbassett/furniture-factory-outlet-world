/**
 * Single source of truth for site copy, contact details and hours.
 *
 * Frontend proof-of-concept. This is the FLAGSHIP of a five-site pitch: the
 * inventory/catalog experience is the centerpiece. The build is deliberately
 * honest about what's real and what's a realistic stand-in.
 *
 * Provenance: this business has NOT been confirmed first-party. Everything that
 * could mislead a customer if wrong — exact address, phone, hours, prices,
 * financing terms, delivery radius — is marked `// POC` and `// CONFIRM` and
 * must be verified with the owner before launch. Public sources suggest a
 * Waxhaw, NC location on Lancaster Hwy with Thu–Sat hours, but treat all of it
 * as unconfirmed. See README.md.
 */

export type DayKey =
  | 'monday' | 'tuesday' | 'wednesday' | 'thursday'
  | 'friday' | 'saturday' | 'sunday';

export interface HoursEntry {
  label: string;
  display: string;
  open: number | null; // minutes from midnight, null = closed
  close: number | null;
}

// --- Identity ------------------------------------------------------------------
export const name = 'Furniture Factory Outlet World';
export const shortName = 'Factory Outlet World';

// POC trust line — no founding year confirmed. // CONFIRM
export const establishedLine = 'Quality home furnishings at outlet prices';

export const heroEyebrow = 'Furniture outlet · Waxhaw, NC'; // CONFIRM area
export const heroTagline = 'Beautiful rooms, factory-direct prices.';
export const heroSubhead =
  'Shop sofas, sectionals, bedrooms and dining — name-brand quality without the showroom markup. Real pieces, ready to take home or delivered to your door.';

// --- Navigation ----------------------------------------------------------------
export const nav = [
  { label: 'Shop Catalog', href: '/catalog' },
  { label: 'Shop by Category', href: '/#categories' },
  { label: 'Shop by Room', href: '/#rooms' },
  { label: 'Why Outlet', href: '/#value' },
  { label: 'Visit', href: '/#visit' },
];

// --- Promo / announcement bar --------------------------------------------------
// Their identity IS overstock liquidation + constant fresh finds, so the site-wide
// promo points at "Just In" (this store's version of "the sale").
export const promo = {
  text: 'Overstock Liquidation — fresh arrivals every week',
  cta: 'See what’s just in',
  href: '/#just-in',
};

// --- Trust bar -----------------------------------------------------------------
// Keep these TRUE. Family-owned + local are safe; delivery specifics are POC.
export const trustPoints = [
  'Family-owned & operated', // CONFIRM
  'Outlet & overstock pricing',
  'New arrivals every week',
  'Local delivery in the Waxhaw area', // CONFIRM radius
];

// Public sources note founder Perry Brown, "the Furniture Man" (TV advertising,
// family business). Verify wording + that the owner wants to invoke it. // CONFIRM
export const heritageLine =
  'A Waxhaw family business — carrying on the legacy of Perry Brown, “the Furniture Man.”';

// --- Contact / location --------------------------------------------------------
// From public business listings (Facebook / directories). Verify with owner. // CONFIRM
export const phone = '(704) 843-2128';
export const phoneTel = '+17048432128';

// From public business listings. Street + city + state matched; verify ZIP. // CONFIRM
export const address = {
  street: '8315 Lancaster Hwy',
  city: 'Waxhaw',
  state: 'NC',
  zip: '28173', // public sources; // CONFIRM
};
export const addressOneLine = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;

// POC approximate coordinates for Waxhaw, NC. // CONFIRM
export const geo = { lat: 34.9246, lng: -80.7434 };

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${name}, ${address.city}, ${address.state}`,
)}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${name}, ${address.city}, ${address.state}`,
)}`;

// Generic social slot. We do NOT surface or name any specific social network in
// the visible copy; this is left here only so the owner can drop in a confirmed
// profile link later. // CONFIRM
export const socialUrl = ''; // POC: empty until owner confirms an official profile

export const wayfinding =
  'On Lancaster Hwy in the Waxhaw area — call ahead for the exact address and easiest parking.'; // POC // CONFIRM

// --- Hours ---------------------------------------------------------------------
// POC: public sources hint at Thu–Sat hours but this is UNCONFIRMED. // CONFIRM
export const hours: Record<DayKey, HoursEntry> = {
  monday: { label: 'Monday', display: 'Closed', open: null, close: null }, // POC // CONFIRM
  tuesday: { label: 'Tuesday', display: 'Closed', open: null, close: null }, // POC // CONFIRM
  wednesday: { label: 'Wednesday', display: 'Closed', open: null, close: null }, // POC // CONFIRM
  thursday: { label: 'Thursday', display: '10:00 AM – 6:00 PM', open: 600, close: 1080 }, // POC // CONFIRM
  friday: { label: 'Friday', display: '10:00 AM – 6:00 PM', open: 600, close: 1080 }, // POC // CONFIRM
  saturday: { label: 'Saturday', display: '10:00 AM – 5:00 PM', open: 600, close: 1020 }, // POC // CONFIRM
  sunday: { label: 'Sunday', display: 'Closed', open: null, close: null }, // POC // CONFIRM
};

export const hoursOrder: DayKey[] = [
  'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',
];

export const openingHoursSpec = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Thursday', 'Friday'],
    opens: '10:00',
    closes: '18:00', // POC // CONFIRM
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Saturday'],
    opens: '10:00',
    closes: '17:00', // POC // CONFIRM
  },
];

// --- Value props (all POC — confirm terms) -------------------------------------
export const valueProps = [
  {
    icon: 'tag',
    title: 'Outlet pricing',
    blurb: 'Factory-direct and overstock pricing on name-brand quality — the same pieces, without the full-retail markup.', // POC // CONFIRM
  },
  {
    icon: 'truck',
    title: 'Local delivery',
    blurb: 'Delivery available throughout the area, plus take-it-today on most in-stock pieces.', // POC: confirm radius & fees // CONFIRM
  },
  {
    icon: 'card',
    title: 'Easy financing',
    blurb: 'Flexible financing options to spread the cost — ask in store about current plans.', // POC: confirm provider & terms // CONFIRM
  },
  {
    icon: 'leaf',
    title: 'Quality you can feel',
    blurb: 'Hardwood frames, real upholstery, solid construction — pieces chosen to last, not just to look good online.', // POC // CONFIRM
  },
];

// --- Shop-by-room tiles (link into the catalog with a pre-applied filter) ------
export const rooms = [
  { key: 'Living Room', label: 'Living Room', blurb: 'Sofas, sectionals, recliners & accent tables.' },
  { key: 'Bedroom', label: 'Bedroom', blurb: 'Beds, dressers & mattresses for every size.' },
  { key: 'Dining', label: 'Dining', blurb: 'Tables, sets & seating to gather around.' },
  { key: 'Office', label: 'Home Office', blurb: 'Desks and storage for work-from-home.' },
  { key: 'Outdoor', label: 'Outdoor', blurb: 'Patio and porch pieces built for the elements.' },
];

// --- Trust / reviews strip -----------------------------------------------------
// POC: these are CLEARLY-LABELED placeholder quotes, NOT real attributed reviews.
// Do not present as genuine customer testimonials until replaced. // CONFIRM
export const reviews = [
  {
    quote: 'Placeholder review — replace with a real, permissioned customer quote before launch.',
    attribution: 'Sample customer, City', // POC // CONFIRM
  },
  {
    quote: 'Placeholder review — found a sofa we loved for far less than the big-box store. (Example copy.)',
    attribution: 'Sample customer, City', // POC // CONFIRM
  },
  {
    quote: 'Placeholder review — delivery was easy and the piece felt high-end. (Example copy.)',
    attribution: 'Sample customer, City', // POC // CONFIRM
  },
];

// --- Demo notice ---------------------------------------------------------------
export const demoNotice = {
  title: 'Demo — full feature coming soon',
  body:
    'This is a preview site, so this action isn’t connected yet. In the live version this would reserve the piece or check live availability. For now, please call the store to confirm.', // POC
};

// --- SEO -----------------------------------------------------------------------
export const seo = {
  title: 'Furniture Factory Outlet World | Furniture Outlet near Waxhaw, NC',
  description:
    'Furniture Factory Outlet World — sofas, sectionals, bedroom sets, dining and more at factory-direct outlet prices near Waxhaw, NC. Delivery and financing available.', // POC claims // CONFIRM
  priceRange: '$$',
  ogAlt: 'Furniture Factory Outlet World — warm, editorial furniture showroom (placeholder).',
};
