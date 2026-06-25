/**
 * Client-side "New Arrivals" store + card renderer (POC / demo).
 *
 * The Quick-Add tool publishes items here (localStorage); the homepage and the
 * catalog read them back and render cards that match ProductCard.astro so the
 * demo flow is end-to-end: snap → AI-fill → publish → browse & filter.
 *
 * This is intentionally client-only and backend-free — it exists to make the
 * sales demo feel real, not to be production inventory. In the live product
 * this would be a real datastore + image uploads + (optionally) a Facebook
 * cross-post. See the plan / README.
 */

export interface NewArrival {
  id: string;
  name: string;
  category: string;
  room: string;
  price: number;
  style: string;
  color: string;
  material: string;
  dimensions: string;
  inStock: boolean;
  featured: boolean;
  blurb: string;
  img: string; // downscaled base64 data URL of the owner's real photo
  addedAt: number; // epoch ms, for newest-first sorting
}

const STORAGE_KEY = 'ffow:newArrivals';

/** Published items, newest first. Resilient to malformed/old data. */
export function getPublished(): NewArrival[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const items = JSON.parse(raw) as NewArrival[];
    if (!Array.isArray(items)) return [];
    return items
      .filter((i) => i && typeof i.id === 'string')
      .sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0));
  } catch {
    return [];
  }
}

/** Prepend new items to the store. */
export function addPublished(items: NewArrival[]): void {
  const existing = getPublished();
  const next = [...items, ...existing];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

/** Clear all published demo items (used by the "reset demo" control). */
export function clearPublished(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function formatPrice(n: number): string {
  return '$' + Math.round(n).toLocaleString('en-US');
}

function esc(s: string): string {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Build a `.catalog-item` element mirroring ProductCard.astro markup, but with
 * the owner's real photo instead of the SVG placeholder, plus a "Just added"
 * badge. The data-* attributes match exactly what catalog.astro filters on.
 */
export function buildCard(item: NewArrival): HTMLElement {
  const wrap = document.createElement('div');
  wrap.className = 'catalog-item';
  wrap.dataset.id = item.id;
  wrap.dataset.name = item.name;
  wrap.dataset.category = item.category;
  wrap.dataset.room = item.room;
  wrap.dataset.style = item.style;
  wrap.dataset.color = item.color;
  wrap.dataset.price = String(item.price);
  wrap.dataset.instock = String(item.inStock);
  wrap.dataset.featured = String(item.featured);
  wrap.dataset.search =
    `${item.name} ${item.category} ${item.room} ${item.style} ${item.color} ${item.material} ${item.blurb}`.toLowerCase();
  wrap.dataset.newArrival = 'true';

  const stockPill = item.inStock
    ? '<span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-600 bg-sage-500/15 text-sage-700"><span class="h-1.5 w-1.5 rounded-full bg-sage-600"></span>In stock</span>'
    : '<span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-600 bg-walnut-100 text-walnut-600"><span class="h-1.5 w-1.5 rounded-full bg-walnut-400"></span>Made to order</span>';

  const featuredBadge = item.featured
    ? '<span class="absolute right-2 top-2 rounded-full bg-brass-500 px-2.5 py-1 text-[10px] font-700 uppercase tracking-wide text-walnut-900">Featured</span>'
    : '';

  wrap.innerHTML = `
  <article class="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper shadow-sm transition-shadow hover:shadow-md">
    <div class="relative">
      <div class="relative overflow-hidden rounded-[var(--radius-card)]" style="aspect-ratio:4 / 3;">
        <img src="${esc(item.img)}" alt="${esc(item.name)}" class="h-full w-full object-cover" loading="lazy" />
      </div>
      <span class="absolute left-2 top-2 rounded-full bg-sage-600 px-2.5 py-1 text-[10px] font-700 uppercase tracking-wide text-cream">Just added</span>
      ${featuredBadge}
    </div>
    <div class="flex flex-1 flex-col p-4">
      <div class="flex items-start justify-between gap-2">
        <h3 class="font-display text-base font-700 leading-snug text-walnut-700">${esc(item.name)}</h3>
        <span class="shrink-0 text-right">
          <span class="block text-[10px] font-700 uppercase tracking-wide text-sage-700">Outlet price</span>
          <span class="font-display text-xl font-700 leading-none text-brass-700">${formatPrice(item.price)}</span>
        </span>
      </div>
      <p class="mt-1 text-xs font-600 uppercase tracking-wide text-ink-soft/70">${esc(item.category)} · ${esc(item.style)}</p>
      <p class="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft">${esc(item.blurb)}</p>
      <div class="mt-auto flex items-center justify-between gap-2 pt-4">
        ${stockPill}
        <span class="text-sm font-600 text-sage-700">New arrival</span>
      </div>
    </div>
  </article>`;

  return wrap;
}

/**
 * Read an image File and return a downscaled JPEG data URL so localStorage
 * stays small. Falls back to the raw data URL if canvas isn't available.
 */
export function fileToDataURL(file: File, maxEdge = 800): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => {
      const src = String(reader.result);
      const img = new Image();
      img.onerror = () => resolve(src); // fall back to original
      img.onload = () => {
        try {
          const scale = Math.min(1, maxEdge / Math.max(img.width, img.height));
          const w = Math.round(img.width * scale);
          const h = Math.round(img.height * scale);
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          if (!ctx) return resolve(src);
          ctx.drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL('image/jpeg', 0.82));
        } catch {
          resolve(src);
        }
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
  });
}
