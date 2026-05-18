/** Файли в `public/` (IMG_4817 — hero). Фото секцій зсунуті: «Про компанію» ← колишнє overview тощо. */
export const SITE_GALLERY = {
    hero: '/IMG_4817.png',
    about: '/IMG_4805.JPG',
    license: '/IMG_4806.JPG',
    capacitySolar: '/IMG_4807.JPG',
    capacityCogeneration: '/IMG_4810.JPG',
    production: '/IMG_4811.JPG',
    environment: '/IMG_4812.JPG',
    disclosure: '/IMG_4813.JPG',
    financial: '/IMG_4814.JPG',
} as const;

export type SiteGalleryKey = keyof typeof SITE_GALLERY;
