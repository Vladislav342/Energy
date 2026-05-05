import { PageShell } from '@/shared/components';
import { COMPANY_NAME, REGULATOR_NAME } from '@/shared/constants';

export function Production() {
    return (
        <PageShell
            title='Виробничі показники'
            description={
                <>
                   <span className='font-semibold text-slate-900'>{COMPANY_NAME}</span> здійснює регулярний облік та аналіз виробництва електричної енергії.
                </>
            }
        >
            <section>
                <h2 className='mb-2'>Основні показники:</h2>
                <ul>
                    <li>обсяг виробництва електричної енергії (місячний / річний)</li>
                    <li>коефіцієнт використання встановленої потужності</li>
                </ul>
            </section>
            <p>
                Інформація оновлюється відповідно до вимог <span className='font-medium text-slate-900'>{REGULATOR_NAME}</span>.
            </p>
        </PageShell>
    );
}
