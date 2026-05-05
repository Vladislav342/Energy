import { PageShell } from '@/shared/components';
import { COMPANY_NAME, REGULATOR_NAME } from '@/shared/constants';

export function About() {
    return (
        <PageShell
            title='Про компанію'
            description={
                <>
                    <span className='font-semibold text-slate-900'>{COMPANY_NAME}</span> є енергетичною компанією, що здійснює
                    виробництво електричної енергії з використанням відновлюваних та високоефективних технологій.
                </>
            }
        >
            <section>
                <h2 className='mb-2'>Основні напрями діяльності:</h2>
                <ul>
                    <li>виробництво електричної енергії сонячною електростанцією</li>
                    <li>виробництво електричної та теплової енергії когенераційною установкою</li>
                </ul>
            </section>
            <p>
                Компанія працює відповідно до законодавства України та нормативних актів{' '}
                <span className='font-medium text-slate-900'>{REGULATOR_NAME}</span>.
            </p>
        </PageShell>
    );
};
