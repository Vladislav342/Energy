import Image from 'next/image';

import type { LandingSectionTone } from '@/views/landing/landing-section-surface';
import { cn } from '@/shared/lib';

const frameByTone: Partial<Record<LandingSectionTone, string>> = {
    overview: 'border-slate-300/90 ring-slate-200/60',
    about: 'border-cyan-200/80 ring-cyan-100/50',
    license: 'border-slate-300/80 ring-slate-200/50',
    capacity: 'border-amber-200/80 ring-amber-100/45',
    production: 'border-sky-200/80 ring-sky-100/45',
    environment: 'border-emerald-200/80 ring-emerald-100/45',
    disclosure: 'border-violet-200/75 ring-violet-100/45',
    financial: 'border-stone-300/80 ring-stone-200/50',
    contacts: 'border-slate-300/90 ring-slate-200/55',
};

type LandingSectionPhotoProps = {
    src: string;
    alt: string;
    tone?: LandingSectionTone;
    variant?: 'banner' | 'card';
    className?: string;
    priority?: boolean;
};

export function LandingSectionPhoto({
    src,
    alt,
    tone,
    variant = 'banner',
    className,
    priority = false,
}: LandingSectionPhotoProps) {
    const aspect =
        variant === 'banner'
            ? 'aspect-[3/2] min-h-[13.5rem] sm:min-h-0 sm:aspect-[2.2/1]'
            : 'aspect-[5/4] min-h-[15rem] sm:min-h-0 sm:aspect-[4/3]';

    return (
        <figure
            className={cn(
                'overflow-hidden rounded-2xl border bg-slate-100 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.28)] ring-1',
                tone ? frameByTone[tone] : 'border-slate-200/80 ring-slate-200/50',
                className,
            )}
        >
            <div className={cn('relative w-full', aspect)}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority={priority}
                    sizes={variant === 'banner' ? '(max-width: 768px) 100vw, 896px' : '(max-width: 768px) 100vw, 440px'}
                    className='object-cover object-center'
                />
                <div
                    className='pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-slate-900/5'
                    aria-hidden
                />
            </div>
        </figure>
    );
}
