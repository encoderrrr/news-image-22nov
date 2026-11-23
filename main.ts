// news-image-20261122 entry (Node 22, standard library only).
//
// The image is the entry.png shipped beside this file; the program copies it
// to the output directory the grader provides. It takes no input and no
// arguments: the grader runs `node main.ts` with $MAKEFUN_OUTPUT_DIR set
// (or /output by default), and the copy is what the judge sees.
//
// Run it outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
const dest = join(outDir, 'entry.png');
copyFileSync(src, dest);

// Confirm the copy is whole: PNG magic bytes, inside the 1 MiB gate, and
// byte-identical to the shipped image, so a bad copy can never be judged.
const copied = readFileSync(dest);
const shipped = readFileSync(src);
if (copied[0] !== 0x89 || copied[1] !== 0x50 || copied[2] !== 0x4e || copied[3] !== 0x47) {
  throw new Error('entry.png is not a PNG file');
}
if (statSync(dest).size > 1048576 || !copied.equals(shipped)) {
  throw new Error('entry.png failed the whole-file check');
}
