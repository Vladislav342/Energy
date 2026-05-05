import type { Metadata } from 'next';

import { Disclosure as DisclosureView } from '@/views/disclosure';

export const metadata: Metadata = {
    title: 'Розкриття інформації',
};

export default function DisclosurePage() {
    return <DisclosureView />;
}
