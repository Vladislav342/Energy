import type { ReactNode } from 'react';

import Image from 'next/image';

import { SITE_GALLERY } from '@/shared/config';
import { COMPANY_NAME } from '@/shared/constants';
import { cn } from '@/shared/lib';

import { landingSectionPadding } from '../landing-section-surface';

function IconSun({ className }: { className?: string }) {
    return (
        <svg className={cn('h-9 w-9', className)} viewBox='0 0 48 48' fill='none' stroke='currentColor' strokeWidth='1.75' aria-hidden>
            <circle cx='24' cy='24' r='8' />
            <path strokeLinecap='round' d='M24 6v4M24 38v4M6 24h4M38 24h4M11.5 11.5l2.8 2.8M33.7 33.7l2.8 2.8M11.5 36.5l2.8-2.8M33.7 14.3l2.8-2.8' />
        </svg>
    );
}

function IconCogen({ className }: { className?: string }) {
    return (
        <svg className={cn('h-9 w-9', className)} viewBox='0 0 48 48' fill='none' stroke='currentColor' strokeWidth='1.75' aria-hidden>
            <path strokeLinecap='round' d='M24 8v6M24 34v6M8 24h6M34 24h6' />
            <rect x='14' y='18' width='20' height='16' rx='2' />
            <path strokeLinecap='round' d='M18 26h12M18 30h8' />
        </svg>
    );
}

function CheckItem({ children }: { children: ReactNode }) {
    return (
        <li className='flex gap-3 text-sm leading-relaxed text-slate-600'>
            <span className='mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-[var(--accent)]/40 bg-[var(--accent-muted)] text-[var(--accent)]' aria-hidden>
                <svg viewBox='0 0 12 12' className='h-3 w-3' fill='none' stroke='currentColor' strokeWidth='2'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M2.5 6.5 5 9l4.5-6' />
                </svg>
            </span>
            {children}
        </li>
    );
}

const EMISSION_METRICS = [
    { code: 'NOx', label: 'Оксиди азоту' },
    { code: 'CO', label: 'Оксид вуглецю' },
    { code: 'CO₂', label: 'Діоксид вуглецю' },
] as const;

export function LandingEnvironmentSection() {
    return (
        <section id='environment' className='relative scroll-mt-28 overflow-hidden border-y border-slate-200/80 bg-white'>
            <div
                className='pointer-events-none absolute -right-24 top-0 h-[28rem] w-[28rem] rounded-full bg-[var(--accent-muted)] blur-3xl'
                aria-hidden
            />
            <div
                className='about-photo-stripes pointer-events-none absolute -left-8 bottom-16 h-40 w-48 opacity-60'
                aria-hidden
            />

            <div className={cn('relative mx-auto max-w-7xl', landingSectionPadding)}>
                <header className='max-w-3xl'>
                    <p className='section-eyebrow'>Екологічна інформація</p>
                    <h2 className='mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl'>
                        <span className='capacity-feature-heading'>Екологічна інформація</span>
                    </h2>
                    <p className='mt-5 text-base leading-relaxed text-slate-600 md:text-lg'>
                        Діяльність <span className='font-semibold text-slate-900'>{COMPANY_NAME}</span> здійснюється з
                        дотриманням екологічних норм та стандартів.
                    </p>
                </header>

                {/* <div className='mt-10 border-t border-slate-200 pt-10 md:pt-12' /> */}

                <div className='mt-10 grid gap-5 lg:grid-cols-12 lg:gap-6'>
                    <article className='border border-slate-200 border-l-[3px] border-l-[var(--accent)] bg-gradient-to-br from-white to-zinc-50/90 p-7 sm:p-8 lg:col-span-7'>
                        <span className='text-[var(--accent)]'>
                            <IconSun />
                        </span>
                        <h3 className='mt-5 text-xl font-bold text-slate-900'>Сонячна електростанція</h3>
                        <p className='mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base'>
                            Сонячна електростанція не створює викидів забруднюючих речовин під час експлуатації та сприяє
                            зменшенню викидів парникових газів.
                        </p>
                        <p className='mt-5 inline-flex items-center gap-2 border border-[var(--accent)]/25 bg-[var(--accent-muted)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]'>
                            <span className='h-1.5 w-1.5 rounded-full bg-[var(--accent)]' aria-hidden />
                            Нульові викиди в експлуатації
                        </p>
                    </article>

                    <figure className='relative min-h-[16rem] lg:col-span-5 lg:min-h-0 lg:row-span-2'>
                        <div
                            className='pointer-events-none absolute inset-0 translate-x-3 translate-y-3 bg-[var(--accent)]'
                            aria-hidden
                        />
                        <div className='relative h-full min-h-[16rem] overflow-hidden border border-slate-200 lg:absolute lg:inset-0 lg:min-h-0'>
                            <Image
                                src={SITE_GALLERY.environment}
                                alt='Екологічні аспекти та об’єкти генерації'
                                fill
                                sizes='(max-width: 1024px) 100vw, 420px'
                                className='object-cover object-center'
                            />
                        </div>
                    </figure>

                    <article className='border border-slate-200 border-l-[3px] border-l-[var(--accent)] bg-white p-7 sm:p-8 lg:col-span-7'>
                        <span className='text-[var(--accent)]'>
                            <IconCogen />
                        </span>
                        <h3 className='mt-5 text-xl font-bold text-slate-900'>Когенераційна установка</h3>
                        <ul className='mt-5 space-y-3.5'>
                            <CheckItem>відповідає встановленим нормативам</CheckItem>
                            <CheckItem>забезпечує ефективне використання палива</CheckItem>
                        </ul>
                    </article>
                </div>

                <div className='mt-6 border border-[var(--dark-border)] bg-[var(--dark)] p-7 sm:p-8 md:p-10'>
                    <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
                        <div className='max-w-md'>
                            <p className='text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]'>
                                Моніторинг
                            </p>
                            <h3 className='mt-2 font-serif text-2xl font-semibold text-white'>
                                Контроль здійснюється за показниками
                            </h3>
                            <p className='mt-2 text-sm text-slate-400'>
                                Регулярний вимірювальний контроль викидів на об’єктах когенерації.
                            </p>
                        </div>
                        <ul className='flex flex-wrap gap-3 sm:gap-4'>
                            {EMISSION_METRICS.map(({ code, label }) => (
                                <li key={code}>
                                    <div className='environment-emission-pill'>
                                        <code>{code}</code>
                                        <span className='text-xs leading-snug text-slate-400'>{label}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
