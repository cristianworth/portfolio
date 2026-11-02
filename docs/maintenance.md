# Atualizar projetos e links

## Conteúdo

Edite `src/content.ts`. `projects` controla nome, proposta, foco, stack contextualizada, estágio, código, captura e demo. `cases` controla problema, fluxo, decisões, trade-offs, validação, limites, participação e fontes dos dois cases.

Para incluir uma demo:

1. Obtenha a URL publicada na documentação ou no resultado de deploy do projeto.
2. Abra no navegador e confirme que é o produto correto, com entrada útil. Um HTTP 200 sozinho não verifica os fluxos.
3. Confira conta/instalação, dados fictícios ou reais, isolamento e operações simuladas.
4. Acrescente `demo` com a URL HTTPS e atualize `status` e `demoNote`. O link aparece automaticamente. Sem URL verificada, omita `demo`: o código e o case continuam acessíveis.
5. Releia o case se o estágio tiver mudado. Não transforme publicação de demo em conclusão do piloto.

Experiência e apresentação ficam em `src/App.tsx`. Cargo, empresa, contato e os quatro grupos de tecnologias (`stackGroups`) ficam em `src/content.ts`. As stacks reúnem experiência profissional e projetos pessoais. Use descrições diretas, sem slogans e sem transformar o uso de IA em ressalvas repetidas sobre as habilidades. Evite datas, métricas e responsabilidades sem confirmação.

## Capturas

Use somente material público/autorizado, com dados fictícios quando necessário. Gere duas versões WebP de largura 640 e 1280 (sem ampliar a original), preserve proporção e use o padrão `nome-640.webp` / `nome-1280.webp` em `public/assets/`. Atualize `image`, `imageAlt`, `imageWidth` e `imageHeight`; esses dois últimos representam a proporção da original. Registre origem e direitos em `NOTICE.md` e na página de créditos. As marcas dos produtos permanecem nas capturas.

O screenshot Worklog original usa extensão PNG com conteúdo JPEG; qualquer conversor que detecte o formato pelo conteúdo pode lê-lo. Não use imagens pessoais do laboratório OCR.

O utilitário incluído faz a conversão: `node scripts/prepare-image.mjs project-name caminho-da-imagem-autorizada`. A origem não é adicionada automaticamente ao Git; confira dados e direitos antes de usar. Ao substituir uma captura publicada, use um nome novo (por exemplo, `nextage-public` ou uma data) e atualize `image`, para que navegadores recebam a imagem nova sem aguardar expiração do cache.

Fontes ficam nos pacotes `@fontsource-variable/*`; suas licenças públicas em `public/licenses/`. Atualize os avisos ao trocar tipografia. A imagem social é `public/assets/profile-social.png` (1200×630), gerada por `node scripts/generate-social.mjs`. Ao trocar o nome do arquivo, atualize os metadados em `index.html`.

## Rotas e metadados

O base do site é `/portfolio/` em `vite.config.ts`. As rotas existentes são `/`, `/cases/nextage-class/`, `/cases/worklog/` e `/creditos/`, sempre sob esse base. Não é necessário configurar rewrites no Pages.

Ao adicionar uma rota, ajuste o mapa em `src/routes.mjs`, seu conteúdo em `App.tsx`, a lista em `scripts/generate-pages.mjs` e o teste de rotas. O gerador renderiza HTML, metadados/canonical individuais e sitemap. `index.html` concentra os metadados comuns e a imagem de compartilhamento. Para outro domínio/base, ajuste também esses endereços e os helpers em `App.tsx`.

## Conferir e publicar

```sh
npm test
npm run build
npm run verify
npm run preview
```

Confira os tamanhos desktop/celular, menu, Tab/Enter/Escape, imagens, links e recarga direta dos cases. Depois faça commit e push para `main`. O workflow publica `dist`. Se falhar, consulte a etapa do Actions antes de repetir o deploy. A publicação exige permissões Pages habilitadas com source GitHub Actions.

Antes de uma nova versão, leia `CHANGELOG.md` e combine o incremento com Cristian. A primeira entrega inteira usa 0.1.0 por autorização explícita, mesmo com mais de um commit.

## Trecho sugerido para o perfil GitHub

O repositório do perfil não foi alterado. Sugestão:

```md
## Portfólio

[Conheça meu portfólio](https://cristianworth.github.io/portfolio/) — experiência em backend .NET, aplicações para experimentar e cases com decisões de engenharia.
```
