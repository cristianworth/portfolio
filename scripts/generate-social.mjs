import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#142c54"/>
  <path d="M80 80v435" stroke="#7ee6f2" stroke-width="6"/>
  <text x="120" y="176" font-family="Segoe UI,sans-serif" font-size="82" font-weight="700" fill="#fff">Cristian</text>
  <text x="120" y="276" font-family="Segoe UI,sans-serif" font-size="82" font-weight="700" fill="#fff">Weissmantel</text>
  <text x="120" y="356" font-family="Segoe UI,sans-serif" font-size="36" fill="#7ee6f2">Desenvolvedor Pleno</text>
  <text x="120" y="428" font-family="Segoe UI,sans-serif" font-size="29" fill="#e0e8f6">C# / .NET / React / TypeScript</text>
  <text x="120" y="477" font-family="Segoe UI,sans-serif" font-size="26" fill="#c3cfe2">Node.js / SQL Server / PostgreSQL</text>
  <text x="120" y="570" font-family="Segoe UI,sans-serif" font-size="23" fill="#a9c4e6">cristianworth.github.io/portfolio</text>
</svg>`;
await mkdir('public/assets', { recursive: true });
await sharp(Buffer.from(svg)).png().toFile('public/assets/profile-social.png');
console.log('Generated profile sharing image: 1200 × 630.');
