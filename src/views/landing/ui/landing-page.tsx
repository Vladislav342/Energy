import type { ReactNode } from 'react';

import { cn } from '@/shared/lib';
import { SITE_GALLERY } from '@/shared/config';
import { COMPANY_NAME, REGULATOR_NAME } from '@/shared/constants';
import { Home } from '@/views/home';

import type { LandingSectionTone } from '../landing-section-surface';
import { getLandingSectionTheme, landingSectionPadding } from '../landing-section-surface';
import { LandingAboutSection } from './landing-about-section';
import { LandingLicenseSection } from './landing-license-section';
import { LandingDisclosureSection } from './landing-disclosure-section';
import { LandingFinancialSection } from './landing-financial-section';
import { LandingEnvironmentSection } from './landing-environment-section';
import { LandingContactsSection } from './landing-contacts-section';
import { LandingProductionSection } from './landing-production-section';
import { LandingHero } from './landing-hero';
import {
    CapacityFeatureSection,
    CapacityKguContent,
    CapacitySesContent,
    capacityKguImages,
    capacitySesImages,
} from '@/views/capacity/ui/capacity-feature-section';

import { LandingSectionPhoto } from './landing-section-photo';

function LandingSection({
    id,
    title,
    tone,
    description,
    image,
    children,
}: {
    id: string;
    title: string;
    tone: LandingSectionTone;
    description?: ReactNode;
    image?: { src: string; alt: string };
    children: ReactNode;
}) {
    const theme = getLandingSectionTheme(tone);

    const isDark = theme.mode === 'dark';

    return (
        <section id={id} className={cn('scroll-mt-28', theme.section)}>
            <div className={cn('relative mx-auto max-w-7xl', landingSectionPadding, theme.article)}>
                <header className={theme.header}>
                        <p className='section-eyebrow'>{title}</p>
                        <h2 className={theme.title}> <span className='capacity-feature-heading'>{title}</span></h2>
                        {description ? <div className={theme.description}>{description}</div> : null}
                    </header>
                    <div className={cn('prose-section space-y-6', theme.prose, theme.body)}>
                        {image ? (
                            <LandingSectionPhoto
                                src={image.src}
                                alt={image.alt}
                                dark={isDark}
                                variant='banner'
                                className='!mt-0'
                            />
                        ) : null}
                        {children}
                    </div>
            </div>
        </section>
    );
}

export function LandingPage() {
    return (
        <>
            <LandingHero />

            <Home />

            <LandingAboutSection />

            <LandingLicenseSection />

            <LandingSection
                id='capacity'
                tone='capacity'
                title='Генеруючі потужності'
                description='Структура генеруючих активів та ключові технічні параметри.'
            >
                                <div className='!mt-0 space-y-16 md:space-y-20 [&_ul]:!list-none [&_ul]:!pl-0'>
                    <CapacityFeatureSection
                        headingLevel='h3'
                        title='Сонячна електростанція (СЕС)'
                        imageSide='right'
                        mainImage={capacitySesImages.main}
                        insetImage={capacitySesImages.inset}
                    >
                        <CapacitySesContent />
                    </CapacityFeatureSection>

                    <CapacityFeatureSection
                        headingLevel='h3'
                        title='Когенераційна установка (КГУ)'
                        imageSide='left'
                        mainImage={capacityKguImages.main}
                        insetImage={capacityKguImages.inset}
                    >
                        <CapacityKguContent />
                    </CapacityFeatureSection>
                </div>
            </LandingSection>

            <LandingProductionSection />

            <LandingEnvironmentSection />

            <LandingDisclosureSection />

            <LandingFinancialSection />

            <LandingContactsSection />
        </>
    );
}
