import type { ReactNode } from 'react';

export type PlaceholderValueProps = {
 label: string;
}

export type PageShellProps = {
 title: string;
description?: ReactNode;
 children: ReactNode;
 className?: string;
}

export type NavItem = {
 href: string;
 label: string;
}