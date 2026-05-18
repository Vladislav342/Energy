import { cn } from '@/shared/lib';
import { REGULATOR_NAME } from '@/shared/constants';

import { getLandingSectionTheme, landingSectionPadding } from '@/views/landing/landing-section-surface';

export function Home() {
    const theme = getLandingSectionTheme('overview');

    return (
        <div className='space-y-10'>
            <section className={cn(theme.article)}>
                <div className={theme.stripe} aria-hidden />
                <div className={cn(landingSectionPadding, theme.body)}>
                    <header
                        className={cn(
                            '-mx-6 -mt-8 mb-8 px-6 pb-6 pt-7 md:-mx-10 md:-mt-10 md:mb-9 md:px-10 md:pb-7 md:pt-8 lg:-mx-11 lg:-mt-11 lg:px-11',
                            theme.header,
                        )}
                    >
                        <h2
                            className={cn(
                                'border-l-4 pl-4 font-serif text-2xl font-semibold tracking-tight text-slate-900 md:text-[1.75rem]',
                                theme.titleAccent,
                            )}
                        >
                            Загальна інформація
                        </h2>
                    </header>
                    <p className='max-w-3xl text-base leading-relaxed text-slate-600 md:text-[1.0625rem]'>
                        Товариство здійснює діяльність з виробництва електричної енергії на підставі ліцензії, виданої{' '}
                        <span className='font-semibold text-slate-900'>{REGULATOR_NAME}</span>.
                    </p>
                    <dl className='mt-8 grid gap-4 sm:grid-cols-3'>
                        <div className='rounded-xl border border-slate-300/80 bg-white p-4 shadow-sm'>
                            <dt className='text-xs font-semibold uppercase tracking-wide text-slate-500'>
                                Загальна встановлена потужність
                            </dt>
                            <dd className='mt-1 font-serif text-2xl font-semibold text-slate-900'>23 МВт</dd>
                        </div>
                        <div className='rounded-xl border border-slate-300/80 bg-white p-4 shadow-sm'>
                            <dt className='text-xs font-semibold uppercase tracking-wide text-slate-500'>
                                СЕС (установлена / видача)
                            </dt>
                            <dd className='mt-1 text-sm font-medium leading-snug text-slate-800'>
                                14&nbsp;396,20 МВт
                                <span className='mt-0.5 block text-slate-500'>(видача 10,5 МВт)</span>
                            </dd>
                        </div>
                        <div className='rounded-xl border border-slate-300/80 bg-white p-4 shadow-sm'>
                            <dt className='text-xs font-semibold uppercase tracking-wide text-slate-500'>КГУ (RSE)</dt>
                            <dd className='mt-1 text-sm font-medium text-slate-800'>2 × 2,0 МВт · 2 × 2,3 МВт</dd>
                        </div>
                    </dl>
                    <h3 className='mt-8 border-t border-slate-200 pt-8 font-serif text-xl font-semibold text-slate-900'>
                        До складу генеруючих потужностей входять
                    </h3>
                    <ul className='mt-4 list-disc space-y-2 pl-5 text-slate-700'>
                        <li>сонячна електростанція</li>
                        <li>когенераційна установка</li>
                    </ul>
                    <h3 className='mt-10 font-serif text-xl font-semibold text-slate-900'>Основні характеристики</h3>
                    <ul className='mt-5 grid gap-4 md:grid-cols-2'>
                        <li className='rounded-2xl border border-amber-200/90 bg-white p-5 shadow-sm'>
                            <p className='flex items-center gap-2 text-sm font-semibold tracking-wide text-amber-900'>
                                <span aria-hidden>☀️</span>
                                Сонячна електростанція
                            </p>
                            <p className='mt-3 font-serif text-2xl text-slate-900'>14&nbsp;396,20 МВт</p>
                            <p className='mt-1 text-sm text-slate-600'>Потужність видачі: 10,5 МВт</p>
                        </li>
                        <li className='rounded-2xl border border-rose-200/90 bg-white p-5 shadow-sm'>
                            <p className='flex items-center gap-2 text-sm font-semibold tracking-wide text-rose-900'>
                                <span aria-hidden>🔥</span>
                                Когенераційна установка (RSE)
                            </p>
                            <ul className='mt-3 space-y-2 text-sm text-slate-700'>
                                <li className='rounded-md bg-slate-50 px-3 py-2'>2 × 2,0 МВт</li>
                                <li className='rounded-md bg-slate-50 px-3 py-2'>2 × 2,3 МВт</li>
                            </ul>
                        </li>
                    </ul>
                    <p className='mt-8 border-t border-slate-200 pt-6 text-slate-600'>
                        Компанія забезпечує стабільне виробництво електричної енергії та дотримується вимог чинного
                        законодавства України.
                    </p>
                </div>
            </section>
        </div>
    );
}
