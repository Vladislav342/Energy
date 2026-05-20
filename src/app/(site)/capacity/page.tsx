import { redirect } from 'next/navigation';

/*
import type { Metadata } from 'next';

import { Capacity as CapacityView } from '@/views/capacity';

export const metadata: Metadata = {
    title: 'Генеруючі потужності',
};

export default function CapacityPage() {
    return <CapacityView />;
}
*/

export default function CapacityPage() {
    redirect('/');
}
