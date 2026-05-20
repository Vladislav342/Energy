import { redirect } from 'next/navigation';

/*
import type { Metadata } from 'next';

import { Production as ProductionView } from '@/views/production';

export const metadata: Metadata = {
    title: 'Виробничі показники',
};

export default function ProductionPage() {
    return <ProductionView />;
}
*/

export default function ProductionPage() {
    redirect('/');
}
