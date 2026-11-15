import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from './parse.js';

const INPUT_DIR = process.env.MAKEFUN_INPUT_DIR || '/input';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || '/output';

const casesPath = join(INPUT_DIR, 'cases.json');
const rawData = readFileSync(casesPath, 'utf8');
const cases: Array<{ id: string; markdown: string }> = JSON.parse(rawData);

const htmls: string[] = cases.map((c) => parse(c.markdown));

const outputPath = join(OUTPUT_DIR, 'html.json');
writeFileSync(outputPath, JSON.stringify(htmls), 'utf8');
