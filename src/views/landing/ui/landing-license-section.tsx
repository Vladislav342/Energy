import type { ReactNode } from 'react';

import Image from 'next/image';

import { SITE_GALLERY } from '@/shared/config';
import { COMPANY_NAME, REGULATOR_NAME } from '@/shared/constants';

type LicenseStepProps = {
    index: string;
    title: string;
    highlight: ReactNode;
    description: string;
};

function LicenseStep({ index, title, highlight, description }: LicenseStepProps) {
    return (
        <li className='flex gap-5 sm:gap-8'>
            <span className='process-step-number shrink-0' aria-hidden>
                {index}
            </span>
            <div className='min-w-0 pt-1'>
                <h3 className='text-lg font-bold text-white'>{title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-slate-400'>
                    <span className='font-semibold text-[var(--accent)]'>{highlight}</span>
                    <span className='px-2 text-slate-600'>-</span>
                    {description}
                </p>
            </div>
        </li>
    );
}

export function LandingLicenseSection() {
    return (
        <section id='license' className='scroll-mt-28'>
            <div className='grid lg:grid-cols-2'>
                <div className='relative aspect-[4/3] min-h-[16rem] bg-zinc-900 sm:aspect-[16/10] lg:aspect-auto lg:min-h-[28rem]'>
                    <Image
                        src={SITE_GALLERY.license}
                        alt='Документи та регулювання діяльності з виробництва електроенергії'
                        fill
                        sizes='(max-width: 1024px) 100vw, 50vw'
                        className='object-cover object-center'
                    />
                </div>

                <div className='bg-[var(--dark)] px-5 py-14 text-white sm:px-8 md:px-12 md:py-16 lg:px-16 lg:py-20'>
                    <p className='section-eyebrow'>Ліцензія та регулювання</p>
                    <h2 className='mt-4 font-sans text-3xl font-bold leading-tight tracking-tight md:text-4xl'>
                        Ліцензія та регулювання
                    </h2>
                    <p className='mt-5 max-w-xl text-base leading-relaxed text-slate-300'>
                        <span className='font-semibold text-white'>{COMPANY_NAME}</span> здійснює діяльність з
                        виробництва електричної енергії на підставі ліцензії. Нижче — ключові дані та етапи
                        відповідності вимогам регулятора.
                    </p>

                    <ol className='mt-10 space-y-10 sm:mt-12 sm:space-y-12'>
                        <LicenseStep
                            index='01'
                            title='Орган ліцензування'
                            highlight={REGULATOR_NAME}
                            description='орган, що видає ліцензію на виробництво електричної енергії в Україні'
                        />
                        <LicenseStep
                            index='02'
                            title='Рішення про видачу'
                            highlight={
                                <>
                                    Номер: _______ | Дата: _______
                                </>
                            }
                            description='офіційні реквізити ліцензійного рішення товариства'
                        />
                        <LicenseStep
                            index='03'
                            title='Документи та умови'
                            highlight='Копія ліцензії'
                            description='доступна для завантаження (посилання буде додано). Товариство дотримується Ліцензійних умов провадження господарської діяльності з виробництва електричної енергії'
                        />
                    </ol>
                </div>
            </div>
        </section>
    );
}
