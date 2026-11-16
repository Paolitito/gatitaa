// Erzeugt puerta.js: der Name wird mit dem Zugangscode verschlüsselt.
// Aufruf: node mkpuerta.js <code> <name> <zieldatei>
const { webcrypto: c } = require('crypto'); const fs = require('fs');
(async () => {
  const [code, name, out] = process.argv.slice(2);
  const norm = s => s.trim().toLowerCase().replace(/\s+/g, ' ');
  const salt = c.getRandomValues(new Uint8Array(16)), iv = c.getRandomValues(new Uint8Array(12)), n = 200000;
  const km = await c.subtle.importKey('raw', new TextEncoder().encode(norm(code)), 'PBKDF2', false, ['deriveKey']);
  const key = await c.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: n, hash: 'SHA-256' }, km, { name: 'AES-GCM', length: 256 }, false, ['encrypt']);
  const ct = await c.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(JSON.stringify({ n: name })));
  const b = u => Buffer.from(u).toString('base64');
  fs.writeFileSync(out, `window.PUERTA=${JSON.stringify({ s: b(salt), i: b(iv), c: b(new Uint8Array(ct)), n })};\n`);
})();
