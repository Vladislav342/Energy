'use client';

import Image from 'next/image';
import Link from 'next/link';

import { COMPANY_NAME } from '@/shared/constants';

import { LandingNavLinks, useSmoothLandingNav } from './landing-nav-links';

type MainSidebarProps = {
    onNavigate?: () => void;
};

export function MainSidebar({ onNavigate }: MainSidebarProps) {
    const smoothToHero = useSmoothLandingNav(onNavigate);

    return (
        <div
            id='site-sidebar'
            className='flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto overscroll-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
        >
            <div className='shrink-0 border-b border-slate-700 px-5 pb-4 pt-5'>
                <Link
                    href='/#hero'
                    scroll={false}
                    className='flex justify-center'
                    onClick={(e) => smoothToHero('/#hero', e)}
                >
                    <Image
                        src='/logo-without-back2.png'
                        alt={COMPANY_NAME}
                        width={480}
                        height={480}
                        className='h-auto w-[58%] max-w-[11rem] object-contain'
                    />
                </Link>
            </div>

            <nav className='flex-1 px-2 py-5' aria-label='Головна навігація'>
                <LandingNavLinks variant='drawer' onNavigate={onNavigate} />
            </nav>

            <div className='mt-auto shrink-0 border-t border-slate-700 px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] text-[11px] leading-relaxed text-slate-500'>
                Інформація на сайті носить довідковий характер та оновлюється відповідно до вимог законодавства.
            </div>
        </div>
    );
}
