/**
 * Placeholder inventory dataset (POC).
 *
 * Every item below is INVENTED demo data so the catalog looks fully stocked —
 * names, prices, dimensions and availability are realistic stand-ins, NOT a real
 * catalog. Replace wholesale with the owner's true inventory (or a feed) before
 * launch. Prices are illustrative outlet prices only. // CONFIRM
 *
 * `img` is a parametric placeholder reference (see ProductPlaceholder.astro) — no
 * real photos are scraped or hotlinked.
 */

export type Room = 'Living Room' | 'Bedroom' | 'Dining' | 'Office' | 'Outdoor';

export type Category =
  | 'Sofas' | 'Sectionals' | 'Beds' | 'Dining Sets' | 'Recliners'
  | 'Tables' | 'Dressers' | 'Mattresses' | 'Outdoor' | 'Office';

export interface Product {
  id: string;
  name: string;
  category: Category;
  room: Room;
  price: number; // USD, POC
  style: string;
  color: string;
  material: string;
  dimensions: string; // W x D x H, inches (POC)
  inStock: boolean;
  featured: boolean;
  blurb: string;
}

export const categories: Category[] = [
  'Sofas', 'Sectionals', 'Beds', 'Dining Sets', 'Recliners',
  'Tables', 'Dressers', 'Mattresses', 'Outdoor', 'Office',
];

export const roomsList: Room[] = ['Living Room', 'Bedroom', 'Dining', 'Office', 'Outdoor'];

export const styles = ['Modern', 'Mid-Century', 'Farmhouse', 'Transitional', 'Industrial', 'Coastal', 'Traditional'];

export const colors = ['Walnut', 'Espresso', 'Oatmeal', 'Charcoal', 'Sage', 'Cognac', 'Natural', 'Slate', 'Cream', 'Navy'];

