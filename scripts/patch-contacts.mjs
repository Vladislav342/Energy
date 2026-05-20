import { readFileSync, writeFileSync } from 'fs';

const path = 'src/views/landing/ui/landing-page.tsx';
let s = readFileSync(path, 'utf8');

const remove = `                    <div
                        className='pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl'
                        aria-hidden
                    />
                    <motion
                        className='pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-violet-400/10 blur-3xl'
                        aria-hidden
                    />

                    <motion className='relative rounded-[1.35rem] bg-white/88 p-6 shadow-inner shadow-slate-900/[0.03] backdrop-blur-sm md:p-8'>
                        <motion className='relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950 px-6 py-5 text-white shadow-inner shadow-black/20'>
                            <motion
                                className='pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-amber-300 via-cyan-400 to-cyan-600'
                                aria-hidden
                            />
                            <p className='pl-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200/90'>
                                Товариство
                            </p>
                            <p className='mt-2 pl-3 font-serif text-xl font-semibold leading-snug tracking-tight md:text-2xl'>
                                {COMPANY_NAME}
                            </p>
                        </motion>

                        `;

const insert = `                    <p className='text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]'>Товариство</p>
                    <p className='mt-2 font-serif text-xl font-semibold leading-snug text-white md:text-2xl'>{COMPANY_NAME}</p>

                    `;

const tag = 'div';
const removeFixed = remove.replaceAll('motion', tag);
const insertFixed = insert;

if (!s.includes(removeFixed.slice(0, 80))) {
    console.error('Block not found');
    process.exit(1);
}

s = s.replace(removeFixed, insertFixed);
s = s.replace("className='mt-6 grid gap-4", "className='mt-8 grid gap-4");
s = s.replace(
    `                        </div>
                    </div>
                </div>
            </LandingSection>`,
    `                    </div>
                </div>
            </LandingSection>`,
);

writeFileSync(path, s);
console.log('patched');
