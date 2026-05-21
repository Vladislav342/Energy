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
    mode: 'light' | 'dark';
    section: string;
    article: string;
    header: string;
    title: string;
    description: string;
    body: string;
    prose: string;
};

export const landingSectionThemes: Record<LandingSectionTone, SectionTheme> = {
    overview: {
        mode: 'dark',
        section: 'bg-[var(--dark)] text-white',
        article: 'relative overflow-hidden',
        header: 'mb-10 md:mb-12',
        title: 'font-serif text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-tight',
        description: 'mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg',
        body: '',
        prose: 'text-slate-300 [&_h3]:text-white [&_li]:text-slate-300 [&_p]:text-slate-300',
    },
    about: {
        mode: 'light',
        section: 'bg-white',
        article: 'relative overflow-hidden border-y border-slate-200/80 bg-white',
        header: 'mb-8 border-b border-slate-200 pb-8 md:mb-10',
        title: 'font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl',
        description: 'mt-4 max-w-2xl text-base leading-relaxed text-slate-600',
        body: '',
        prose: 'text-slate-600 [&_h3]:text-slate-900',
    },
    license: {
        mode: 'light',
        section: 'bg-zinc-50',
        article: 'relative overflow-hidden border-y border-slate-200/60',
        header: 'mb-8 md:mb-10',
        title: 'font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl',
        description: 'mt-4 max-w-2xl text-base leading-relaxed text-slate-600',
        body: '',
        prose: 'text-slate-600 [&_h3]:text-slate-900',
    },
    capacity: {
        mode: 'light',
        section: 'bg-white',
        article: 'relative overflow-hidden border-y border-slate-200/80',
        header: 'mb-8 md:mb-10',
        title: 'font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl',
        description: 'mt-4 max-w-2xl text-base leading-relaxed text-slate-600',
        body: '',
        prose: 'text-slate-600 [&_h3]:text-slate-900',
    },
    production: {
        mode: 'dark',
        section: 'bg-[var(--dark)] text-white',
        article: 'relative overflow-hidden',
        header: 'mb-8 md:mb-10',
        title: 'font-serif text-3xl font-semibold tracking-tight text-white md:text-4xl',
        description: 'mt-4 max-w-2xl text-base leading-relaxed text-slate-300',
        body: '',
        prose: 'text-slate-300 [&_h3]:text-white [&_li]:text-slate-300',
    },
    environment: {
        mode: 'light',
        section: 'bg-zinc-50',
        article: 'relative overflow-hidden border-y border-slate-200/60',
        header: 'mb-8 md:mb-10',
        title: 'font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl',
        description: 'mt-4 max-w-2xl text-base leading-relaxed text-slate-600',
        body: '',
        prose: 'text-slate-600 [&_h3]:text-slate-900',
    },
    disclosure: {
        mode: 'light',
        section: 'bg-white',
        article: 'relative overflow-hidden border-y border-slate-200/80',
        header: 'mb-8 md:mb-10',
        title: 'font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl',
        description: 'mt-4 max-w-2xl text-base leading-relaxed text-slate-600',
        body: '',
        prose: 'text-slate-600 [&_h3]:text-slate-900',
    },
    financial: {
        mode: 'light',
        section: 'bg-zinc-50',
        article: 'relative overflow-hidden border-y border-slate-200/60',
        header: 'mb-8 md:mb-10',
        title: 'font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl',
        description: 'mt-4 max-w-2xl text-base leading-relaxed text-slate-600',
        body: '',
        prose: 'text-slate-600 [&_h3]:text-slate-900',
    },
    contacts: {
        mode: 'dark',
        section: 'bg-[var(--dark)] text-white',
        article: 'relative overflow-hidden',
        header: 'mb-8 md:mb-10',
        title: 'font-serif text-3xl font-semibold tracking-tight text-white md:text-4xl',
        description: 'mt-4 max-w-2xl text-base leading-relaxed text-slate-300',
        body: '',
        prose: 'text-slate-300',
    },
};

export const landingSectionPadding = 'px-5 py-14 sm:px-8 md:px-12 md:py-16 lg:px-16 lg:py-20';

export function getLandingSectionTheme(tone: LandingSectionTone) {
    return landingSectionThemes[tone];
}
