import { cn } from '@/shared/lib';
import type { PageShellProps } from '@/shared/types';

export function PageShell({ title, description, children, className }: PageShellProps) {
    return (
        <article
            className={cn(
                'rounded-2xl border border-blue-200/80 bg-white/90 p-8 shadow-sm shadow-blue-200/40 backdrop-blur-sm md:p-10',
                className,
            )}
        >
            <header className='mb-8 border-b border-slate-100 pb-6'>
                <h1 className='font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl'>
                    {title}
                </h1>
                {description ? (
                    <p className='mt-3 max-w-3xl text-base leading-relaxed text-slate-600'>{description}</p>
                ) : null}
            </header>
            <div className='space-y-6 text-slate-700 [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h2]:first:mt-0 [&_li]:text-slate-700 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5'>
                {children}
            </div>
        </article>
    )
}
