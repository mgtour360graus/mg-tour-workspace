'use strict';
const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const root = path.resolve(__dirname, '../dist');
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml' };
function createServer() {
  return http.createServer(async (req, res) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Cache-Control', 'no-store');
    if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, { Allow: 'GET, HEAD' }); return res.end(); }
    try {
      const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      const segments = pathname.replaceAll('\\', '/').split('/');
      if (segments.some(s => s.startsWith('.'))) { res.writeHead(403); return res.end('Forbidden'); }
      const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
      const real = await fs.realpath(file);
      if (!real.startsWith(root + path.sep)) { res.writeHead(403); return res.end('Forbidden'); }
      const data = await fs.readFile(real);
      res.writeHead(200, { 'Content-Type': types[path.extname(real)] || 'application/octet-stream', 'Content-Length': data.length });
      res.end(req.method === 'HEAD' ? undefined : data);
    } catch (error) {
      res.writeHead(error instanceof URIError ? 400 : 404); res.end('Not found');
    }
  });
}
if (require.main === module) {
  const port = Number(process.env.PORT || 8794);
  const host = process.env.HOST || (process.env.CODESPACES === 'true' ? '0.0.0.0' : '127.0.0.1');
  const server = createServer();
  server.on('error', error => { console.error(error.message); process.exitCode = 1; });
  server.listen(port, host, () => console.log(`MG Tour Workspace: http://localhost:${port}`));
}
module.exports = { createServer };
