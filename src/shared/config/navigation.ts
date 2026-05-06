import { NavItem } from '@/shared/types';

/** Якорі лендингу (одна сторінка). Окремі маршрути тимчасово відключені — див. каталог app/(site)/…/page.tsx */
export const MAIN_NAV: NavItem[] = [
    { href: '/#about', label: 'Про компанію' },
    { href: '/#license', label: 'Ліцензія та регулювання' },
    { href: '/#capacity', label: 'Генеруючі потужності' },
    { href: '/#production', label: 'Виробничі показники' },
    { href: '/#environment', label: 'Екологічна інформація' },
    { href: '/#disclosure', label: 'Розкриття інформації' },
    { href: '/#financial', label: 'Фінансова звітність' },
    { href: '/#contacts', label: 'Контакти' },
];
