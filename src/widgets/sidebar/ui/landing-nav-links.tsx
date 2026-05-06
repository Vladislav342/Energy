'use client';

import type { MouseEvent } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';

import { MAIN_NAV } from '@/shared/config';
import { cn } from '@/shared/lib';

export function useSmoothLandingNav(onDone?: () => void) {
    const pathname = usePathname();

    return useCallback(
        (href: string, e?: MouseEvent<HTMLAnchorElement>) => {
            if (pathname !== '/' || !href.startsWith('/#')) return false;
            const id = href.slice(2);
            const el = document.getElementById(id);
            if (!el) return false;

            e?.preventDefault();
            const reduceMotion =
                typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
            window.history.pushState(null, '', href);
            onDone?.();
            return true;
        },
        [pathname, onDone],
    );
}

type LandingNavLinksProps = {
    variant: 'bar' | 'drawer';
    onNavigate?: () => void;
    className?: string;
};

export function LandingNavLinks({ variant, onNavigate, className }: LandingNavLinksProps) {
    const smoothGo = useSmoothLandingNav(onNavigate);

    const barLink =
        'whitespace-nowrap rounded-full px-2.5 py-1.5 text-[12px] font-medium text-slate-600 transition-all duration-200 sm:px-3 sm:text-[13px] lg:py-2 xl:px-3.5 xl:text-sm ' +
        'hover:bg-gradient-to-b hover:from-white hover:to-slate-100 hover:text-slate-900 hover:shadow-md hover:shadow-slate-200/70 hover:ring-1 hover:ring-slate-200/80 ' +
        'active:scale-[0.98]';

    const drawerLink =
        'inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full px-3.5 py-2.5 text-[13px] font-semibold text-slate-700 shadow-[0_10px_22px_-16px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/55 transition-all duration-200 motion-reduce:transition-none ' +
        'bg-gradient-to-b from-white to-slate-50/95 hover:from-cyan-50/85 hover:to-white hover:text-slate-900 hover:shadow-[0_14px_28px_-14px_rgba(34,211,238,0.35)] hover:ring-cyan-300/45 active:scale-[0.97]';

    return (
        <ul
            className={cn(
                variant === 'bar'
                    ? 'flex min-w-0 max-w-full flex-wrap items-center justify-center gap-x-0.5 gap-y-1 py-0.5 sm:gap-x-1 sm:gap-y-1.5 lg:gap-x-1.5 lg:gap-y-2'
                    : 'flex flex-row flex-wrap items-center justify-center gap-x-2 gap-y-2.5 pt-0.5 pb-0.5',
                className,
            )}
        >
            {MAIN_NAV.map((item) => (
                <li key={item.href} className='shrink-0'>
                    <Link
                        href={item.href}
                        scroll={false}
                        onClick={(e) => smoothGo(item.href, e)}
                        className={variant === 'bar' ? barLink : drawerLink}
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
