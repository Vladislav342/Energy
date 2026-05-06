/** Спільна поверхня карток секцій лендингу (overview + якорні блоки). */
export const landingSectionSurface =
    'relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white via-white to-slate-50/50 p-8 shadow-[0_22px_48px_-32px_rgba(15,23,42,0.2)] ring-1 ring-white/80 backdrop-blur-sm md:p-10 lg:p-11';

export function LandingSectionDecor() {
    return (
        <>
            <div
                className='pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/45 to-transparent sm:inset-x-10'
                aria-hidden
            />
            <div
                className='pointer-events-none absolute -right-24 -top-28 h-60 w-60 rounded-full bg-gradient-to-br from-cyan-400/[0.09] via-transparent to-transparent blur-3xl'
                aria-hidden
            />
            <div
                className='pointer-events-none absolute -bottom-32 -left-28 h-56 w-56 rounded-full bg-slate-400/[0.07] blur-3xl'
                aria-hidden
            />
        </>
    );
}
