import Image from 'next/image';

import { COMPANY_NAME } from '@/shared/constants';

/** Покладіть файл у `public/IMG_4817.png`. */
const HERO_IMAGE_SRC = '/IMG_4817.png';

export function LandingHero() {
    return (
        <section
            id='hero'
            className='relative isolate flex min-h-[min(78vh,52rem)] w-full items-center justify-center overflow-hidden'
            aria-label='Головний банер'
        >
            <Image
                src={HERO_IMAGE_SRC}
                alt=''
                fill
                priority
                sizes='100vw'
                className='scale-[1.02] object-cover object-center'
            />
            <div
                className='absolute inset-0 bg-gradient-to-b from-slate-950/72 via-slate-900/52 to-slate-950/82'
                aria-hidden
            />
            <div
                className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_28%,rgba(34,211,238,0.14),transparent_58%)]'
                aria-hidden
            />
            <div className='relative z-10 max-w-5xl px-6 py-16 text-center sm:py-20'>
                <p className='mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200/90'>
                    Виробництво електроенергії
                </p>
                <h1 className='font-sans text-3xl font-bold uppercase tracking-[0.06em] text-white text-balance drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] sm:text-4xl sm:tracking-[0.08em] md:text-5xl lg:text-6xl'>
                    {COMPANY_NAME}
                </h1>
                <div
                    className='mx-auto mt-6 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-500 shadow-[0_0_24px_rgba(34,211,238,0.45)]'
                    aria-hidden
                />
                <p className='mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/92 md:text-lg md:leading-relaxed'>
                    Товариство здійснює діяльність з виробництва електричної енергії відповідно до вимог чинного
                    законодавства України.
                </p>
            </div>
            <div className='pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block' aria-hidden>
                <div className='flex h-10 w-7 justify-center rounded-full border-2 border-white/50 pt-2'>
                    <div className='h-2 w-1 animate-bounce rounded-full bg-white/80' />
                </div>
            </div>
        </section>
    );
}
