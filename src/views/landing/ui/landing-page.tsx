import type { ReactNode } from 'react';

import { cn } from '@/shared/lib';
import { COMPANY_NAME, REGULATOR_NAME } from '@/shared/constants';
import { Home } from '@/views/home';

import { LandingSectionDecor, landingSectionSurface } from '../landing-section-surface';
import { LandingHero } from './landing-hero';

function LandingSection({
    id,
    title,
    description,
    children,
}: {
    id: string;
    title: string;
    description?: ReactNode;
    children: ReactNode;
}) {
    return (
        <section id={id} className='scroll-mt-28'>
            <article className={cn(landingSectionSurface)}>
                <LandingSectionDecor />
                <header className='relative z-[1] mb-8 border-b border-slate-100/90 pb-6 md:mb-9 md:pb-7'>
                    <h2 className='font-serif text-2xl font-semibold tracking-tight text-slate-900 md:text-[1.75rem] lg:text-3xl'>
                        {title}
                    </h2>
                    {description ? (
                        <div className='mt-3 max-w-3xl text-base leading-relaxed text-slate-600 md:text-[1.0625rem]'>
                            {description}
                        </div>
                    ) : null}
                </header>
                <div className='relative z-[1] space-y-6 text-slate-700 [&_h3]:mt-8 [&_h3]:font-serif [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-slate-900 [&_h3]:first:mt-0 [&_li]:text-slate-700 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5'>
                    {children}
                </div>
            </article>
        </section>
    );
}

