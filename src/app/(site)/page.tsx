import { LandingPage } from '@/views/landing';

export default function HomePage() {
    return <LandingPage />;
}

/* Раніше — окрема головна без інших секцій:
import { Home as HomeView } from '@/views/home';
export const metadata: Metadata = { title: 'Головна' };
export default function HomePage() {
    return <HomeView />;
}
*/
