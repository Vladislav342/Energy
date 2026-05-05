import type { Metadata } from 'next';

import { Contacts as ContactsView } from '@/views/contacts';

export const metadata: Metadata = {
    title: 'Контакти',
};

export default function ContactsPage() {
    return <ContactsView />;
}