export const inventory: Product[] = [
  // --- Sofas ---
  { id: 'harlow-sofa', name: 'Harlow 84" Sofa', category: 'Sofas', room: 'Living Room', price: 899, style: 'Mid-Century', color: 'Oatmeal', material: 'Performance linen', dimensions: '84 x 38 x 34', inStock: true, featured: true, blurb: 'A clean-lined three-seater with tapered wood legs and deep, sink-in cushions.' },
  { id: 'monroe-sofa', name: 'Monroe Roll-Arm Sofa', category: 'Sofas', room: 'Living Room', price: 1049, style: 'Traditional', color: 'Cognac', material: 'Top-grain leather', dimensions: '88 x 39 x 36', inStock: true, featured: false, blurb: 'Classic rolled arms in supple cognac leather that only gets better with age.' },
  { id: 'dunes-sofa', name: 'Dunes Slipcover Sofa', category: 'Sofas', room: 'Living Room', price: 749, style: 'Coastal', color: 'Cream', material: 'Washable cotton blend', dimensions: '82 x 37 x 33', inStock: false, featured: false, blurb: 'A breezy, washable slipcover sofa made for real life and sandy feet.' },
  { id: 'aspen-loveseat', name: 'Aspen Loveseat', category: 'Sofas', room: 'Living Room', price: 599, style: 'Transitional', color: 'Sage', material: 'Velvet', dimensions: '60 x 36 x 33', inStock: true, featured: false, blurb: 'A compact sage velvet loveseat — perfect for apartments and cozy corners.' },
  { id: 'foundry-sofa', name: 'Foundry Tufted Sofa', category: 'Sofas', room: 'Living Room', price: 979, style: 'Industrial', color: 'Charcoal', material: 'Distressed faux leather', dimensions: '85 x 38 x 32', inStock: true, featured: false, blurb: 'Button-tufted and low-slung, with a worn-in charcoal finish.' },

  // --- Sectionals ---
  { id: 'belmont-sectional', name: 'Belmont L-Sectional', category: 'Sectionals', room: 'Living Room', price: 1599, style: 'Modern', color: 'Slate', material: 'Performance weave', dimensions: '112 x 84 x 34', inStock: true, featured: true, blurb: 'A roomy L-shape with a reversible chaise and family-proof performance fabric.' },
  { id: 'cove-sectional', name: 'Cove Modular Sectional', category: 'Sectionals', room: 'Living Room', price: 2199, style: 'Modern', color: 'Oatmeal', material: 'Boucle', dimensions: '128 x 92 x 33', inStock: true, featured: true, blurb: 'Five modular pieces in soft boucle — rearrange it however your room flows.' },
  { id: 'rainier-sectional', name: 'Rainier Sleeper Sectional', category: 'Sectionals', room: 'Living Room', price: 1899, style: 'Transitional', color: 'Navy', material: 'Microfiber', dimensions: '116 x 88 x 35', inStock: false, featured: false, blurb: 'A pull-out queen sleeper hides inside this deep navy sectional.' },
  { id: 'oslo-sectional', name: 'Oslo Curved Sectional', category: 'Sectionals', room: 'Living Room', price: 2399, style: 'Mid-Century', color: 'Cognac', material: 'Bonded leather', dimensions: '120 x 80 x 32', inStock: true, featured: false, blurb: 'A sculptural curved sectional that turns the living room into the main event.' },

  // --- Beds ---
  { id: 'wren-platform-bed', name: 'Wren Platform Bed (Queen)', category: 'Beds', room: 'Bedroom', price: 649, style: 'Mid-Century', color: 'Walnut', material: 'Solid acacia', dimensions: '64 x 86 x 42', inStock: true, featured: true, blurb: 'A low walnut platform bed with a slatted headboard and no box-spring needed.' },
  { id: 'harbor-uph-bed', name: 'Harbor Upholstered Bed (King)', category: 'Beds', room: 'Bedroom', price: 899, style: 'Transitional', color: 'Oatmeal', material: 'Linen-blend upholstery', dimensions: '80 x 88 x 56', inStock: true, featured: false, blurb: 'A tall, channel-tufted headboard in soft oatmeal linen.' },
  { id: 'forge-canopy-bed', name: 'Forge Canopy Bed (Queen)', category: 'Beds', room: 'Bedroom', price: 1099, style: 'Industrial', color: 'Charcoal', material: 'Powder-coated steel', dimensions: '64 x 86 x 78', inStock: false, featured: false, blurb: 'A minimalist black steel canopy frame that makes a quiet statement.' },
  { id: 'maple-storage-bed', name: 'Maple Storage Bed (Full)', category: 'Beds', room: 'Bedroom', price: 779, style: 'Farmhouse', color: 'Natural', material: 'Solid pine', dimensions: '57 x 80 x 48', inStock: true, featured: false, blurb: 'Four roomy drawers tuck into the base of this honest farmhouse bed.' },

  // --- Dining Sets ---
  { id: 'birch-dining-set', name: 'Birch 5-Piece Dining Set', category: 'Dining Sets', room: 'Dining', price: 749, style: 'Farmhouse', color: 'Natural', material: 'Solid rubberwood', dimensions: '60 x 36 x 30', inStock: true, featured: true, blurb: 'A farmhouse table with four ladder-back chairs — seats four comfortably.' },
  { id: 'slate-dining-set', name: 'Slate 7-Piece Dining Set', category: 'Dining Sets', room: 'Dining', price: 1199, style: 'Modern', color: 'Charcoal', material: 'Engineered wood & metal', dimensions: '72 x 38 x 30', inStock: true, featured: false, blurb: 'A long six-seater with a matte charcoal top and upholstered chairs.' },
  { id: 'verona-counter-set', name: 'Verona Counter-Height Set', category: 'Dining Sets', room: 'Dining', price: 899, style: 'Transitional', color: 'Espresso', material: 'Hardwood veneer', dimensions: '54 x 54 x 36', inStock: false, featured: false, blurb: 'A pub-height square table with four cushioned stools for casual meals.' },
  { id: 'cape-bistro-set', name: 'Cape 3-Piece Bistro Set', category: 'Dining Sets', room: 'Dining', price: 329, style: 'Coastal', color: 'Cream', material: 'Painted hardwood', dimensions: '30 x 30 x 30', inStock: true, featured: false, blurb: 'A sweet little two-seater for breakfast nooks and small kitchens.' },

  // --- Recliners ---
  { id: 'tamryn-recliner', name: 'Tamryn Power Recliner', category: 'Recliners', room: 'Living Room', price: 649, style: 'Transitional', color: 'Cognac', material: 'Faux leather', dimensions: '36 x 40 x 41', inStock: true, featured: true, blurb: 'Power recline with a USB port and a hidden cup holder — settle in.' },
  { id: 'glen-rocker-recliner', name: 'Glen Rocker Recliner', category: 'Recliners', room: 'Living Room', price: 529, style: 'Traditional', color: 'Sage', material: 'Chenille', dimensions: '34 x 38 x 40', inStock: true, featured: false, blurb: 'A gentle rocker-recliner in cozy sage chenille — nursery-room favorite.' },
  { id: 'apex-massage-recliner', name: 'Apex Massage Recliner', category: 'Recliners', room: 'Living Room', price: 899, style: 'Modern', color: 'Charcoal', material: 'Bonded leather', dimensions: '35 x 41 x 42', inStock: false, featured: false, blurb: 'Heat and massage in a sleek charcoal shell for the ultimate wind-down.' },
  { id: 'porter-pushback', name: 'Porter Pushback Recliner', category: 'Recliners', room: 'Living Room', price: 449, style: 'Mid-Century', color: 'Walnut', material: 'Velvet & wood', dimensions: '32 x 36 x 39', inStock: true, featured: false, blurb: 'A trim pushback recliner that reads as an accent chair, reclines like a dream.' },

  // --- Tables ---
  { id: 'linden-coffee-table', name: 'Linden Coffee Table', category: 'Tables', room: 'Living Room', price: 279, style: 'Mid-Century', color: 'Walnut', material: 'Solid walnut', dimensions: '48 x 24 x 18', inStock: true, featured: false, blurb: 'A warm walnut coffee table with a lower shelf for books and baskets.' },
  { id: 'quarry-coffee-table', name: 'Quarry Stone-Top Table', category: 'Tables', room: 'Living Room', price: 399, style: 'Industrial', color: 'Slate', material: 'Faux concrete & steel', dimensions: '46 x 26 x 17', inStock: true, featured: false, blurb: 'A concrete-look top on a blackened steel base — tough and handsome.' },
  { id: 'ferne-console', name: 'Ferne Entry Console', category: 'Tables', room: 'Living Room', price: 319, style: 'Farmhouse', color: 'Natural', material: 'Solid pine', dimensions: '52 x 16 x 32', inStock: true, featured: false, blurb: 'A slim console for entryways, with two drawers for keys and clutter.' },
  { id: 'orbit-side-table', name: 'Orbit Round Side Table', category: 'Tables', room: 'Living Room', price: 129, style: 'Modern', color: 'Cream', material: 'Lacquered MDF', dimensions: '18 x 18 x 22', inStock: false, featured: false, blurb: 'A pill-shaped pedestal side table that nests neatly beside any sofa.' },
  { id: 'harvest-dining-table', name: 'Harvest Trestle Table', category: 'Tables', room: 'Dining', price: 599, style: 'Farmhouse', color: 'Natural', material: 'Solid oak', dimensions: '78 x 40 x 30', inStock: true, featured: true, blurb: 'A substantial trestle dining table built from solid oak to seat six to eight.' },

  // --- Dressers ---
  { id: 'briar-6drawer', name: 'Briar 6-Drawer Dresser', category: 'Dressers', room: 'Bedroom', price: 599, style: 'Mid-Century', color: 'Walnut', material: 'Walnut veneer', dimensions: '60 x 18 x 32', inStock: true, featured: true, blurb: 'A wide six-drawer dresser with tapered legs and brass-tone pulls.' },
  { id: 'cottage-tallboy', name: 'Cottage Tallboy', category: 'Dressers', room: 'Bedroom', price: 429, style: 'Farmhouse', color: 'Cream', material: 'Painted hardwood', dimensions: '34 x 18 x 50', inStock: true, featured: false, blurb: 'A five-drawer tallboy in soft cream for small bedrooms.' },
  { id: 'noir-dresser', name: 'Noir Lowboy Dresser', category: 'Dressers', room: 'Bedroom', price: 689, style: 'Modern', color: 'Charcoal', material: 'Matte lacquer', dimensions: '64 x 19 x 30', inStock: false, featured: false, blurb: 'A long, handle-less lowboy in matte charcoal with push-to-open drawers.' },
  { id: 'harbor-nightstand', name: 'Harbor Nightstand', category: 'Dressers', room: 'Bedroom', price: 189, style: 'Coastal', color: 'Cream', material: 'Painted hardwood', dimensions: '22 x 16 x 26', inStock: true, featured: false, blurb: 'A two-drawer nightstand with an open shelf for bedtime books.' },

  // --- Mattresses ---
  { id: 'cloudrest-hybrid', name: 'CloudRest Hybrid Mattress (Queen)', category: 'Mattresses', room: 'Bedroom', price: 699, style: 'Modern', color: 'Cream', material: 'Memory foam & coils', dimensions: '60 x 80 x 12', inStock: true, featured: false, blurb: 'A medium-feel hybrid pairing pocket coils with cooling memory foam.' },
  { id: 'evergreen-latex', name: 'Evergreen Latex Mattress (King)', category: 'Mattresses', room: 'Bedroom', price: 999, style: 'Modern', color: 'Natural', material: 'Natural latex', dimensions: '76 x 80 x 11', inStock: true, featured: false, blurb: 'A breathable natural-latex mattress with a responsive, buoyant feel.' },
  { id: 'driftoff-foam', name: 'DriftOff Memory Foam (Full)', category: 'Mattresses', room: 'Bedroom', price: 449, style: 'Modern', color: 'Cream', material: 'Memory foam', dimensions: '53 x 75 x 10', inStock: false, featured: false, blurb: 'A plush all-foam mattress that contours and quiets motion.' },

  // --- Outdoor ---
  { id: 'shoreline-outdoor-set', name: 'Shoreline 4-Piece Patio Set', category: 'Outdoor', room: 'Outdoor', price: 899, style: 'Coastal', color: 'Slate', material: 'All-weather wicker', dimensions: '60 x 30 x 28', inStock: true, featured: true, blurb: 'A loveseat, two chairs and a table in fade-resistant slate wicker.' },
  { id: 'mesa-dining-outdoor', name: 'Mesa Outdoor Dining Set', category: 'Outdoor', room: 'Outdoor', price: 1099, style: 'Modern', color: 'Charcoal', material: 'Powder-coated aluminum', dimensions: '66 x 38 x 29', inStock: true, featured: false, blurb: 'A rust-proof aluminum dining set that seats six on the patio.' },
  { id: 'cabana-lounger', name: 'Cabana Chaise Lounger', category: 'Outdoor', room: 'Outdoor', price: 349, style: 'Coastal', color: 'Natural', material: 'Eucalyptus & sling', dimensions: '26 x 76 x 14', inStock: true, featured: false, blurb: 'An adjustable eucalyptus chaise made for slow poolside afternoons.' },
  { id: 'grove-firepit-set', name: 'Grove Fire-Pit Chat Set', category: 'Outdoor', room: 'Outdoor', price: 1299, style: 'Transitional', color: 'Espresso', material: 'Resin wicker & steel', dimensions: '40 x 40 x 24', inStock: false, featured: false, blurb: 'A propane fire-pit table ringed by four deep-seat chairs.' },

  // --- Office ---
  { id: 'archer-desk', name: 'Archer Writing Desk', category: 'Office', room: 'Office', price: 329, style: 'Mid-Century', color: 'Walnut', material: 'Walnut veneer', dimensions: '48 x 24 x 30', inStock: true, featured: false, blurb: 'A compact walnut writing desk with two drawers and cable management.' },
  { id: 'forge-standing-desk', name: 'Forge Standing Desk', category: 'Office', room: 'Office', price: 549, style: 'Industrial', color: 'Charcoal', material: 'Steel & laminate', dimensions: '55 x 28 x 48', inStock: true, featured: true, blurb: 'A motorized sit-stand desk with memory presets and a sturdy steel base.' },
  { id: 'scholar-bookcase', name: 'Scholar 5-Shelf Bookcase', category: 'Office', room: 'Office', price: 279, style: 'Traditional', color: 'Espresso', material: 'Engineered wood', dimensions: '32 x 14 x 72', inStock: true, featured: false, blurb: 'A tall five-shelf bookcase in espresso for the home library.' },
  { id: 'pivot-task-chair', name: 'Pivot Ergonomic Task Chair', category: 'Office', room: 'Office', price: 239, style: 'Modern', color: 'Slate', material: 'Mesh & nylon', dimensions: '26 x 26 x 44', inStock: false, featured: false, blurb: 'A breathable mesh task chair with lumbar support and adjustable arms.' },
  { id: 'cabin-credenza', name: 'Cabin Office Credenza', category: 'Office', room: 'Office', price: 469, style: 'Farmhouse', color: 'Natural', material: 'Solid pine', dimensions: '60 x 18 x 30', inStock: true, featured: false, blurb: 'A low storage credenza with file drawers and barn-style doors.' },
];

export function getById(id: string): Product | undefined {
  return inventory.find((p) => p.id === id);
}

export function relatedTo(p: Product, limit = 4): Product[] {
  return inventory
    .filter((x) => x.id !== p.id && (x.room === p.room || x.category === p.category))
    .sort((a, b) => Number(b.room === p.room && b.category === p.category) - Number(a.room === p.room && a.category === p.category))
    .slice(0, limit);
}

export const priceBounds = {
  min: Math.min(...inventory.map((p) => p.price)),
  max: Math.max(...inventory.map((p) => p.price)),
};

export function formatPrice(n: number): string {
  return '$' + n.toLocaleString('en-US');
}
