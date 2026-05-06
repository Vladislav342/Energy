import { PageShell } from '@/shared/components';
import { COMPANY_NAME } from '@/shared/constants';

export function Capacity() {
    return (
        <PageShell
            title='Генеруючі потужності'
            description='Структура генеруючих активів та ключові технічні параметри.'
        >
            <div className='mt-2 space-y-8'>
                <section className='rounded-2xl border border-amber-100 bg-gradient-to-b from-amber-50/70 to-white p-6 shadow-sm md:p-8'>
                    <h2 className='flex flex-wrap items-center gap-2 font-serif text-xl font-semibold text-slate-900'>
                        <span className='flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-lg' aria-hidden>
                            ☀️
                        </span>
                        Сонячна електростанція (СЕС)
                    </h2>
                    <dl className='mt-6 grid gap-3 sm:grid-cols-2'>
                        <div className='rounded-xl border border-amber-100/80 bg-white/90 p-4'>
                            <dt className='text-xs font-semibold uppercase tracking-wide text-amber-900/80'>
                                Встановлена потужність
                            </dt>
                            <dd className='mt-2 font-serif text-2xl font-semibold tracking-tight text-slate-900'>
                                14&nbsp;396,20 МВт
                            </dd>
                        </div>
                        <div className='rounded-xl border border-amber-100/80 bg-white/90 p-4'>
                            <dt className='text-xs font-semibold uppercase tracking-wide text-amber-900/80'>
                                Потужність видачі
                            </dt>
                            <dd className='mt-2 font-serif text-2xl font-semibold tracking-tight text-slate-900'>10,5 МВт</dd>
                        </div>
                    </dl>
                    <div className='mt-6 space-y-3 border-t border-amber-100/80 pt-6 text-slate-700'>
                        <p>
                            Сонячна електростанція{' '}
                            <span className='font-semibold text-slate-900'>{COMPANY_NAME}</span> здійснює виробництво
                            електричної енергії шляхом перетворення сонячного випромінювання у електричну енергію.
                        </p>
                        <p className='rounded-lg bg-white/80 px-4 py-3 text-sm text-slate-600 ring-1 ring-slate-200/60'>
                            Об’єкт відповідає технічним та екологічним вимогам.
                        </p>
                    </div>
                </section>

                <section className='rounded-2xl border border-rose-100 bg-gradient-to-b from-rose-50/70 to-white p-6 shadow-sm md:p-8'>
                    <h2 className='flex flex-wrap items-center gap-2 font-serif text-xl font-semibold text-slate-900'>
                        <span className='flex h-9 w-9 items-center justify-center rounded-lg bg-rose-100 text-lg' aria-hidden>
                            🔥
                        </span>
                        Когенераційна установка (КГУ)
                    </h2>
                    <p className='mt-5 text-slate-700'>
                        До складу когенераційного комплексу{' '}
                        <span className='font-semibold text-slate-900'>{COMPANY_NAME}</span> входять установки типу RSE:
                    </p>
                    <ul className='mt-4 grid list-none gap-2 pl-0 sm:grid-cols-2'>
                        <li className='rounded-lg border border-rose-100/90 bg-white/90 px-4 py-3 text-center text-sm font-medium text-slate-800 shadow-sm'>
                            2 установки по 2,0 МВт
                        </li>
                        <li className='rounded-lg border border-rose-100/90 bg-white/90 px-4 py-3 text-center text-sm font-medium text-slate-800 shadow-sm'>
                            2 установки по 2,3 МВт
                        </li>
                    </ul>
                    <div className='mt-6 space-y-3 border-t border-rose-100/80 pt-6 text-slate-700'>
                        <p>
                            Когенераційна установка забезпечує одночасне виробництво електричної та теплової енергії з
                            високим коефіцієнтом корисної дії.
                        </p>
                        <p>Використання когенерації дозволяє підвищити ефективність використання палива.</p>
                    </div>
                </section>
            </div>
        </PageShell>
    );
}
