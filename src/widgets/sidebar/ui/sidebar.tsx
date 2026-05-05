'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { COMPANY_NAME } from '@/shared/constants';
import { MAIN_NAV } from '@/shared/config';
import { cn } from '@/shared/lib';

type MainSidebarProps = {
    onNavigate?: () => void
}

export function MainSidebar({ onNavigate }: MainSidebarProps) {
    const pathname = usePathname()

    return (
        <div id='site-sidebar' className='flex h-full flex-col px-2 pb-4'>
            <div className='flex justify-center'>
                <Image src='/logo-without-back.png' alt={COMPANY_NAME} width={250} height={250} />
                {/* <p className='text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-200/90'>Energy</p>
                <p className='mt-1 font-serif text-lg font-semibold leading-snug text-white'>{COMPANY_NAME}</p>
                <p className='mt-2 text-xs leading-relaxed text-slate-400'>Виробництво електричної енергії</p> */}
            </div>
            <nav className='flex flex-1 flex-col gap-0.5 overflow-y-auto pr-1' aria-label='Головна навігація'>
                {MAIN_NAV.map((item) => {
                    const active =
                        item.href === '/'
                            ? pathname === '/'
                            : pathname === item.href || pathname.startsWith(`${item.href}/`)
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={onNavigate}
                            className={cn(
                                'ml-1 mt-0.5 rounded-lg px-2.5 py-2.5 text-sm font-medium transition-colors',
                                active
                                    ? 'bg-amber-50 text-amber-950 ring-1 ring-amber-200/80'
                                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                            )}
                        >
                            {item.label}
                        </Link>
                    )
                })}
            </nav>
            <div className='mt-6 border-t border-slate-200 pt-4 text-[11px] leading-relaxed text-slate-500'>
                Інформація на сайті носить довідковий характер та оновлюється відповідно до вимог законодавства.
            </div>
        </div>
    )
};


// ? 'bg-white/10 text-amber-100 ring-1 ring-amber-400/40'
//                                     : 'text-slate-300 hover:bg-white/5 hover:text-white',


// <div className='mt-6 border-t border-white/10 pt-4 text-[11px] leading-relaxed text-slate-500'></div>
