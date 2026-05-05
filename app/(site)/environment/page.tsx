import type { Metadata } from 'next';

import { Environment as EnvironmentView } from '@/views/environment';

export const metadata: Metadata = {
    title: 'Екологічна інформація',
};

export default function EnvironmentPage() {
    return <EnvironmentView />;
}
