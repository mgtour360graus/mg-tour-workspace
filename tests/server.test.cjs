'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const { createServer } = require('../scripts/serve.cjs');
test('servidor entrega somente dist e bloqueia arquivos de projeto', async t => {
  const server = createServer();
  server.listen(0, '127.0.0.1'); await once(server, 'listening');
  t.after(() => new Promise(resolve => server.close(resolve)));
  const base = `http://127.0.0.1:${server.address().port}`;
  const page = await fetch(base);
  assert.equal(page.status, 200); assert.match(await page.text(), /MG Tour 360/);
  for (const route of ['/.git/config', '/.env', '/package.json', '/evidencias/backup.json', '/%2e%2e%5cpackage.json']) {
    const response = await fetch(base + route); assert.ok([403, 404].includes(response.status), route);
  }
  assert.equal((await fetch(base + '/app.js')).headers.get('content-type'), 'text/javascript; charset=utf-8');
  assert.equal((await fetch(base, { method: 'POST' })).status, 405);
});
