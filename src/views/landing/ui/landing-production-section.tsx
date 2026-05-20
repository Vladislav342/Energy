import type { ReactNode } from 'react';

import Image from 'next/image';

import { SITE_GALLERY } from '@/shared/config';
import { COMPANY_NAME, REGULATOR_NAME } from '@/shared/constants';
import { cn } from '@/shared/lib';

import { landingSectionPadding } from '../landing-section-surface';

function IconChart({ className }: { className?: string }) {
    return (
        <svg className={cn('h-8 w-8', className)} viewBox='0 0 48 48' fill='none' stroke='currentColor' strokeWidth='1.75' aria-hidden>
            <path strokeLinecap='round' d='M10 38V22M24 38V10M38 38V28' />
        </svg>
    );
}

function IconGauge({ className }: { className?: string }) {
    return (
        <svg className={cn('h-8 w-8', className)} viewBox='0 0 48 48' fill='none' stroke='currentColor' strokeWidth='1.75' aria-hidden>
            <path strokeLinecap='round' d='M24 34a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z' />
            <path strokeLinecap='round' strokeLinejoin='round' d='M24 24l6-6M24 14v4' />
        </svg>
    );
}

function IconClipboard({ className }: { className?: string }) {
    return (
        <svg className={cn('h-8 w-8', className)} viewBox='0 0 48 48' fill='none' stroke='currentColor' strokeWidth='1.75' aria-hidden>
            <rect x='14' y='12' width='20' height='26' rx='2' />
            <path strokeLinecap='round' d='M18 12V10a6 6 0 0 1 12 0v2M20 22h8M20 28h8M20 34h5' />
        </svg>
    );
}

function IconRegulation({ className }: { className?: string }) {
    return (
        <svg className={cn('h-8 w-8', className)} viewBox='0 0 48 48' fill='none' stroke='currentColor' strokeWidth='1.75' aria-hidden>
            <path strokeLinecap='round' d='M14 38V18l10-8 10 8v20' />
            <path strokeLinecap='round' d='M20 38v-8h8v8M24 22v6' />
        </svg>
    );
}

function ProductionFeatureCard({
    icon,
    title,
    children,
}: {
    icon: ReactNode;
    title: string;
    children: ReactNode;
}) {
    return (
        <article className='flex h-full flex-col border border-[var(--dark-border)] bg-[var(--dark-elevated)] p-6 transition-colors hover:border-[var(--accent)]/35 sm:p-7'>
            <span className='text-[var(--accent)]'>{icon}</span>
            <h3 className='mt-5 text-lg font-bold leading-snug text-white'>{title}</h3>
            <p className='mt-2.5 flex-1 text-sm leading-relaxed text-slate-400'>{children}</p>
        </article>
    );
}

export function LandingProductionSection() {
    return (
        <section id='production' className='scroll-mt-28 bg-[var(--dark)] text-white'>
            <div className={cn('mx-auto max-w-7xl', landingSectionPadding)}>
                <header>
                    <p className='section-eyebrow'>Виробничі показники</p>
                    <h2 className='mt-4 font-serif text-3xl font-semibold tracking-tight text-white md:text-4xl'>
                        <span className='capacity-feature-heading'>Виробничі показники</span>
                    </h2>
                    <p className='mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg'>
                        <span className='font-semibold text-white'>{COMPANY_NAME}</span> здійснює регулярний облік та
                        аналіз виробництва електричної енергії.
                    </p>
                </header>

                {/* <div className='mt-8 border-t border-[var(--dark-border)] pt-10 md:pt-12' /> */}

                <div className='mt-10 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16'>
                    <figure className='relative min-h-[18rem] lg:min-h-[28rem]'>
                        <div
                            className='pointer-events-none absolute inset-0 translate-x-4 translate-y-4 bg-[var(--accent)]/35'
                            aria-hidden
                        />
                        <div className='relative h-full min-h-[18rem] overflow-hidden border border-[var(--dark-border)] lg:absolute lg:inset-0 lg:min-h-0'>
                            <Image
                                src={SITE_GALLERY.production}
                                alt='Виробничі процеси та облік електроенергії'
                                fill
                                sizes='(max-width: 1024px) 100vw, 560px'
                                className='object-cover object-center'
                            />
                            <div
                                className='pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--dark)]/50 via-transparent to-transparent'
                                aria-hidden
                            />
                        </div>
                    </figure>

                    <div className='grid gap-5 sm:grid-cols-2 sm:gap-6'>
                        <ProductionFeatureCard icon={<IconChart />} title='Обсяг виробництва'>
                            Облік обсягу виробництва електричної енергії у місячному та річному розрізі.
                        </ProductionFeatureCard>
                        <ProductionFeatureCard icon={<IconGauge />} title='Коефіцієнт використання'>
                            Моніторинг коефіцієнта використання встановленої потужності генеруючих активів.
                        </ProductionFeatureCard>
                        <ProductionFeatureCard icon={<IconClipboard />} title='Облік та аналіз'>
                            Системний збір і аналіз показників виробництва для операційного та звітного контролю.
                        </ProductionFeatureCard>
                        <ProductionFeatureCard icon={<IconRegulation />} title='Нормативна звітність'>
                            Інформація оновлюється відповідно до вимог{' '}
                            <span className='font-medium text-[var(--accent)]'>{REGULATOR_NAME}</span>.
                        </ProductionFeatureCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
