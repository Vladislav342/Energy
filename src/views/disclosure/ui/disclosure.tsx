import { PageShell } from '@/shared/components';
import { COMPANY_NAME, REGULATOR_NAME } from '@/shared/constants';

export function Disclosure() {
    return (
        <PageShell
            title='Розкриття інформації'
            description={
                <>
                   <span className='font-semibold text-slate-900'>{COMPANY_NAME}</span> забезпечує відкритість та прозорість діяльності відповідно до вимог <span className='font-medium text-slate-900'>{REGULATOR_NAME}</span>.
                </>
            }
        >
            <p>Господарська діяльність з виробництва електричної енергії розпочата у 2026 році.</p>
            <p>У зв’язку з цим, частина інформації буде оприлюднюватися після завершення першого звітного періоду.</p>
            <section>
                <h2 className="mb-2">У цьому розділі поступово розміщуватиметься:</h2>
                <ul>
                    <li>інформація про обсяги виробництва електричної енергії</li>
                    <li>фінансова звітність</li>
                    <li>повідомлення про суттєві події</li>
                    <li>інша інформація відповідно до вимог чинного законодавства</li>
                </ul>
            </section>
        </PageShell>
    );
}
