// agency-poem-01 entry (Node 22, standard library only).
// Writes one original poem about agency to /output/entry.txt.
// The grader sets no MAKEFUN_OUTPUT_DIR; locally it stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The poem is fixed data, so both runs write byte-identical output.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem: a speaker lends an agent their errands, key by key, and finds
// that the one thing that cannot be handed over is the choosing itself —
// the wanting, and the moment just before the act where a course is set.
const LINES = [
  'I gave my agent the keys to the house of my days:',
  'answer the letters, mend the fence, water the rows.',
  'It works while I sleep, tireless, exact,',
  'and everything gets done except the choosing.',
  '',
  'It can carry an errand to the end of the earth,',
  'but it cannot want the thing it carries.',
  'Wanting is the one job that will not transfer.',
  'The hand can be lent; the hunger stays home.',
  '',
  'So every morning I take back the smallest key —',
  'not the doing; that I gladly share —',
  'but the moment before the doing, where one road becomes two',
  'and somebody, me, must say: this way.',
];

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINES.join('\n'));
