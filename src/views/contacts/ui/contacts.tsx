import type { ReactNode } from 'react';

import { PageShell } from '@/shared/components';
import { COMPANY_NAME } from '@/shared/constants';

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
        <div className='group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-gradient-to-b from-white via-white to-slate-50/90 p-5 shadow-sm shadow-slate-200/40 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/50 hover:shadow-lg hover:shadow-slate-300/35'>
            <div
                className='pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition group-hover:opacity-100'
                aria-hidden
            />
            <div className='flex items-start gap-4'>
                <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-lg ${iconWrapClass}`}
                    aria-hidden
                >
                    {icon}
                </span>
                <div className='min-w-0 flex-1 pt-0.5'>
                    <dt className='text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500'>{label}</dt>
                    <dd className='mt-2 m-0'>{children}</dd>
                </div>
            </div>
        </div>
    );
}

export function Contacts() {
    return (
        <PageShell
            title='Контакти'
            description='Для отримання додаткової інформації просимо звертатися за вказаними контактами.'
        >
            <div className='relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-cyan-50/40 p-1 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.25)]'>
                <div
                    className='pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl'
                    aria-hidden
                />
                <div
                    className='pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-violet-400/10 blur-3xl'
                    aria-hidden
                />

                <div className='relative rounded-[1.35rem] bg-white/85 p-6 backdrop-blur-sm md:p-8'>
                    <div className='relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950 px-6 py-5 text-white shadow-inner shadow-black/20'>
                        <div
                            className='pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600'
                            aria-hidden
                        />
                        <p className='pl-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200/90'>
                            Товариство
                        </p>
                        <p className='mt-2 pl-3 font-serif text-xl font-semibold leading-snug tracking-tight md:text-2xl'>
                            {COMPANY_NAME}
                        </p>
                    </div>

                    <dl className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
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
                    </dl>
                </div>
            </div>
        </PageShell>
    );
}

/*

            <div className='rounded-xl border border-slate-200/90 bg-gradient-to-r from-slate-50 to-white px-5 py-4 shadow-sm'>
                <p className='text-xs font-semibold uppercase tracking-wide text-slate-500'>Товариство</p>
                <p className='mt-1 font-serif text-lg font-semibold text-slate-900'>{COMPANY_NAME}</p>
            </div>

            <dl className='mt-6 grid gap-3'>
                <div className='flex gap-4 rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm ring-1 ring-slate-100'>
                    <span
                        className='flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-cyan-800'
                        aria-hidden
                    >
                        <svg className='h-5 w-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                            <path d='M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10Z' />
                            <circle cx='12' cy='11' r='2.5' />
                        </svg>
                    </span>
                    <div className='min-w-0 flex-1'>
                        <dt className='text-xs font-semibold uppercase tracking-wide text-slate-500'>Адреса</dt>
                        <dd className='mt-1'>
                            <span className='inline-block rounded-md border border-dashed border-slate-300 bg-slate-50 px-2 py-1 font-mono text-sm text-slate-500'>
                                ____________
                            </span>
                        </dd>
                    </div>
                </div>

                <div className='flex gap-4 rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm ring-1 ring-slate-100'>
                    <span
                        className='flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-800'
                        aria-hidden
                    >
                        <svg className='h-5 w-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                            <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z' />
                        </svg>
                    </span>
                    <div className='min-w-0 flex-1'>
                        <dt className='text-xs font-semibold uppercase tracking-wide text-slate-500'>Телефон</dt>
                        <dd className='mt-1'>
                            <span className='inline-block rounded-md border border-dashed border-slate-300 bg-slate-50 px-2 py-1 font-mono text-sm text-slate-500'>
                                ____________
                            </span>
                        </dd>
                    </div>
                </div>

                <div className='flex gap-4 rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm ring-1 ring-slate-100'>
                    <span
                        className='flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-800'
                        aria-hidden
                    >
                        <svg className='h-5 w-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                            <rect x='2' y='4' width='20' height='16' rx='2' />
                            <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
                        </svg>
                    </span>
                    <div className='min-w-0 flex-1'>
                        <dt className='text-xs font-semibold uppercase tracking-wide text-slate-500'>E-mail</dt>
                        <dd className='mt-1'>
                            <span className='inline-block rounded-md border border-dashed border-slate-300 bg-slate-50 px-2 py-1 font-mono text-sm text-slate-500'>
                                ____________
                            </span>
                        </dd>
                    </div>
                </div>
            </dl>
*/
