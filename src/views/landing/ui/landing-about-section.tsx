import Image from 'next/image';

import { SITE_GALLERY } from '@/shared/config';
import { COMPANY_NAME, REGULATOR_NAME } from '@/shared/constants';
import { cn } from '@/shared/lib';
import { LandingAnchorLink } from '@/widgets/sidebar/ui/landing-nav-links';

import { landingSectionPadding } from '../landing-section-surface';

export function LandingAboutSection() {
    return (
        <section id='about' className='scroll-mt-28 bg-white text-slate-900'>
            <div className={cn('mx-auto max-w-7xl', landingSectionPadding)}>
                <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20'>
                    <div className='min-w-0 max-w-2xl lg:max-w-3xl lg:pr-4 xl:pr-8'>
                        <p className='section-eyebrow'>Про компанію</p>
                        <h2 className='mt-6 flex flex-col gap-1 font-sans text-[clamp(1.1rem,2vw+0.6rem,2.625rem)] font-bold leading-[1.12] tracking-tight text-slate-900 sm:gap-1.5'>
                            <span className='block sm:whitespace-nowrap'>
                                Виробництво електроенергії
                            </span>
                            <span className='block sm:whitespace-nowrap'>з відновлюваних та</span>
                            <span className='block sm:whitespace-nowrap'>високоефективних технологій</span>
                        </h2>

                        <div className='prose-section mt-8 space-y-5 text-base leading-[1.75] text-slate-600 md:text-[1.0625rem]'>
                            <p>
                                <span className='font-semibold text-slate-900'>{COMPANY_NAME}</span> є енергетичною
                                компанією, що здійснює виробництво електричної енергії з використанням відновлюваних та
                                високоефективних технологій.
                            </p>
                            <p>Основні напрями діяльності:</p>
                            <ul className='space-y-2 pl-5'>
                                <li>виробництво електричної енергії сонячною електростанцією</li>
                                <li>виробництво електричної та теплової енергії когенераційною установкою</li>
                            </ul>
                            <p>
                                Компанія працює відповідно до законодавства України та нормативних актів{' '}
                                <span className='font-medium text-slate-900'>{REGULATOR_NAME}</span>.
                            </p>
                        </div>

                        <LandingAnchorLink href='/#capacity' className='btn-accent mt-8'>
                            Дізнатися більше
                        </LandingAnchorLink>
                    </div>

                    <div className='relative mx-auto w-full max-w-lg lg:max-w-none lg:justify-self-end'>
                        <div
                            className='about-photo-stripes pointer-events-none absolute -left-6 top-8 h-32 w-40 opacity-90'
                            aria-hidden
                        />
                        <div
                            className='about-photo-stripes pointer-events-none absolute -bottom-4 right-0 h-28 w-36 opacity-90'
                            aria-hidden
                        />

                        <div className='relative ml-auto w-[88%] max-w-md lg:w-full'>
                            <div
                                className='absolute inset-0 translate-x-4 translate-y-4 bg-[var(--accent)]'
                                aria-hidden
                            />
                            <div className='relative aspect-[4/5] overflow-hidden border-4 border-[var(--accent)] bg-zinc-100 sm:aspect-[3/4]'>
                                <Image
                                    src={SITE_GALLERY.about}
                                    alt='Загальний вигляд енергетичних об’єктів товариства'
                                    fill
                                    sizes='(max-width: 1024px) 88vw, 480px'
                                    className='object-cover object-center'
                                />
                            </div>

                            <div className='absolute -right-4 -top-4 w-[42%] overflow-hidden border-4 border-white bg-zinc-100 shadow-[0_20px_40px_-12px_rgba(15,23,42,0.35)] sm:-right-6 sm:-top-6'>
                                <div className='relative aspect-square w-full'>
                                    <Image
                                        src={SITE_GALLERY.capacitySolar}
                                        alt='Сонячна електростанція — панорама'
                                        fill
                                        sizes='(max-width: 1024px) 40vw, 200px'
                                        className='object-cover object-center'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
