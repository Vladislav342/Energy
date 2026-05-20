import { readFileSync, writeFileSync } from 'fs';

const files = process.argv.slice(2);
const close = '</' + 'div' + '>';
const open = '<' + 'motion';

for (const p of files) {
    let s = readFileSync(p, 'utf8');
    s = s.replaceAll(open, '<' + 'div');
    s = s.replaceAll('</motion>', close);
    writeFileSync(p, s);
}
