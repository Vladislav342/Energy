import { cn } from '@/shared/lib';
import { REGULATOR_NAME } from '@/shared/constants';

import { LandingSectionDecor, landingSectionSurface } from '@/views/landing/landing-section-surface';

export function Home() {
    return (
        <div className='space-y-10'>
            <section className={cn(landingSectionSurface)}>
                <LandingSectionDecor />
                <p className='relative z-[1] max-w-3xl text-base leading-relaxed text-slate-600 md:text-[1.0625rem]'>
                    Товариство здійснює діяльність з виробництва електричної енергії на підставі ліцензії, виданої{' '}
                    <span className='font-semibold text-slate-900'>{REGULATOR_NAME}</span>.
                </p>
                <dl className='relative z-[1] mt-8 grid gap-4 sm:grid-cols-3'>
                    <div className='rounded-xl border border-slate-200/80 bg-gradient-to-b from-slate-50/95 to-white p-4 shadow-sm shadow-slate-900/5 ring-1 ring-white/80'>
                        <dt className='text-xs font-semibold uppercase tracking-wide text-slate-500'>Загальна встановлена потужність</dt>
                        <dd className='mt-1 font-serif text-2xl font-semibold text-slate-900'>23 МВт</dd>
                    </div>
                    <div className='rounded-xl border border-slate-200/80 bg-gradient-to-b from-slate-50/95 to-white p-4 shadow-sm shadow-slate-900/5 ring-1 ring-white/80'>
                        <dt className='text-xs font-semibold uppercase tracking-wide text-slate-500'>СЕС (установлена / видача)</dt>
                        <dd className='mt-1 text-sm font-medium leading-snug text-slate-800'>
                            14&nbsp;396,20 МВт
                            <span className='mt-0.5 block text-slate-500'>(видача 10,5 МВт)</span>
                        </dd>
                    </div>
                    <div className='rounded-xl border border-slate-200/80 bg-gradient-to-b from-slate-50/95 to-white p-4 shadow-sm shadow-slate-900/5 ring-1 ring-white/80'>
                        <dt className='text-xs font-semibold uppercase tracking-wide text-slate-500'>КГУ (RSE)</dt>
                        <dd className='mt-1 text-sm font-medium text-slate-800'>2 × 2,0 МВт · 2 × 2,3 МВт</dd>
                    </div>
                </dl>
                <h2 className='relative z-[1] border-t border-slate-100/90 pt-8 font-serif text-xl font-semibold text-slate-900'>
                    До складу генеруючих потужностей входять
                </h2>
                <ul className='relative z-[1] mt-4 list-disc space-y-2 pl-5 text-slate-700'>
                    <li>сонячна електростанція</li>
                    <li>когенераційна установка</li>
                </ul>
                <h2 className='relative z-[1] mt-10 font-serif text-xl font-semibold text-slate-900'>Основні характеристики</h2>
                <ul className='relative z-[1] mt-5 grid gap-4 md:grid-cols-2'>
                    <li className='rounded-2xl border border-amber-100/90 bg-gradient-to-b from-amber-50/70 to-white p-5 shadow-[0_14px_36px_-28px_rgba(180,83,9,0.2)] ring-1 ring-amber-100/35'>
                        <p className='flex items-center gap-2 text-sm font-semibold tracking-wide text-amber-900'>
                            <span aria-hidden>☀️</span>
                            Сонячна електростанція
                        </p>
                        <p className='mt-3 font-serif text-2xl text-slate-900'>14&nbsp;396,20 МВт</p>
                        <p className='mt-1 text-sm text-slate-600'>Потужність видачі: 10,5 МВт</p>
                    </li>
                    <li className='rounded-2xl border border-rose-100/90 bg-gradient-to-b from-rose-50/70 to-white p-5 shadow-[0_14px_36px_-28px_rgba(190,18,60,0.18)] ring-1 ring-rose-100/35'>
                        <p className='flex items-center gap-2 text-sm font-semibold tracking-wide text-rose-900'>
                            <span aria-hidden>🔥</span>
                            Когенераційна установка (RSE)
                        </p>
                        <ul className='mt-3 space-y-2 text-sm text-slate-700'>
                            <li className='rounded-md bg-white/80 px-3 py-2'>2 × 2,0 МВт</li>
                            <li className='rounded-md bg-white/80 px-3 py-2'>2 × 2,3 МВт</li>
                        </ul>
                    </li>
                </ul>
                <p className='relative z-[1] mt-8 border-t border-slate-100/90 pt-6 text-slate-600'>
                    Компанія забезпечує стабільне виробництво електричної енергії та дотримується вимог чинного законодавства
                    України.
                </p>
            </section>
        </div>
    );
}
