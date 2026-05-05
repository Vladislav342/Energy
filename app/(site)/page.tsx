import type { Metadata } from 'next';

import { Home as HomeView } from '@/views/home';

export const metadata: Metadata = {
    title: 'Головна',
};

export default function HomePage() {
    return <HomeView />;
}
