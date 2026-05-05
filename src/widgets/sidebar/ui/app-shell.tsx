'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';

import Image from 'next/image';
import { COMPANY_NAME } from '@/shared/constants';
import { cn } from '@/shared/lib';

import { MainSidebar } from './sidebar';

type AppShellProps = {
    children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
    const [open, setOpen] = useState(false)

    return (
        <div className='flex min-h-screen bg-[var(--surface)] text-slate-800'>
            <div
                className={cn(
                    'fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity lg:hidden',
                    open ? 'opacity-100' : 'pointer-events-none opacity-0',
                )}
                aria-hidden={!open}
                onClick={() => setOpen(false)}
            />
            <aside
                className={cn(
                    'fixed inset-y-0 left-0 z-50 w-[min(18rem,100vw-2rem)] transform border-r border-slate-200 bg-[var(--sidebar)] text-slate-700 shadow-xl transition-transform duration-200 ease-out lg:static lg:z-0 lg:w-72 lg:translate-x-0 lg:shadow-md',
                    open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
                )}
            >
                <MainSidebar onNavigate={() => setOpen(false)} />
            </aside>
            <div className='flex min-h-screen flex-1 flex-col lg:min-w-0'>
                <header className='sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b border-slate-200/80 bg-white/90 px-4 backdrop-blur-md lg:hidden'>
                    <div className='min-w-0'>
                        {/* <p className='truncate text-xs font-medium uppercase tracking-wider text-slate-500'>
                            Енергетика
                        </p>
                        <p className='truncate font-serif text-sm font-semibold text-slate-900'>{COMPANY_NAME}</p> */}
                        <Image src='/logo-without-back.png' alt={COMPANY_NAME} width={80} height={80} />
                    </div>
                    <button
                        type='button'
                        className='inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-800 shadow-sm'
                        aria-expanded={open}
                        aria-controls='site-sidebar'
                        onClick={() => setOpen((v) => !v)}
                    >
                        <span className='sr-only'>Меню</span>
                        <svg width='20' height='20' viewBox='0 0 24 24' fill='none' aria-hidden>
                            <path
                                d='M4 7h16M4 12h16M4 17h16'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                            />
                        </svg>
                    </button>
                </header>
                <main className='relative flex-1'>
                    <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,116,144,0.12),transparent)]' />
                    <div className='relative mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-10 lg:py-12'>{children}</div>
                </main>
            </div>
        </div>
    )
};

// border-white/10
