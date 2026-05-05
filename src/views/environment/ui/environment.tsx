import { PageShell } from '@/shared/components';
import { COMPANY_NAME } from '@/shared/constants';

export function Environment() {
    return (
        <PageShell
            title='Екологічна інформація'
            description={
                <>
                   Діяльність <span className='font-semibold text-slate-900'>{COMPANY_NAME}</span> здійснюється з дотриманням екологічних норм та стандартів.
                </>
            }
        >
            <p>
                Сонячна електростанція не створює викидів забруднюючих речовин під час експлуатації та сприяє зменшенню
                викидів парникових газів.
            </p>
            <section>
                <h2 className='mb-2'>Когенераційна установка:</h2>
                <ul>
                    <li>відповідає встановленим нормативам</li>
                    <li>забезпечує ефективне використання палива</li>
                </ul>
            </section>
            <section>
                <h2 className='mb-2'>Контроль здійснюється за такими показниками:</h2>
                <ul>
                    <li>оксиди азоту (NOx)</li>
                    <li>оксид вуглецю (CO)</li>
                    <li>діоксид вуглецю (CO₂)</li>
                </ul>
            </section>
        </PageShell>
    );
}
