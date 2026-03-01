/*
 * Asset helper — centralizes all image paths.
 *
 * HOW TO USE YOUR OWN PHOTOS:
 * 1. Drop your images into the matching src/assets/ subfolder
 * 2. Import them here and replace the Unsplash URLs
 *
 * Example:
 *   import heroImg from './assets/hero/hero.jpg';
 *   export const HERO_IMAGE = heroImg;
 *
 * Vite will handle bundling, hashing, and optimizing them automatically.
 */

// ── Hero ────────────────────────────────────────────
import heroImg from './assets/hero/hero.png';
export const HERO_IMAGE = heroImg;

// ── Gallery (3D Carousel) ───────────────────────────
// Replace each URL with: import g1 from './assets/gallery/1.jpg'; etc.
export const GALLERY_IMAGES = [
    'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=500&q=80',
    'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=500&q=80',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=500&q=80',
    'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=500&q=80',
    'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=500&q=80',
    'https://images.unsplash.com/photo-1519671282429-b44660ead0a2?w=500&q=80',
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&q=80',
    'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=500&q=80',
    'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&q=80',
    'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=500&q=80',
    'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=500&q=80',
    'https://images.unsplash.com/photo-1513279922550-250d2fd73db0?w=500&q=80',
    'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=500&q=80',
    'https://images.unsplash.com/photo-1516101922849-6e2f6d632dff?w=500&q=80',
    'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=500&q=80',
];

// ── Journey Timeline ────────────────────────────────
// Replace with: import fd from './assets/journey/first-date.jpg'; etc.
export const JOURNEY_IMAGES = {
    firstDate:
        'https://images.unsplash.com/photo-1511376777868-611b54f68947?w=600&q=80',
    firstTrip:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    present:
        'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80',
};

// ── Reasons I Love You ──────────────────────────────
// Replace with: import r1 from './assets/reasons/1.jpg'; etc.
export const REASONS_IMAGES = [
    'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&q=80',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=80',
    'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&q=80',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
];
