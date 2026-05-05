import { PageShell } from '@/shared/components';
import { COMPANY_NAME, REGULATOR_NAME } from '@/shared/constants';

export function License() {
    return (
        <PageShell
            title='Ліцензія та регулювання'
            description={
                <>
                   <span className='font-semibold text-slate-900'>{COMPANY_NAME}</span> здійснює діяльність з виробництва електричної енергії на підставі ліцензії.
                </>
            }
        >
            <p>
                <span className='font-medium text-slate-900'>Орган ліцензування:</span> {REGULATOR_NAME}
            </p>
            <p>
                <span className='font-medium text-slate-900'>Номер рішення: _______</span>
            </p>
            <p>
                <span className='font-medium text-slate-900'>Дата видачі: _______</span>
            </p>
            <p>
                <span aria-hidden>📎</span> Копія ліцензії доступна для завантаження.{' '}
                <span className='text-sm text-slate-500'>(посилання на файл буде додано)</span>
            </p>
            <p className='font-medium text-slate-700'>
                Товариство дотримується Ліцензійних умов провадження господарської діяльності з виробництва електричної
                енергії.
            </p>
        </PageShell>
    );
}
