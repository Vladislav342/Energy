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
            className='flex flex-col px-3 pb-3 pt-[max(0.5rem,env(safe-area-inset-top))]'
        >
            <div className='-mx-3 mb-2 flex items-center justify-between gap-3 border-b border-slate-200/55 bg-gradient-to-r from-white via-cyan-50/35 to-white px-4 pb-2.5 pt-2'>
                <span className='text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500'>Навігація</span>
                <span
                    className='h-1 flex-1 max-w-[4.5rem] rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-500 opacity-90 shadow-[0_0_18px_rgba(34,211,238,0.35)]'
                    aria-hidden
                />
            </div>

            <Link
                href='/#hero'
                scroll={false}
                className='-mx-3 flex justify-center overflow-visible rounded-b-xl bg-gradient-to-b from-white to-slate-50/40 px-2 pb-1.5 pt-0.5 ring-1 ring-slate-200/40'
                onClick={(e) => smoothToHero('/#hero', e)}
            >
                <Image
                    src='/logo-without-back.png'
                    alt={COMPANY_NAME}
                    width={480}
                    height={480}
                    className='mx-auto h-auto w-1/2 max-w-none object-contain drop-shadow-[0_8px_20px_rgba(15,23,42,0.06)]'
                />
            </Link>

            <nav
                className='mt-3 rounded-2xl border border-slate-200/55 bg-white/75 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_14px_36px_-28px_rgba(15,23,42,0.28)] ring-1 ring-white/70 backdrop-blur-[8px]'
                aria-label='Головна навігація'
            >
                <LandingNavLinks variant='drawer' onNavigate={onNavigate} />
            </nav>

            <div className='mt-3 rounded-xl border border-slate-200/65 bg-gradient-to-br from-slate-50/95 via-white to-cyan-50/25 px-3 py-2.5 text-[10px] leading-snug text-slate-500 shadow-sm shadow-slate-900/[0.06] ring-1 ring-white/90'>
                Інформація на сайті носить довідковий характер та оновлюється відповідно до вимог законодавства.
            </div>
        </div>
    );
}
