/**
 * "Just In" seed data — real Furniture Factory Outlet World photos.
 *
 * These are actual store photos (dropped into src/assets, served from
 * public/just-in/) with the item + price read off each piece's sticker by hand.
 * In the production product this is exactly what the AI-vision step would
 * produce; here it's seeded so the demo shows real inventory without depending
 * on localStorage.
 *
 * Prices reflect the visible liquidation/closeout sticker on each piece.
 * `// CONFIRM` flags where the sticker was hard to read — verify with the owner.
 * Categories are mapped to the catalog's fixed set; ottomans are filed under
 * "Tables" (cocktail/storage ottomans serve as coffee tables).
 */
import type { NewArrival } from '../scripts/newArrivals';

type Seed = Omit<NewArrival, 'addedAt'>;

// Ordered so the homepage "Just In" strip (first 8) reads as a varied mix
// rather than a row of near-identical ottomans.
const seed: Seed[] = [
  { id: 'ffow-octagon-plaid-ottoman', name: 'Glen Plaid Octagon Storage Ottoman', category: 'Tables', room: 'Living Room', price: 399, style: 'Transitional', color: 'Oatmeal', material: 'Upholstered glen-plaid weave', dimensions: '38 x 38 x 18', inStock: true, featured: true, blurb: 'A roomy octagon storage ottoman in soft gray glen plaid — lift-top storage that doubles as a coffee table.', img: '/just-in/ffow_post4_ottoman_1.jpg' },
  { id: 'ffow-cream-armoire', name: 'Antique Cream Storage Armoire', category: 'Dressers', room: 'Living Room', price: 299, style: 'Farmhouse', color: 'Cream', material: 'Distressed wood', dimensions: '44 x 24 x 72', inStock: true, featured: true, blurb: 'A distressed cream armoire with an upper media cabinet and lower storage — sold as-is at liquidation pricing.', img: '/just-in/ffow_post1_overstock_4.jpg' },
  { id: 'ffow-red-oval-ottoman', name: 'Red Tufted Oval Cocktail Ottoman', category: 'Tables', room: 'Living Room', price: 149, style: 'Traditional', color: 'Red', material: 'Button-tufted upholstery', dimensions: '48 x 30 x 17', inStock: true, featured: false, blurb: 'A button-tufted oval cocktail ottoman in bold red — a true statement centerpiece.', img: '/just-in/ffow_post4_ottoman_4.jpg' },
  { id: 'ffow-white-twin-bed', name: 'Riverside White Cottage Twin Bed', category: 'Beds', room: 'Bedroom', price: 159, style: 'Farmhouse', color: 'White', material: 'Painted wood', dimensions: 'Twin (headboard, footboard & rails)', inStock: true, featured: false, blurb: 'A paneled cottage-style twin bed in crisp white — headboard, footboard and rails included. Riverside Furniture.', img: '/just-in/ffow_post1_overstock_3.jpg' },
  { id: 'ffow-gray-cocktail-ottoman', name: 'Gray Square Cocktail Ottoman', category: 'Tables', room: 'Living Room', price: 399, style: 'Modern', color: 'Slate', material: 'Woven upholstery', dimensions: '40 x 40 x 17', inStock: true, featured: false, blurb: 'A generous square cocktail ottoman in gray tweed — soft underfoot, sturdy enough to use as a table.', img: '/just-in/ffow_post4_ottoman_3.jpg' },
  { id: 'ffow-driftwood-cabinet', name: 'Driftwood Cane-Door Accent Cabinet', category: 'Dressers', room: 'Living Room', price: 150, style: 'Coastal', color: 'Natural', material: 'Wood & woven cane', dimensions: '24 x 16 x 38', inStock: true, featured: false, blurb: 'A coastal accent cabinet in weathered driftwood with woven cane doors and a top drawer.', img: '/just-in/ffow_post1_overstock_2.jpg' }, // CONFIRM price (~$150, sticker blurry)
  { id: 'ffow-sage-ottoman', name: 'Sage Velvet Storage Ottoman', category: 'Tables', room: 'Living Room', price: 79, style: 'Modern', color: 'Sage', material: 'Velvet upholstery', dimensions: '32 x 24 x 16', inStock: true, featured: false, blurb: 'A soft sage velvet storage ottoman — a calm pop of color with a lift-off top.', img: '/just-in/ffow_post4_ottoman_5.jpg' },
  { id: 'ffow-ladder-bookshelf', name: 'Riverside Whitewashed Ladder Bookshelf', category: 'Office', room: 'Living Room', price: 39, style: 'Farmhouse', color: 'Cream', material: 'Whitewashed wood', dimensions: '54 x 16 x 48', inStock: true, featured: false, blurb: 'A whitewashed two-shelf ladder bookshelf with X-bracing — brand new in the box. Riverside Furniture.', img: '/just-in/ffow_post1_overstock_1.jpg' }, // CONFIRM price (sticker reads $39)
  { id: 'ffow-ivory-haven-ottoman', name: 'Ivory Storage Ottoman', category: 'Tables', room: 'Living Room', price: 79, style: 'Modern', color: 'Cream', material: 'Woven upholstery', dimensions: '34 x 26 x 18', inStock: true, featured: false, blurb: 'A clean ivory storage ottoman with hidden storage — Universal Furniture closeout.', img: '/just-in/ffow_post4_ottoman_7.jpg' },
  { id: 'ffow-white-haven-ottoman', name: 'White Storage Ottoman', category: 'Tables', room: 'Living Room', price: 79, style: 'Modern', color: 'Cream', material: 'Woven upholstery', dimensions: '34 x 26 x 18', inStock: true, featured: false, blurb: 'A bright white storage ottoman with a lift-up lid — Universal Furniture closeout.', img: '/just-in/ffow_post4_ottoman_9.jpg' },
  { id: 'ffow-gray-haven-ottoman', name: 'Light Gray Storage Ottoman', category: 'Tables', room: 'Living Room', price: 79, style: 'Modern', color: 'Slate', material: 'Woven upholstery', dimensions: '34 x 26 x 18', inStock: true, featured: false, blurb: 'A light gray storage ottoman with concealed storage — Universal Furniture closeout.', img: '/just-in/ffow_post4_ottoman_10.jpg' },
  { id: 'ffow-cream-glider-ottoman', name: 'Cream Glider Storage Ottoman', category: 'Tables', room: 'Living Room', price: 59, style: 'Modern', color: 'Cream', material: 'Upholstered', dimensions: '20 x 20 x 18', inStock: true, featured: false, blurb: 'A compact cream glider storage ottoman — a handy footstool with a secret compartment.', img: '/just-in/ffow_post4_ottoman_2.jpg' },
];

// Stable, descending timestamps so order is deterministic (array order = newest first).
export const justInSeed: NewArrival[] = seed.map((it, i) => ({
  ...it,
  addedAt: 1719000000000 - i * 60000,
}));