function ContactCard({
    label,
    icon,
    iconWrapClass,
    children,
}: {
    label: string;
    icon: ReactNode;
    iconWrapClass: string;
    children: ReactNode;
}) {
    return (
        <div className='group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/65 bg-gradient-to-b from-white via-white to-slate-50/95 p-5 shadow-[0_14px_34px_-26px_rgba(15,23,42,0.22)] ring-1 ring-white/70 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/55 hover:shadow-[0_22px_44px_-28px_rgba(15,23,42,0.28)]'>
            <div
                className='pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent opacity-0 transition group-hover:opacity-100'
                aria-hidden
            />
            <div className='flex items-start gap-4'>
                <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-lg ring-2 ring-white/25 ${iconWrapClass}`}
                    aria-hidden
                >
                    {icon}
                </span>
                <div className='min-w-0 flex-1 pt-0.5'>
                    <p className='text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500'>{label}</p>
                    <div className='mt-2.5'>{children}</div>
                </div>
            </div>
        </div>
    );
}

export function LandingPage() {
    return (
        <>
            <LandingHero />

            <div className='mx-auto max-w-5xl space-y-12 px-4 pb-20 pt-10 sm:space-y-14 sm:px-6 lg:space-y-16 lg:px-10 lg:pt-14'>
                <div id='overview' className='scroll-mt-28 space-y-10'>
                    <Home />
                </div>

                <LandingSection
                    id='about'
                    title='Про компанію'
                    description={
                        <>
                            <span className='font-semibold text-slate-900'>{COMPANY_NAME}</span> є енергетичною компанією,
                            що здійснює виробництво електричної енергії з використанням відновлюваних та високоефективних
                            технологій.
                        </>
                    }
                >
                    <section>
                        <h3 className='mb-2'>Основні напрями діяльності:</h3>
                        <ul>
                            <li>виробництво електричної енергії сонячною електростанцією</li>
                            <li>виробництво електричної та теплової енергії когенераційною установкою</li>
                        </ul>
                    </section>
                    <p>
                        Компанія працює відповідно до законодавства України та нормативних актів{' '}
                        <span className='font-medium text-slate-900'>{REGULATOR_NAME}</span>.
                    </p>
                </LandingSection>

                <LandingSection
                    id='license'
                    title='Ліцензія та регулювання'
                    description={
                        <>
                            <span className='font-semibold text-slate-900'>{COMPANY_NAME}</span> здійснює діяльність з
                            виробництва електричної енергії на підставі ліцензії.
                        </>
                    }
                >
                <p>
                    <span className='font-medium text-slate-900'>Орган ліцензування:</span> {REGULATOR_NAME}
                </p>
                <p>
                    <span className='font-medium text-slate-900'>Номер рішення:</span> _______
                </p>
                <p>
                    <span className='font-medium text-slate-900'>Дата видачі:</span> _______
                </p>
                <p>
                    <span aria-hidden>📎</span> Копія ліцензії доступна для завантаження.{' '}
                    <span className='text-sm text-slate-500'>(посилання на файл буде додано)</span>
                </p>
                <p className='font-medium text-slate-700'>
                    Товариство дотримується Ліцензійних умов провадження господарської діяльності з виробництва
                    електричної енергії.
                </p>
            </LandingSection>

            <LandingSection
                id='capacity'
                title='Генеруючі потужності'
                description='Структура генеруючих активів та ключові технічні параметри.'
            >
                <div className='!mt-0 space-y-8 [&_ul]:!list-none [&_ul]:!pl-0'>
                    <section className='relative overflow-hidden rounded-2xl border border-amber-100/90 bg-gradient-to-b from-amber-50/75 via-white to-white p-6 shadow-[0_16px_40px_-30px_rgba(180,83,9,0.18)] ring-1 ring-amber-100/40 md:p-8'>
                        <div
                            className='pointer-events-none absolute -right-16 top-0 h-36 w-36 rounded-full bg-amber-300/15 blur-2xl'
                            aria-hidden
                        />
                        <h3 className='relative flex flex-wrap items-center gap-2 font-serif text-xl font-semibold text-slate-900 !mt-0'>
                            <span
                                className='flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-lg'
                                aria-hidden
                            >
                                ☀️
                            </span>
                            Сонячна електростанція (СЕС)
                        </h3>
                        <dl className='relative mt-6 grid gap-3 sm:grid-cols-2'>
                            <div className='rounded-xl border border-amber-100/85 bg-white/95 p-4 shadow-sm shadow-amber-900/5'>
                                <dt className='text-xs font-semibold uppercase tracking-wide text-amber-900/80'>
                                    Встановлена потужність
                                </dt>
                                <dd className='mt-2 font-serif text-2xl font-semibold tracking-tight text-slate-900'>
                                    14&nbsp;396,20 МВт
                                </dd>
                            </div>
                            <div className='rounded-xl border border-amber-100/85 bg-white/95 p-4 shadow-sm shadow-amber-900/5'>
                                <dt className='text-xs font-semibold uppercase tracking-wide text-amber-900/80'>
                                    Потужність видачі
                                </dt>
                                <dd className='mt-2 font-serif text-2xl font-semibold tracking-tight text-slate-900'>
                                    10,5 МВт
                                </dd>
                            </div>
                        </dl>
                        <div className='relative mt-6 space-y-3 border-t border-amber-100/85 pt-6 text-slate-700'>
                            <p>
                                Сонячна електростанція{' '}
                                <span className='font-semibold text-slate-900'>{COMPANY_NAME}</span> здійснює виробництво
                                електричної енергії шляхом перетворення сонячного випромінювання у електричну енергію.
                            </p>
                            <p className='rounded-xl bg-white/90 px-4 py-3 text-sm text-slate-600 shadow-sm ring-1 ring-slate-200/55'>
                                Об’єкт відповідає технічним та екологічним вимогам.
                            </p>
                        </div>
                    </section>

                    <section className='relative overflow-hidden rounded-2xl border border-rose-100/90 bg-gradient-to-b from-rose-50/75 via-white to-white p-6 shadow-[0_16px_40px_-30px_rgba(190,18,60,0.16)] ring-1 ring-rose-100/45 md:p-8'>
                        <div
                            className='pointer-events-none absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-rose-300/12 blur-2xl'
                            aria-hidden
                        />
                        <h3 className='relative flex flex-wrap items-center gap-2 font-serif text-xl font-semibold text-slate-900 !mt-0'>
                            <span
                                className='flex h-9 w-9 items-center justify-center rounded-lg bg-rose-100 text-lg'
                                aria-hidden
                            >
                                🔥
                            </span>
                            Когенераційна установка (КГУ)
                        </h3>
                        <p className='mt-5 text-slate-700'>
                            До складу когенераційного комплексу{' '}
                            <span className='font-semibold text-slate-900'>{COMPANY_NAME}</span> входять установки типу
                            RSE:
                        </p>
                        <ul className='relative mt-4 grid list-none gap-2 pl-0 sm:grid-cols-2'>
                            <li className='rounded-xl border border-rose-100/90 bg-white/95 px-4 py-3 text-center text-sm font-medium text-slate-800 shadow-sm shadow-rose-900/5'>
                                2 установки по 2,0 МВт
                            </li>
                            <li className='rounded-xl border border-rose-100/90 bg-white/95 px-4 py-3 text-center text-sm font-medium text-slate-800 shadow-sm shadow-rose-900/5'>
                                2 установки по 2,3 МВт
                            </li>
                        </ul>
                        <div className='relative mt-6 space-y-3 border-t border-rose-100/85 pt-6 text-slate-700'>
                            <p>
                                Когенераційна установка забезпечує одночасне виробництво електричної та теплової енергії
                                з високим коефіцієнтом корисної дії.
                            </p>
                            <p>Використання когенерації дозволяє підвищити ефективність використання палива.</p>
                        </div>
                    </section>
                </div>
            </LandingSection>

            <LandingSection
                id='production'
                title='Виробничі показники'
                description={
                    <>
                        <span className='font-semibold text-slate-900'>{COMPANY_NAME}</span> здійснює регулярний облік та
                        аналіз виробництва електричної енергії.
                    </>
                }
            >
                <section>
                    <h3 className='mb-2'>Основні показники:</h3>
                    <ul>
                        <li>обсяг виробництва електричної енергії (місячний / річний)</li>
                        <li>коефіцієнт використання встановленої потужності</li>
                    </ul>
                </section>
                <p>
                    Інформація оновлюється відповідно до вимог{' '}
                    <span className='font-medium text-slate-900'>{REGULATOR_NAME}</span>.
                </p>
            </LandingSection>

            <LandingSection
                id='environment'
                title='Екологічна інформація'
                description={
                    <>
                        Діяльність <span className='font-semibold text-slate-900'>{COMPANY_NAME}</span> здійснюється з
                        дотриманням екологічних норм та стандартів.
                    </>
                }
            >
                <p>
                    Сонячна електростанція не створює викидів забруднюючих речовин під час експлуатації та сприяє
                    зменшенню викидів парникових газів.
                </p>
                <section>
                    <h3 className='mb-2'>Когенераційна установка:</h3>
                    <ul>
                        <li>відповідає встановленим нормативам</li>
                        <li>забезпечує ефективне використання палива</li>
                    </ul>
                </section>
                <section>
                    <h3 className='mb-2'>Контроль здійснюється за такими показниками:</h3>
                    <ul>
                        <li>оксиди азоту (NOx)</li>
                        <li>оксид вуглецю (CO)</li>
                        <li>діоксид вуглецю (CO₂)</li>
                    </ul>
                </section>
            </LandingSection>

            <LandingSection
                id='disclosure'
                title='Розкриття інформації'
                description={
                    <>
                        <span className='font-semibold text-slate-900'>{COMPANY_NAME}</span> забезпечує відкритість та
                        прозорість діяльності відповідно до вимог{' '}
                        <span className='font-medium text-slate-900'>{REGULATOR_NAME}</span>.
                    </>
                }
            >
                <p>Господарська діяльність з виробництва електричної енергії розпочата у 2026 році.</p>
                <p>У зв’язку з цим, частина інформації буде оприлюднюватися після завершення першого звітного періоду.</p>
                <section>
                    <h3 className='mb-2'>У цьому розділі поступово розміщуватиметься:</h3>
                    <ul>
                        <li>інформація про обсяги виробництва електричної енергії</li>
                        <li>фінансова звітність</li>
                        <li>повідомлення про суттєві події</li>
                        <li>інша інформація відповідно до вимог чинного законодавства</li>
                    </ul>
                </section>
            </LandingSection>

            <LandingSection
                id='financial'
                title='Фінансова звітність'
                description={
                    <>
                        Фінансова звітність <span className='font-semibold text-slate-900'>{COMPANY_NAME}</span>{' '}
                        формується відповідно до вимог законодавства України.
                    </>
                }
            >
                <p>
                    Діяльність підприємства розпочата у 2026 році, у зв’язку з чим перша річна фінансова звітність буде
                    оприлюднена після завершення звітного періоду.
                </p>
                <p>Фінансова інформація буде розміщена на даному веб-сайті у встановлені законодавством строки.</p>
            </LandingSection>

            <LandingSection
                id='contacts'
                title='Контакти'
                description='Для отримання додаткової інформації просимо звертатися за вказаними контактами.'
            >
                <div className='relative overflow-hidden rounded-3xl border border-slate-200/65 bg-gradient-to-br from-slate-50 via-white to-cyan-50/45 p-1 shadow-[0_24px_56px_-28px_rgba(15,23,42,0.28)] ring-1 ring-white/70'>
                    <div
                        className='pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl'
                        aria-hidden
                    />
                    <div
                        className='pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-violet-400/10 blur-3xl'
                        aria-hidden
                    />

                    <div className='relative rounded-[1.35rem] bg-white/88 p-6 shadow-inner shadow-slate-900/[0.03] backdrop-blur-sm md:p-8'>
                        <div className='relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950 px-6 py-5 text-white shadow-inner shadow-black/20'>
                            <div
                                className='pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-amber-300 via-cyan-400 to-cyan-600'
                                aria-hidden
                            />
                            <p className='pl-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200/90'>
                                Товариство
                            </p>
                            <p className='mt-2 pl-3 font-serif text-xl font-semibold leading-snug tracking-tight md:text-2xl'>
                                {COMPANY_NAME}
                            </p>
                        </div>

                        <div className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                            <ContactCard
                                label='Адреса'
                                iconWrapClass='bg-gradient-to-br from-cyan-500 to-cyan-700 shadow-cyan-600/30'
                                icon={
                                    <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                                        <path d='M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10Z' />
                                        <circle cx='12' cy='11' r='2.5' />
                                    </svg>
                                }
                            >
                                <span className='inline-flex w-full max-w-full items-center rounded-lg border border-dashed border-slate-300/90 bg-slate-50/90 px-3 py-2.5 font-mono text-sm text-slate-500'>
                                    буде додано
                                </span>
                            </ContactCard>

                            <ContactCard
                                label='Телефон'
                                iconWrapClass='bg-gradient-to-br from-emerald-500 to-teal-700 shadow-emerald-600/30'
                                icon={
                                    <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                                        <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z' />
                                    </svg>
                                }
                            >
                                <span className='inline-flex w-full max-w-full items-center rounded-lg border border-dashed border-slate-300/90 bg-slate-50/90 px-3 py-2.5 font-mono text-sm text-slate-500'>
                                    буде додано
                                </span>
                            </ContactCard>

                            <ContactCard
                                label='E-mail'
                                iconWrapClass='bg-gradient-to-br from-violet-500 to-indigo-700 shadow-violet-600/30'
                                icon={
                                    <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                                        <rect x='2' y='4' width='20' height='16' rx='2' />
                                        <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
                                    </svg>
                                }
                            >
                                <span className='inline-flex w-full max-w-full items-center rounded-lg border border-dashed border-slate-300/90 bg-slate-50/90 px-3 py-2.5 font-mono text-sm text-slate-500'>
                                    буде додано
                                </span>
                            </ContactCard>
                        </div>
                    </div>
                </div>
            </LandingSection>
            </div>
        </>
    );
}
