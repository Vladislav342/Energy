import { redirect } from 'next/navigation';

/*
import type { Metadata } from 'next';

import { Financial as FinancialView } from '@/views/financial';

export const metadata: Metadata = {
    title: 'Фінансова звітність',
};

export default function FinancialPage() {
    return <FinancialView />;
}
*/

export default function FinancialPage() {
    redirect('/');
}
