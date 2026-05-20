import Image from 'next/image';

import { SITE_GALLERY } from '@/shared/config';
import { COMPANY_NAME, REGULATOR_NAME } from '@/shared/constants';
import { cn } from '@/shared/lib';

import { landingSectionPadding } from '../landing-section-surface';

const DISCLOSURE_TOPICS = [
    'Інформація про обсяги виробництва електричної енергії',
    'Фінансова звітність',
    'Повідомлення про суттєві події',
    'Інша інформація відповідно до вимог чинного законодавства',
] as const;

function PlusIcon() {
    return (
        <span
            className='flex h-8 w-8 shrink-0 items-center justify-center text-slate-500'
            aria-hidden
        >
            <svg viewBox='0 0 24 24' className='h-5 w-5' fill='none' stroke='currentColor' strokeWidth='1.75'>
                <path strokeLinecap='round' d='M12 5v14M5 12h14' />
            </svg>
        </span>
    );
}

function DisclosureTopicRow({ children }: { children: string }) {
    return (
        <li className='flex items-center justify-between gap-6 border-b border-[var(--dark-border)] py-5 first:border-t-0'>
            <span className='max-w-[calc(100%-3rem)] text-[0.9375rem] font-medium leading-snug text-slate-100 sm:text-base'>
                {children}
            </span>
            <PlusIcon />
        </li>
    );
}

export function LandingDisclosureSection() {
    return (
        <section id='disclosure' className='scroll-mt-28 bg-[var(--dark)] text-white'>
            <div className={cn('mx-auto max-w-7xl', landingSectionPadding)}>
                <div className='grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20'>
                    <div>
                        <p className='section-eyebrow'>Розкриття інформації</p>
                        <h2 className='mt-4 font-serif text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-tight'>
                            <span className='capacity-feature-heading'>Розкриття інформації</span>
                        </h2>
                        <p className='mt-5 max-w-xl text-base leading-[1.75] text-slate-300 md:text-lg'>
                            <span className='font-semibold text-white'>{COMPANY_NAME}</span> забезпечує відкритість та
                            прозорість діяльності відповідно до вимог{' '}
                            <span className='font-semibold text-[var(--accent)]'>{REGULATOR_NAME}</span>.
                        </p>

                        <aside className='mt-8 max-w-xl border border-[var(--dark-border)] border-l-[3px] border-l-[var(--accent)] bg-[var(--dark-elevated)] px-5 py-4 sm:px-6 sm:py-5'>
                            <p className='text-sm leading-relaxed text-slate-300 sm:text-[0.9375rem] sm:leading-[1.7]'>
                                Господарська діяльність з
                                виробництва електричної енергії розпочата у 2026 році.
                            </p>
                            <p className='mt-3 text-sm leading-relaxed text-slate-400 sm:text-[0.9375rem] sm:leading-[1.7]'>
                                У зв’язку з цим частина інформації буде оприлюднюватися після завершення першого звітного
                                періоду.
                            </p>
                        </aside>

                        <div className='mt-10 border-t border-[var(--dark-border)] pt-8'>
                            <p className='text-base leading-relaxed text-slate-400 md:text-lg'>
                                У цьому розділі поступово розміщуватиметься:
                            </p>

                            <ul className='mt-1 list-none pl-0'>
                                {DISCLOSURE_TOPICS.map((topic) => (
                                    <DisclosureTopicRow key={topic}>{topic}</DisclosureTopicRow>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <figure className='relative min-h-[16rem] lg:sticky lg:top-28 lg:min-h-[24rem]'>
                        <div className='relative h-full min-h-[16rem] overflow-hidden border border-[var(--dark-border)] lg:min-h-[24rem]'>
                            <Image
                                src={SITE_GALLERY.disclosure}
                                alt='Прозорість та розкриття інформації товариства'
                                fill
                                sizes='(max-width: 1024px) 100vw, 560px'
                                className='object-cover object-center'
                            />
                            <div
                                className='pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--dark)]/40 via-transparent to-transparent'
                                aria-hidden
                            />
                        </div>
                    </figure>
                </div>
            </div>
        </section>
    );
}
