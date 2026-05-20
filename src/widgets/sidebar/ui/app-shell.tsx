'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { COMPANY_NAME } from '@/shared/constants';
import { cn } from '@/shared/lib';

import { LandingNavLinks, useSmoothLandingNav } from './landing-nav-links';
import { MainSidebar } from './sidebar';

type AppShellProps = {
    children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
    const [open, setOpen] = useState(false);
    const smoothToHero = useSmoothLandingNav();

    return (
        <div className='flex min-h-screen flex-col bg-[var(--surface)]'>
            <div
                className={cn(
                    'fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
                    open ? 'opacity-100' : 'pointer-events-none opacity-0',
                )}
                aria-hidden={!open}
                onClick={() => setOpen(false)}
            />

            <aside
                className={cn(
                    'fixed inset-y-0 left-0 z-50 flex w-[min(20rem,88vw)] flex-col border-r border-slate-700 bg-[var(--dark)] pl-1 shadow-2xl transition-transform duration-300 ease-out lg:hidden',
                    open ? 'translate-x-0' : '-translate-x-full',
                )}
                aria-hidden={!open}
                role='dialog'
                aria-modal='true'
                aria-label='Мобільне меню'
            >
                <MainSidebar onNavigate={() => setOpen(false)} />
            </aside>

            <header className='fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/75 backdrop-blur-md'>
                <div className='mx-auto flex h-[var(--header-h)] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-16'>
                    <Link
                        href='/#hero'
                        scroll={false}
                        className='flex shrink-0 items-center outline-offset-4'
                        onClick={(e) => smoothToHero('/#hero', e)}
                    >
                        <Image
                            src='/logo-without-back2.png'
                            alt={COMPANY_NAME}
                            width={280}
                            height={280}
                            className='h-11 w-auto sm:h-12'
                        />
                    </Link>

                    <nav className='hidden min-w-0 flex-1 justify-center lg:flex' aria-label='Головна навігація'>
                        <LandingNavLinks variant='bar' />
                    </nav>

                    <button
                        type='button'
                        className='inline-flex h-10 w-10 items-center justify-center border border-white/25 text-white transition hover:border-white/50 hover:bg-white/10 lg:hidden'
                        aria-expanded={open}
                        aria-controls='site-sidebar'
                        onClick={() => setOpen((v) => !v)}
                    >
                        <span className='sr-only'>Відкрити меню</span>
                        <svg width='22' height='22' viewBox='0 0 24 24' fill='none' aria-hidden>
                            <path d='M4 7h16M4 12h16M4 17h16' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
                        </svg>
                    </button>
                </div>
            </header>

            <main className='relative flex-1'>{children}</main>
        </div>
    );
}
