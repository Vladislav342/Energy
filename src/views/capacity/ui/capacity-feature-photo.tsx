import Image from 'next/image';

import { cn } from '@/shared/lib';

type CapacityFeaturePhotoProps = {
    mainSrc: string;
    mainAlt: string;
    insetSrc: string;
    insetAlt: string;
    /** Коли колонка з фото зліва — інсет і акценти дзеркаляться */
    mirror?: boolean;
    className?: string;
};

export function CapacityFeaturePhoto({
    mainSrc,
    mainAlt,
    insetSrc,
    insetAlt,
    mirror = false,
    className,
}: CapacityFeaturePhotoProps) {
    return (
        <figure
            className={cn(
                'relative mx-auto w-full max-w-lg lg:max-w-none',
                mirror ? 'lg:justify-self-start' : 'lg:justify-self-end',
                className,
            )}
        >
            <div
                className={cn(
                    'about-photo-stripes pointer-events-none absolute h-32 w-40 opacity-90',
                    mirror ? '-right-6 top-8' : '-left-6 top-8',
                )}
                aria-hidden
            />
            <div
                className={cn(
                    'about-photo-stripes pointer-events-none absolute h-28 w-36 opacity-90',
                    mirror ? '-left-4 bottom-4' : '-bottom-4 right-0',
                )}
                aria-hidden
            />

            <div className={cn('relative w-[88%] max-w-md', mirror ? 'mr-auto lg:w-full' : 'ml-auto lg:w-full')}>
                <div
                    className={cn(
                        'absolute inset-0 bg-[var(--accent)]',
                        mirror ? '-translate-x-4 translate-y-4' : 'translate-x-4 translate-y-4',
                    )}
                    aria-hidden
                />

                <div className='relative aspect-[4/5] overflow-hidden bg-zinc-100 sm:aspect-[3/4]'>
                    <div
                        className='pointer-events-none absolute left-0 top-0 z-10 h-16 w-[3px] bg-[var(--accent)]'
                        aria-hidden
                    />
                    <div
                        className='pointer-events-none absolute left-0 top-0 z-10 h-[3px] w-16 bg-[var(--accent)]'
                        aria-hidden
                    />
                    <div
                        className='pointer-events-none absolute bottom-0 right-0 z-10 h-16 w-[3px] bg-[var(--accent)]'
                        aria-hidden
                    />
                    <div
                        className='pointer-events-none absolute bottom-0 right-0 z-10 h-[3px] w-16 bg-[var(--accent)]'
                        aria-hidden
                    />
                    <Image
                        src={mainSrc}
                        alt={mainAlt}
                        fill
                        sizes='(max-width: 1024px) 88vw, 480px'
                        className='object-cover object-center'
                    />
                </div>

                <div
                    className={cn(
                        'absolute w-[42%] overflow-hidden border-4 border-white bg-zinc-100 shadow-[0_20px_40px_-12px_rgba(15,23,42,0.35)]',
                        mirror ? '-left-4 -top-4 sm:-left-6 sm:-top-6' : '-right-4 -top-4 sm:-right-6 sm:-top-6',
                    )}
                >
                    <div className='relative aspect-square w-full'>
                        <Image
                            src={insetSrc}
                            alt={insetAlt}
                            fill
                            sizes='(max-width: 1024px) 40vw, 200px'
                            className='object-cover object-center'
                        />
                    </div>
                </div>
            </div>
        </figure>
    );
}
