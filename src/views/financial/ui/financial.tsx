import { PageShell } from '@/shared/components';
import { COMPANY_NAME } from '@/shared/constants';

export function Financial() {
    return (
        <PageShell
            title='Фінансова звітність'
            description={
                <>
                   Фінансова звітність <span className='font-semibold text-slate-900'>{COMPANY_NAME}</span> формується відповідно до вимог законодавства України.
                </>
            }
        >
            <p>
                Діяльність підприємства розпочата у 2026 році, у зв’язку з чим перша річна фінансова звітність буде
                оприлюднена після завершення звітного періоду.
            </p>
            <p>Фінансова інформація буде розміщена на даному веб-сайті у встановлені законодавством строки.</p>
        </PageShell>
    );
}
