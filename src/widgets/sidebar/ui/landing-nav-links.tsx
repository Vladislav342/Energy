'use client';

import type { MouseEvent, ReactNode } from 'react';
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

type LandingAnchorLinkProps = {
    href: string;
    className?: string;
    children: ReactNode;
};

/** Якорне посилання з плавним скролом на головній (як у навігації). */
export function LandingAnchorLink({ href, className, children }: LandingAnchorLinkProps) {
    const smoothGo = useSmoothLandingNav();

    return (
        <Link href={href} scroll={false} onClick={(e) => smoothGo(href, e)} className={className}>
            {children}
        </Link>
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
        'whitespace-nowrap px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85 transition-colors duration-200 ' +
        'hover:text-[var(--accent)] sm:text-xs';

    const drawerLink =
        'flex w-full items-center px-4 py-3.5 text-[15px] font-medium leading-snug text-slate-200 transition-colors duration-200 ' +
        'hover:bg-white/5 hover:text-white active:bg-white/10';

    return (
        <ul
            className={cn(
                variant === 'bar'
                    ? 'flex min-w-0 max-w-full flex-wrap items-center justify-center gap-x-1 gap-y-1 lg:gap-x-2'
                    : 'flex w-full flex-col divide-y divide-slate-700',
                className,
            )}
        >
            {MAIN_NAV.map((item) => (
                <li key={item.href} className={variant === 'drawer' ? 'w-full' : 'shrink-0'}>
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
