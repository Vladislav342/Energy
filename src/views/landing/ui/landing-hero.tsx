import Image from 'next/image';

import { SITE_GALLERY } from '@/shared/config';
import { COMPANY_NAME } from '@/shared/constants';
import { LandingAnchorLink } from '@/widgets/sidebar/ui/landing-nav-links';

export function LandingHero() {
    return (
        <section
            id='hero'
            className='relative isolate flex min-h-[min(100svh,56rem)] w-full items-end overflow-hidden pb-16 pt-[calc(var(--header-h)+2rem)] sm:items-center sm:pb-20'
            aria-label='Головний банер'
        >
            <Image
                src={SITE_GALLERY.hero}
                alt=''
                fill
                priority
                sizes='100vw'
                className='scale-[1.03] object-cover object-center'
            />
            <div
                className='absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-slate-950/35'
                aria-hidden
            />
            <div
                className='pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40'
                aria-hidden
            />

            <div className='relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-16'>
                <div className='max-w-3xl'>
                    <p className='section-eyebrow mb-4'>Виробництво електроенергії</p>
                    <h1 className='font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl'>
                        {COMPANY_NAME}
                    </h1>
                    {/* <p className='mt-6 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg'>
                        Товариство здійснює діяльність з виробництва електричної енергії відповідно до вимог чинного
                        законодавства України.
                    </p> */}
                    <div className='mt-8 flex flex-wrap items-center gap-4'>
                        <LandingAnchorLink href='/#about' className='btn-accent'>
                            Дізнатися більше
                        </LandingAnchorLink>
                        <LandingAnchorLink href='/#contacts' className='btn-ghost-light'>
                            Контакти
                        </LandingAnchorLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
