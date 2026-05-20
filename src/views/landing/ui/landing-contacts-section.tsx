import type { ReactNode } from 'react';

import Image from 'next/image';

import { COMPANY_NAME } from '@/shared/constants';
import { cn } from '@/shared/lib';

import { landingSectionPadding } from '../landing-section-surface';

const CONTACT_ITEMS = [
    {
        label: 'Адреса',
        value: 'буде додано',
        iconKey: 'address' as const,
    },
    {
        label: 'Телефон',
        value: 'буде додано',
        href: 'tel:+380442874512',
        iconKey: 'phone' as const,
    },
    {
        label: 'E-mail',
        value: 'буде додано',
        href: 'mailto:info@helios-investment.ua',
        iconKey: 'email' as const,
    },
];

const contactIcons = {
    address: (
        <svg className='h-5 w-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.75' aria-hidden>
            <path strokeLinecap='round' strokeLinejoin='round' d='M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10Z' />
            <circle cx='12' cy='11' r='2.5' />
        </svg>
    ),
    phone: (
        <svg className='h-5 w-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.75' aria-hidden>
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z'
            />
        </svg>
    ),
    email: (
        <svg className='h-5 w-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.75' aria-hidden>
            <rect x='2' y='4' width='20' height='16' rx='2' />
            <path strokeLinecap='round' strokeLinejoin='round' d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
        </svg>
    ),
} as const;

function ContactItem({ label, value, icon, href }: { label: string; value: string; icon: ReactNode; href?: string }) {
    const valueClassName =
        'mt-1 block text-sm leading-snug text-slate-400 transition-colors hover:text-slate-200';

    return (
        <li className='flex items-start gap-3.5 border-b border-[var(--dark-border)] py-3.5 last:border-b-0 last:pb-0 first:pt-0'>
            <span
                className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--dark-border)] bg-[var(--dark)] text-[var(--accent)]'
                aria-hidden
            >
                {icon}
            </span>
            <div className='min-w-0 pt-0.5'>
                <p className='text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]'>{label}</p>
                {href ? (
                    <a
                        href={href}
                        className={cn(valueClassName, 'underline decoration-[var(--accent)]/30 underline-offset-[3px]')}
                    >
                        {value}
                    </a>
                ) : (
                    <p className={valueClassName}>{value}</p>
                )}
            </div>
        </li>
    );
}

export function LandingContactsSection() {
    return (
        <section id='contacts' className='scroll-mt-28 bg-[var(--dark)] text-white'>
            <div className={cn('mx-auto max-w-7xl', landingSectionPadding, '!py-12 md:!py-14 lg:!py-16')}>
                <header className='mx-auto max-w-2xl text-center'>
                    <p className='section-eyebrow mt-4'>Контакти</p>
                    <h2 className='mt-3 font-serif text-3xl font-semibold tracking-tight text-white md:text-4xl'>
                        <span className='capacity-feature-heading inline-block'>Контакти</span>
                    </h2>
                    <p className='mt-3 text-sm leading-relaxed text-slate-400 md:text-base'>
                        Для додаткової інформації звертайтеся за вказаними контактами.
                    </p>
                </header>

                <div className='mt-6  p-5 sm:p-6 md:p-7'>
                    <div className='mx-auto flex w-full max-w-5xl flex-col items-center gap-6 md:flex-row md:items-center md:justify-center md:gap-8 lg:gap-10'>
                        <div className='flex shrink-0 items-center justify-center'>
                            <Image
                                src='/logo-without-back.png'
                                alt={COMPANY_NAME}
                                width={1000}
                                height={1000}
                                className='h-24 w-auto sm:h-48 md:h-70'
                            />
                        </div>

                        <div
                            className='hidden min-h-[9rem] w-px shrink-0 self-center bg-[var(--dark-border)] md:block'
                            aria-hidden
                        />

                        <ul className='w-full min-w-0 list-none pl-0 md:w-auto md:min-w-[16rem] md:max-w-sm'>
                            {CONTACT_ITEMS.map(({ label, value, href, iconKey }) => (
                                <ContactItem
                                    key={label}
                                    label={label}
                                    value={value}
                                    href={href}
                                    icon={contactIcons[iconKey]}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
