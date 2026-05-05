import type { ReactNode } from 'react';

import { AppShell } from '@/widgets/sidebar';

export default function SiteLayout({ children }: { children: ReactNode }) {
    return <AppShell>{children}</AppShell>;
}
