import { COMPANY_NAME, REGULATOR_NAME } from '@/shared/constants';

export function Home() {
    return (
        <div className='space-y-10'>
            <section className='overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950 p-6 text-white shadow-lg shadow-slate-900/20 md:p-10'>
                <h1 className='max-w-3xl font-serif text-3xl font-semibold leading-tight tracking-tight md:text-4xl'>
                    {COMPANY_NAME}
                </h1>
                <p className='mt-6 max-w-2xl text-base leading-relaxed text-slate-300'>
                    Товариство здійснює діяльність з виробництва електричної енергії на підставі ліцензії, виданої{' '}
                    <span className='font-medium text-white'>{REGULATOR_NAME}</span>.
                </p>
                <dl className='mt-10 grid gap-4 sm:grid-cols-3'>
                    <div className='rounded-xl border border-white/10 bg-white/5 p-4'>
                        <dt className='text-xs uppercase tracking-wide text-slate-400'>Загальна встановлена потужність:</dt>
                        <dd className='mt-1 font-serif text-2xl font-semibold text-amber-200'>23 МВт</dd>
                    </div>
                    <div className='rounded-xl border border-white/10 bg-white/5 p-4'>
                        <dt className='text-xs uppercase tracking-wide text-slate-400'>СЕС (установлена / видача):</dt>
                        <dd className='mt-1 text-sm leading-snug text-amber-200'>
                            14&nbsp;396,20 МВт 
                            <span className='block text-slate-400'>(видача 10,5 МВт)</span>
                        </dd>
                    </div>
                    <div className='rounded-xl border border-white/10 bg-white/5 p-4'>
                        <dt className='text-xs uppercase tracking-wide text-slate-400'>КГУ (RSE):</dt>
                        <dd className='mt-1 text-sm text-amber-200'>2 × 2,0 МВт · 2 × 2,3 МВт</dd>
                    </div>
                </dl>
            </section>

            <section className='rounded-2xl border border-slate-200/80 bg-white/90 p-8 shadow-sm backdrop-blur-sm md:p-10'>
                <h2 className='font-serif text-xl font-semibold text-slate-900'>До складу генеруючих потужностей входять</h2>
                <ul className='mt-4 list-disc space-y-2 pl-5 text-slate-700'>
                    <li>сонячна електростанція</li>
                    <li>когенераційна установка</li>
                </ul>
                <h2 className='mt-10 font-serif text-xl font-semibold text-slate-900'>Основні характеристики</h2>
                <ul className='mt-5 grid gap-4 md:grid-cols-2'>
                    <li className='rounded-xl border border-amber-100 bg-amber-50/60 p-5 shadow-sm'>
                        <p className='flex items-center gap-2 text-sm font-semibold tracking-wide text-amber-900'>
                            <span aria-hidden>☀️</span>
                            Сонячна електростанція
                        </p>
                        <p className='mt-3 font-serif text-2xl text-slate-900'>14&nbsp;396,20 МВт</p>
                        <p className='mt-1 text-sm text-slate-600'>Потужність видачі: 10,5 МВт</p>
                    </li>
                    <li className='rounded-xl border border-rose-100 bg-rose-50/60 p-5 shadow-sm'>
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
                <p className='mt-8 border-t border-slate-100 pt-6 text-slate-600'>
                    Компанія забезпечує стабільне виробництво електричної енергії та дотримується вимог чинного законодавства
                    України.
                </p>
            </section>
        </div>
    );
};
