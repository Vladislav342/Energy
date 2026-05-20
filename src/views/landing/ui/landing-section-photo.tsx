import Image from 'next/image';

import { cn } from '@/shared/lib';

type LandingSectionPhotoProps = {
    src: string;
    alt: string;
    variant?: 'banner' | 'card';
    className?: string;
    priority?: boolean;
    dark?: boolean;
};

export function LandingSectionPhoto({
    src,
    alt,
    variant = 'banner',
    className,
    priority = false,
    dark = false,
}: LandingSectionPhotoProps) {
    const aspect =
        variant === 'banner'
            ? 'aspect-[3/2] min-h-[13.5rem] sm:min-h-0 sm:aspect-[2.15/1]'
            : 'aspect-[5/4] min-h-[15rem] sm:min-h-0 sm:aspect-[4/3]';

    return (
        <figure className={cn('relative', className)}>
            <div
                className={cn(
                    'absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4',
                    dark ? 'bg-[var(--accent)]/40' : 'bg-[var(--accent)]',
                )}
                aria-hidden
            />
            <div
                className={cn(
                    'relative overflow-hidden border bg-slate-900',
                    dark ? 'border-[var(--dark-border)]' : 'border-zinc-200',
                )}
            >
                <div className={cn('relative w-full', aspect)}>
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        priority={priority}
                        sizes={variant === 'banner' ? '(max-width: 768px) 100vw, 1200px' : '(max-width: 768px) 100vw, 560px'}
                        className='object-cover object-center'
                    />
                    <div
                        className='pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent'
                        aria-hidden
                    />
                </div>
            </div>
        </figure>
    );
}
