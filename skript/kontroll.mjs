// Kontroll före commit: förbjudna ord och tecken, en h1 per sida, unika title och description,
// inga style-attribut, inga skript utom JSON-LD. Körs på dist/ efter npm run build.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;
const forbidden = [
  'professionell', 'effektiv', 'sömlös', 'optimera', 'skräddarsydd', 'holistisk', 'kraftfull', 'trygg och säker',
  'föränderlig värld', 'ta nästa steg', 'nästa nivå', 'inte bara',
  'professional', 'efficient', 'seamless', 'optimise', 'optimize', 'tailored', 'holistic', 'powerful',
  'safe and secure', 'fast and secure', 'trusted partner', 'changing world', 'take the next step', 'next level',
  'world-class', 'cutting-edge', 'best-in-class', 'not only',
];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith('.html')) out.push(p);
  }
  return out;
}

const files = walk(root);
const titles = new Map();
const descriptions = new Map();
const errors = [];

for (const file of files) {
  const rel = file.slice(root.length);
  const html = readFileSync(file, 'utf8');
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) errors.push(`${rel}: ${h1} h1, ska vara exakt 1`);
  const title = (html.match(/<title>(.*?)<\/title>/s) || [])[1];
  if (!title) errors.push(`${rel}: saknar title`);
  else if (titles.has(title)) errors.push(`${rel}: title dubblerad med ${titles.get(title)}`);
  else titles.set(title, rel);
  const desc = (html.match(/<meta name="description" content="(.*?)"/s) || [])[1];
  if (!desc) errors.push(`${rel}: saknar meta description`);
  else if (descriptions.has(desc)) errors.push(`${rel}: description dubblerad med ${descriptions.get(desc)}`);
  else descriptions.set(desc, rel);
  if (/\sstyle="/.test(html)) errors.push(`${rel}: style-attribut i markup, bryter mot CSP`);
  if (/<style[\s>]/.test(html)) errors.push(`${rel}: style-tagg i markup, bryter mot CSP`);
  const scripts = html.match(/<script[^>]*>/g) || [];
  for (const s of scripts) if (!/type="application\/ld\+json"/.test(s)) errors.push(`${rel}: skript i markup: ${s}`);
  const body = html.replace(/<script[^>]*>[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ').replace(/&#39;/g, '’').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
  const text = body.replace(/\s+/g, ' ');
  if (/[—–]/.test(text)) errors.push(`${rel}: tankstreck i text`);
  if (/!/.test(text)) errors.push(`${rel}: utropstecken i text`);
  if (/ - /.test(text)) errors.push(`${rel}: bindestreck som paus`);
  if (/ · /.test(text)) errors.push(`${rel}: mittpunkt mellan uppgifter`);
  if (/[?]\s*<\/h[1-3]>/.test(html) || /<h[1-3][^>]*>[^<]*\?/.test(html)) errors.push(`${rel}: frågerubrik`);
  const lower = text.toLowerCase();
  for (const w of forbidden) {
    const re = new RegExp(`(^|[^a-zåäö])${w.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}([^a-zåäö]|$)`, 'i');
    if (re.test(lower)) errors.push(`${rel}: förbjudet ord "${w}"`);
  }
}

if (errors.length) {
  console.error(`Kontrollen hittade ${errors.length} fel:`);
  for (const e of errors) console.error('  ' + e);
  process.exit(1);
}
console.log(`Kontroll klar. ${files.length} sidor, inga fel.`);
