import type { Metadata } from 'next';

import { About as AboutView } from '@/views/about';

export const metadata: Metadata = {
    title: 'Про компанію',
};

export default function AboutPage() {
    return <AboutView />;
}
