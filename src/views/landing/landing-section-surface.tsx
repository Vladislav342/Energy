import { cn } from '@/shared/lib';

export type LandingSectionTone =
    | 'overview'
    | 'about'
    | 'license'
    | 'capacity'
    | 'production'
    | 'environment'
    | 'disclosure'
    | 'financial'
    | 'contacts';

type SectionTheme = {
    article: string;
    stripe: string;
    header: string;
    titleAccent: string;
    body: string;
};

export const landingSectionThemes: Record<LandingSectionTone, SectionTheme> = {
    overview: {
        article:
            'relative overflow-hidden rounded-2xl border border-slate-300/90 bg-slate-50 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.22)] md:rounded-3xl',
        stripe: 'h-1.5 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500',
        header: 'border-b border-slate-200/90 bg-white/90',
        titleAccent: 'border-slate-700',
        body: 'bg-slate-50/50',
    },
    about: {
        article:
            'relative overflow-hidden rounded-2xl border border-cyan-200/80 bg-white shadow-[0_18px_40px_-28px_rgba(14,116,144,0.14)] md:rounded-3xl',
        stripe: 'h-1.5 bg-gradient-to-r from-cyan-600 via-sky-500 to-cyan-500',
        header: 'border-b border-cyan-100/90 bg-gradient-to-r from-cyan-50/50 to-white',
        titleAccent: 'border-cyan-600',
        body: 'bg-white',
    },
    license: {
        article:
            'relative overflow-hidden rounded-2xl border border-slate-300/80 bg-slate-100/80 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.18)] md:rounded-3xl',
        stripe: 'h-1.5 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600',
        header: 'border-b border-slate-300/70 bg-white/70',
        titleAccent: 'border-slate-800',
        body: 'bg-slate-50/80',
    },
    capacity: {
        article:
            'relative overflow-hidden rounded-2xl border border-amber-200/90 bg-amber-50/40 shadow-[0_18px_40px_-28px_rgba(180,83,9,0.12)] md:rounded-3xl',
        stripe: 'h-1.5 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500',
        header: 'border-b border-amber-200/80 bg-white/80',
        titleAccent: 'border-amber-600',
        body: 'bg-amber-50/25',
    },
    production: {
        article:
            'relative overflow-hidden rounded-2xl border border-sky-200/90 bg-sky-50/50 shadow-[0_18px_40px_-28px_rgba(14,116,144,0.12)] md:rounded-3xl',
        stripe: 'h-1.5 bg-gradient-to-r from-sky-700 via-sky-600 to-cyan-600',
        header: 'border-b border-sky-200/80 bg-white/75',
        titleAccent: 'border-sky-700',
        body: 'bg-sky-50/30',
    },
    environment: {
        article:
            'relative overflow-hidden rounded-2xl border border-emerald-200/90 bg-emerald-50/45 shadow-[0_18px_40px_-28px_rgba(5,150,105,0.1)] md:rounded-3xl',
        stripe: 'h-1.5 bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600',
        header: 'border-b border-emerald-200/80 bg-white/75',
        titleAccent: 'border-emerald-700',
        body: 'bg-emerald-50/25',
    },
    disclosure: {
        article:
            'relative overflow-hidden rounded-2xl border border-violet-200/80 bg-violet-50/35 shadow-[0_18px_40px_-28px_rgba(109,40,217,0.1)] md:rounded-3xl',
        stripe: 'h-1.5 bg-gradient-to-r from-violet-700 via-indigo-600 to-violet-600',
        header: 'border-b border-violet-200/70 bg-white/75',
        titleAccent: 'border-violet-700',
        body: 'bg-violet-50/20',
    },
    financial: {
        article:
            'relative overflow-hidden rounded-2xl border border-amber-200/70 bg-stone-50 shadow-[0_18px_40px_-28px_rgba(120,113,108,0.14)] md:rounded-3xl',
        stripe: 'h-1.5 bg-gradient-to-r from-stone-700 via-stone-600 to-amber-700/90',
        header: 'border-b border-stone-200/90 bg-white/80',
        titleAccent: 'border-stone-700',
        body: 'bg-stone-50/60',
    },
    contacts: {
        article:
            'relative overflow-hidden rounded-2xl border border-slate-300/90 bg-slate-100 shadow-[0_20px_48px_-26px_rgba(15,23,42,0.24)] md:rounded-3xl',
        stripe: 'h-1.5 bg-gradient-to-r from-slate-900 via-cyan-800 to-slate-800',
        header: 'border-b border-slate-300/80 bg-white',
        titleAccent: 'border-slate-900',
        body: 'bg-slate-50/90',
    },
};

export const landingSectionPadding = 'px-6 py-8 md:px-10 md:py-10 lg:px-11 lg:py-11';

export function getLandingSectionTheme(tone: LandingSectionTone) {
    return landingSectionThemes[tone];
}
