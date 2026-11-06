#!/usr/bin/env node
/*
  Builds the website from src/. Run it after changing anything in src/:

      node tools/build.mjs

  It writes index.html, sw.js, assets/css/style.css and assets/js/main.js.
  Those four files are what visitors download, so do not edit them by hand:
  the next build replaces them.

  src/index.html, src/style.css and src/main.js are ordered lists. The order
  matters, above all for the styles, because later rules override earlier ones.

      @include path     puts that file here
      @compact folder   puts every file in that folder here, in name order, on one line

  Each visitor still gets one stylesheet and one script, however many files
  there are in src/, so splitting the source costs phones nothing.
*/
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'src');
const read = (...parts) => fs.readFileSync(path.join(...parts), 'utf8').replace(/\r\n/g, '\n');

function assemble(list) {
  return read(SRC, list).split('\n').map(line => {
    const [, word, target] = line.match(/^@(include|compact) (\S+)$/) || [];
    if (word === 'include') return read(SRC, target).replace(/\n$/, '');
    if (word === 'compact') return fs.readdirSync(path.join(SRC, target)).sort().map(file => read(SRC, target, file).replace(/\n/g, '')).join('');
    return line;
  }).join('\n');
}

const files = {
  'index.html': assemble('index.html'),
  'assets/css/style.css': assemble('style.css'),
  'assets/js/main.js': assemble('main.js'),
  'sw.js': read(SRC, 'sw.js'),
};

// A new version on every change, so browsers and the service worker never mix old and new files.
const fingerprint = Object.values(files).join('') + read(ROOT, 'assets/fonts/fonts.css');
const version = crypto.createHash('sha256').update(fingerprint).digest('hex').slice(0, 8);

const NOTE = 'Built by tools/build.mjs from src/. Edit src/, not this file.';
for (const [file, text] of Object.entries(files)) {
  const out = text.replaceAll('__V__', version);
  const stamped = file.endsWith('.html') ? out.replace('\n', `\n<!-- ${NOTE} -->\n`) : `/* ${NOTE} */\n${out}`;
  fs.writeFileSync(path.join(ROOT, file), stamped);
}
console.log(`built version ${version}`);
