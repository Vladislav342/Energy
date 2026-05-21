import type { ReactNode } from 'react';

import { SITE_GALLERY } from '@/shared/config';
import { cn } from '@/shared/lib';
import { COMPANY_NAME } from '@/shared/constants';

import { CapacityFeaturePhoto } from './capacity-feature-photo';

function CapacityMetric({ label, value, unit }: { label: string; value: ReactNode; unit: string }) {
    return (
        <div className='border-l-2 border-[var(--accent)] py-1 pl-4'>
            <dt className='text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]'>{label}</dt>
            <dd className='mt-2 font-serif text-3xl font-semibold leading-none tracking-tight text-slate-900'>
                {value}
                <span className='ml-1.5 text-lg font-medium text-slate-500'>{unit}</span>
            </dd>
        </div>
    );
}

export function CapacitySesContent() {
    return (
        <div className='min-w-0 text-slate-600'>
            <dl className='grid gap-6 sm:grid-cols-2'>
                <CapacityMetric label='Встановлена потужність' value={<>14&nbsp;396,20</>} unit='МВт' />
                <CapacityMetric label='Потужність видачі' value='10,5' unit='МВт' />
            </dl>
            <div className='prose-section mt-8 space-y-5 text-base leading-[1.75]'>
                <p>
                    Сонячна електростанція <span className='font-semibold text-slate-900'>{COMPANY_NAME}</span> здійснює
                    виробництво електричної енергії шляхом перетворення сонячного випромінювання у електричну енергію.
                </p>
                <p className='border border-slate-200 bg-zinc-50 px-4 py-3.5 text-sm leading-relaxed text-slate-600'>
                    Об’єкт відповідає технічним та екологічним вимогам.
                </p>
            </div>
        </div>
    );
}

function UnitStat({ count, power }: { count: string; power: string }) {
    return (
        <li className='border border-slate-200 bg-zinc-50 px-4 py-5 text-center'>
            <p className='font-serif text-3xl font-semibold leading-none text-[var(--accent)]'>{count}</p>
            <p className='mt-2 text-sm font-medium text-slate-800'>{power}</p>
        </li>
    );
}

export function CapacityKguContent() {
    return (
        <div className='min-w-0 text-slate-600'>
            <p className='text-base leading-[1.75]'>
                До складу когенераційного комплексу <span className='font-semibold text-slate-900'>{COMPANY_NAME}</span>{' '}
                входять установки типу RSE:
            </p>
            <dl className='grid gap-6 sm:grid-cols-2 mt-6'>
                <CapacityMetric label='установки по 2,0 МВт' value='2 ×' unit='' />
                <CapacityMetric label='установки по 2,3 МВт' value='2 ×' unit='' />
            </dl>
            {/* <ul className='mt-6 grid list-none gap-3 pl-0 sm:grid-cols-2'>
                <UnitStat count='2 ×' power='установки по 2,0 МВт' />
                <UnitStat count='2 ×' power='установки по 2,3 МВт' />
            </ul> */}
            <div className='prose-section mt-8 space-y-5 text-base leading-[1.75]'>
                <p>
                    Когенераційна установка забезпечує одночасне виробництво електричної та теплової енергії з високим
                    коефіцієнтом корисної дії.
                </p>
                <p>Використання когенерації дозволяє підвищити ефективність використання палива.</p>
            </div>
        </div>
    );
}

function CapacityFeatureHeading({ title, as: Heading }: { title: string; as: 'h2' | 'h3' }) {
    return (
        <Heading className='!mt-0 mb-10 font-serif text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl'>
            <span className='capacity-feature-heading'>{title}</span>
        </Heading>
    );
}

type CapacityFeatureSectionProps = {
    title: string;
    headingLevel?: 'h2' | 'h3';
    imageSide: 'left' | 'right';
    mainImage: { src: string; alt: string };
    insetImage: { src: string; alt: string };
    children: ReactNode;
    className?: string;
};

export function CapacityFeatureSection({
    title,
    headingLevel = 'h2',
    imageSide,
    mainImage,
    insetImage,
    children,
    className,
}: CapacityFeatureSectionProps) {
    const photo = (
        <CapacityFeaturePhoto
            mainSrc={mainImage.src}
            mainAlt={mainImage.alt}
            insetSrc={insetImage.src}
            insetAlt={insetImage.alt}
            mirror={imageSide === 'left'}
        />
    );

    return (
        <section className={cn('!mt-0', className)}>
            <div
                className={cn(
                    'mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16',
                    imageSide === 'left' ? 'lg:[&>*:first-child]:order-1 lg:[&>*:last-child]:order-2' : '',
                )}
            >
                {imageSide === 'left' ? (
                    <>
                        {photo}
                        <div className='min-w-0'>
                            <CapacityFeatureHeading title={title} as={headingLevel} />
                            {children}
                        </div>
                    </>
                ) : (
                    <>
                        <div className='min-w-0'>
                            <CapacityFeatureHeading title={title} as={headingLevel} />
                             {children}
                        </div>
                        {photo}
                    </>
                )}
            </div>
        </section>
    );
}

export const capacitySesImages = {
    main: { src: SITE_GALLERY.capacitySolar, alt: 'Сонячна електростанція — обладнання та майданчик' },
    inset: { src: SITE_GALLERY.about, alt: 'Сонячні панелі — деталь' },
} as const;

export const capacityKguImages = {
    main: { src: SITE_GALLERY.capacityCogeneration, alt: 'Когенераційна установка — технічний комплекс' },
    inset: { src: SITE_GALLERY.production, alt: 'Енергетичне обладнання' },
} as const;
