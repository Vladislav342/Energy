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
        <div className='flex min-h-screen flex-col bg-[var(--surface)] text-slate-800'>
            <div
                className={cn(
                    'fixed inset-0 z-40 bg-gradient-to-br from-slate-950/55 via-slate-900/45 to-cyan-950/35 backdrop-blur-[10px] transition-[opacity,backdrop-filter] duration-300 ease-out motion-reduce:transition-none lg:hidden',
                    open ? 'opacity-100' : 'pointer-events-none opacity-0',
                )}
                aria-hidden={!open}
                onClick={() => setOpen(false)}
            />

            <aside
                className={cn(
                    'fixed inset-y-0 left-0 z-50 flex w-[min(20rem,88vw)] flex-col border-r border-slate-300 bg-white pl-1 shadow-[14px_0_48px_-16px_rgba(15,23,42,0.32)] before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-1 before:bg-gradient-to-b before:from-cyan-600 before:via-sky-600 before:to-cyan-700 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:hidden',
                    open ? 'translate-x-0' : '-translate-x-full',
                )}
                aria-hidden={!open}
                role='dialog'
                aria-modal='true'
                aria-label='Мобільне меню'
            >
                <MainSidebar onNavigate={() => setOpen(false)} />
            </aside>

            <header className='sticky top-0 z-30 border-b border-slate-200/90 bg-white/[0.96] shadow-[0_12px_40px_-28px_rgba(15,23,42,0.14)] backdrop-blur-md'>
                <div className='mx-auto flex max-w-7xl items-center gap-3 px-4 py-2 sm:gap-4 lg:gap-6 lg:px-8 lg:py-2.5'>
                    <div className='flex shrink-0'>
                        <Link
                            href='/#hero'
                            scroll={false}
                            className='flex items-center outline-offset-4'
                            onClick={(e) => smoothToHero('/#hero', e)}
                        >
                            <Image
                                src='/hi-1024white.png'
                                alt={COMPANY_NAME}
                                width={280}
                                height={280}
                                className='h-[3.25rem] w-auto sm:h-16 lg:h-[4.75rem]'
                            />
                        </Link>
                    </div>

                    <nav
                        className='hidden min-h-0 min-w-0 flex-1 items-center justify-center lg:flex'
                        aria-label='Головна навігація'
                    >
                        <LandingNavLinks variant='bar' />
                    </nav>

                    <div className='ml-auto flex shrink-0 lg:hidden'>
                        <button
                            type='button'
                            className='inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:bg-slate-50'
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
                </div>
            </header>

            <main className='relative flex-1'>
                <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,116,144,0.08),transparent)]' />
                <div className='relative'>{children}</div>
            </main>
        </div>
    );
}
