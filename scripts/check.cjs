'use strict';
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const files = fs.readdirSync(path.join(root, 'dist')).filter(f => f.endsWith('.js'));
for (const file of files) execFileSync(process.execPath, ['--check', path.join(root, 'dist', file)], { stdio: 'inherit' });
const html = fs.readFileSync(path.join(root, 'dist/index.html'), 'utf8');
for (const [, source] of html.matchAll(/(?:src|href)="([^"#]+\.(?:js|css))"/g)) {
  if (!fs.existsSync(path.join(root, 'dist', source))) throw Error('Asset ausente: ' + source);
}
console.log(`Sintaxe de ${files.length} arquivos JavaScript e assets do HTML verificados.`);
