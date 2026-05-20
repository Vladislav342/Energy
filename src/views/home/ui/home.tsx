import type { ReactNode } from 'react';

import { cn } from '@/shared/lib';
import { REGULATOR_NAME } from '@/shared/constants';

import { landingSectionPadding } from '@/views/landing/landing-section-surface';

function IconSolar({ className }: { className?: string }) {
    return (
        <svg
            className={cn('h-7 w-7 shrink-0 text-[var(--accent)]', className)}
            viewBox='0 0 48 48'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.75'
            aria-hidden
        >
            <circle cx='24' cy='24' r='7' />
            <path
                strokeLinecap='round'
                d='M24 4v5M24 39v5M4 24h5M39 24h5M9.9 9.9l3.5 3.5M34.6 34.6l3.5 3.5M9.9 38.1l3.5-3.5M34.6 13.4l3.5-3.5'
            />
        </svg>
    );
}

function IconCogeneration({ className }: { className?: string }) {
    return (
        <svg
            className={cn('h-7 w-7 shrink-0 text-[var(--accent)]', className)}
            viewBox='0 0 48 48'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.75'
            aria-hidden
        >
            <path strokeLinecap='round' strokeLinejoin='round' d='M24 8v6M24 34v6M8 24h6M34 24h6' />
            <rect x='14' y='18' width='20' height='16' rx='2' />
            <path strokeLinecap='round' d='M18 26h12M18 30h8' />
        </svg>
    );
}

type AssetCardProps = {
    icon: ReactNode;
    label: string;
    metric: ReactNode;
    metricHint?: string;
    title: string;
    children: ReactNode;
};

function AssetCard({ icon, label, metric, metricHint, title, children }: AssetCardProps) {
    return (
        <article className='home-asset-card group relative flex h-full flex-col overflow-hidden p-8 md:p-9'>
            <div className='pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent opacity-70' aria-hidden />
            <div className='pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-[var(--accent)]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60' aria-hidden />

            <div className='relative flex h-14 w-14 items-center justify-center border border-[var(--accent)]/30 bg-[var(--accent-muted)]'>
                {icon}
            </div>

            <p className='relative mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]'>{label}</p>
            <p className='relative mt-2 font-serif text-3xl font-semibold tracking-tight text-white md:text-[2rem]'>{metric}</p>
            {metricHint ? <p className='relative mt-1 text-sm text-slate-500'>{metricHint}</p> : null}

            <h3 className='relative mt-6 border-t border-[var(--dark-border)] pt-6 text-lg font-bold text-white'>{title}</h3>
            <p className='relative mt-3 flex-1 text-sm leading-relaxed text-slate-400'>{children}</p>
        </article>
    );
}

export function Home() {
    return (
        <section id='overview' className='scroll-mt-28 bg-[var(--dark)] text-white'>
            <div className={cn('relative mx-auto max-w-7xl', landingSectionPadding)}>
                <div className='grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start'>
                    <header>
                        <p className='section-eyebrow'>Загальна інформація</p>
                        <h2 className='mt-4 font-serif text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-tight'>
                            Енергетична компанія з відновлюваних та високоефективних технологій
                        </h2>
                    </header>

                    <div className='prose-section space-y-5 text-slate-300'>
                        <p className='text-base leading-relaxed md:text-lg'>
                            Товариство здійснює діяльність з виробництва електричної енергії на підставі ліцензії, виданої{' '}
                            <span className='font-semibold text-white'>{REGULATOR_NAME}</span>.
                        </p>
                        <p>
                            До складу генеруючих потужностей входять сонячна електростанція та когенераційна установка.
                            Компанія забезпечує стабільне виробництво електричної енергії та дотримується вимог чинного
                            законодавства України.
                        </p>
                    </div>
                </div>

                <div className='mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
                    <div>
                        <p className='stat-counter-value'>23+</p>
                        <span className='stat-counter-line' aria-hidden />
                        <p className='stat-counter-caption'>Загальна встановлена потужність, МВт</p>
                    </div>
                    <div>
                        <p className='stat-counter-value'>14&nbsp;396</p>
                        <span className='stat-counter-line' aria-hidden />
                        <p className='stat-counter-caption'>СЕС — установлена потужність, МВт (видача 10,5 МВт)</p>
                    </div>
                    <div>
                        <p className='stat-counter-value'>4</p>
                        <span className='stat-counter-line' aria-hidden />
                        <p className='stat-counter-caption'>Когенераційні установки (RSE)</p>
                    </div>
                    <div>
                        <p className='stat-counter-value'>2</p>
                        <span className='stat-counter-line' aria-hidden />
                        <p className='stat-counter-caption'>Генеруючі активи: СЕС та КГУ</p>
                    </div>
                </div>

                <div className='mt-14 grid gap-6 border-t border-[var(--dark-border)] pt-12 lg:grid-cols-12'>
                    <aside className='home-asset-aside relative flex flex-col justify-between overflow-hidden p-8 md:p-9 lg:col-span-4 lg:min-h-[22rem]'>
                        <div
                            className='pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[var(--accent)]/12 blur-3xl'
                            aria-hidden
                        />
                        <div className='relative'>
                            <p className='section-eyebrow'>Генеруючі активи</p>
                            <h3 className='mt-4 font-serif text-2xl font-semibold leading-snug text-white md:text-[1.65rem]'>
                                Два напрями виробництва енергії
                            </h3>
                            <p className='mt-4 text-sm leading-relaxed text-slate-400'>
                                Сонячна електростанція та когенераційний комплекс RSE забезпечують стабільне постачання
                                електроенергії з високою ефективністю використання ресурсів.
                            </p>
                        </div>
                        <div className='relative mt-10 border-t border-[var(--dark-border)] pt-8'>
                            <p className='font-serif text-5xl font-semibold leading-none text-[var(--accent)]'>02</p>
                            <p className='mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500'>
                                типи установок
                            </p>
                        </div>
                    </aside>

                    <div className='grid gap-6 sm:grid-cols-2 lg:col-span-8'>
                        <AssetCard
                            icon={<IconSolar />}
                            label='Сонячна електростанція'
                            metric={
                                <>
                                    14&nbsp;396,20 <span className='text-lg font-sans font-medium text-slate-400'>МВт</span>
                                </>
                            }
                            metricHint='Потужність видачі: 10,5 МВт'
                            title='СЕС'
                        >
                            Виробництво електроенергії шляхом перетворення сонячного випромінювання. Об’єкт відповідає
                            технічним та екологічним вимогам.
                        </AssetCard>

                        <AssetCard
                            icon={<IconCogeneration />}
                            label='Когенераційна установка'
                            metric='4 × RSE'
                            metricHint='2 × 2,0 МВт · 2 × 2,3 МВт'
                            title='КГУ'
                        >
                            Одночасне виробництво електричної та теплової енергії з високим коефіцієнтом корисної дії та
                            ефективним використанням палива.
                        </AssetCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
