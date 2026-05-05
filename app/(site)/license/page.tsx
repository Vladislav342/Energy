import type { Metadata } from 'next';

import { License as LicenseView } from '@/views/license';

export const metadata: Metadata = {
    title: 'Ліцензія та регулювання',
};

export default function LicensePage() {
    return <LicenseView />;
}
