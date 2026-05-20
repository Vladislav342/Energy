import Image from 'next/image';

import { SITE_GALLERY } from '@/shared/config';
import { COMPANY_NAME } from '@/shared/constants';
import { cn } from '@/shared/lib';

import { landingSectionPadding } from '../landing-section-surface';

const FINANCIAL_STEPS = [
    {
        label: '2026',
        title: 'Старт діяльності',
        text: 'Господарська діяльність з виробництва електричної енергії розпочата у 2026 році.',
    },
    {
        label: 'Звіт',
        title: 'Публікація звітності',
        text: 'Перша річна фінансова звітність буде оприлюднена після завершення звітного періоду.',
    },
] as const;

export function LandingFinancialSection() {
    return (
        <section id='financial' className='relative scroll-mt-28 overflow-hidden border-y border-zinc-200/60 bg-zinc-50'>
            <div
                className='pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[var(--accent-muted)] blur-3xl'
                aria-hidden
            />

            <div className={cn('relative mx-auto max-w-7xl', landingSectionPadding)}>
                <div className='grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16'>
                    <div className='min-w-0'>
                        <p className='section-eyebrow'>Фінансова звітність</p>
                        <h2 className='mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl'>
                            <span className='capacity-feature-heading'>Фінансова звітність</span>
                        </h2>
                        <p className='mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg'>
                            Фінансова звітність <span className='font-semibold text-slate-900'>{COMPANY_NAME}</span>{' '}
                            формується відповідно до вимог законодавства України.
                        </p>

                        <div className='mt-8 grid gap-4 sm:grid-cols-2'>
                            {FINANCIAL_STEPS.map((step) => (
                                <article
                                    key={step.label}
                                    className='border border-zinc-200 bg-white p-5 transition-shadow hover:shadow-sm'
                                >
                                    <p className='font-serif text-2xl font-semibold leading-none text-[var(--accent)]'>
                                        {step.label}
                                    </p>
                                    <h3 className='mt-3 text-sm font-bold text-slate-900'>{step.title}</h3>
                                    <p className='mt-2 text-sm leading-relaxed text-slate-600'>{step.text}</p>
                                </article>
                            ))}
                        </div>

                        <p className='mt-6 border-l-2 border-[var(--accent)] bg-white/80 py-3 pl-4 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]'>
                            Фінансова інформація буде розміщена на даному веб-сайті у встановлені законодавством строки.
                        </p>
                    </div>

                    <figure className='relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none lg:justify-self-end'>
                        <div
                            className='pointer-events-none absolute inset-0 translate-x-3 translate-y-3 bg-[var(--accent)]'
                            aria-hidden
                        />
                        <div className='relative aspect-[4/3] overflow-hidden border border-zinc-200 bg-white sm:aspect-[5/4]'>
                            <Image
                                src={SITE_GALLERY.financial}
                                alt='Фінансова звітність та облік діяльності'
                                fill
                                sizes='(max-width: 1024px) 100vw, 520px'
                                className='object-cover object-center'
                            />
                        </div>
                    </figure>
                </div>
            </div>
        </section>
    );
}
