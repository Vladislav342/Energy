import { PageShell } from '@/shared/components';

import {
    CapacityFeatureSection,
    CapacityKguContent,
    CapacitySesContent,
    capacityKguImages,
    capacitySesImages,
} from './capacity-feature-section';

export function Capacity() {
    return (
        <PageShell
            title='Генеруючі потужності'
            description='Структура генеруючих активів та ключові технічні параметри.'
        >
            <div className='mt-2 space-y-16 md:space-y-20'>
                <CapacityFeatureSection
                    title='Сонячна електростанція (СЕС)'
                    imageSide='right'
                    mainImage={capacitySesImages.main}
                    insetImage={capacitySesImages.inset}
                >
                    <CapacitySesContent />
                </CapacityFeatureSection>

                <CapacityFeatureSection
                    title='Когенераційна установка (КГУ)'
                    imageSide='left'
                    mainImage={capacityKguImages.main}
                    insetImage={capacityKguImages.inset}
                >
                    <CapacityKguContent />
                </CapacityFeatureSection>
            </div>
        </PageShell>
    );
}
