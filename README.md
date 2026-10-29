# Cristian Weissmantel · Portfolio

Portfólio pessoal com experiência em backend .NET, projetos e decisões concretas de engenharia. React, TypeScript e Vite, com páginas estáticas pré-renderizadas e publicação gratuita no GitHub Pages.

**[Abrir o site](https://cristianworth.github.io/portfolio/)** · [Nextage Class: case](https://cristianworth.github.io/portfolio/cases/nextage-class/) · [Worklog: case](https://cristianworth.github.io/portfolio/cases/worklog/)

## Executar

Node.js 24 e npm. Não exige conta, serviço de dados, chave ou `.env`.

```sh
npm ci
npm run dev
```

Abra o endereço impresso com o subcaminho `/portfolio/`. Para conferir a entrega estática:

```sh
npm test
npm run build
npm run verify
npm run preview
```

O build verifica TypeScript, gera os assets do cliente e renderiza HTML real para início, cases e créditos. Cada case tem seu próprio `index.html`; abrir ou recarregar diretamente não depende de um fallback de SPA. O JavaScript hidrata o HTML para o menu móvel e o seletor de destaque.

## Atualizar

- Projetos, estágios, URLs e textos dos cases: `src/content.ts`.
- Experiência, apresentação, contato e créditos: `src/App.tsx`.
- Visual e responsividade: `src/styles.css`.
- Metadados gerais: `index.html`. Metadados por página e sitemap: `scripts/generate-pages.mjs`.
- Capturas: `public/assets/`. Preserve créditos em `NOTICE.md` e na página de créditos.

Leia o [guia de manutenção](docs/maintenance.md) antes de adicionar uma demo ou uma rota. [Direção visual](docs/design.md), [fontes e decisões editoriais](docs/content-sources.md), [validação](docs/verification.md) e [roteiro de revisão de dez minutos](docs/review-guide.md).

## Publicação e limites

O workflow `.github/workflows/pages.yml` compila, verifica e publica somente `dist` em cada push para `main`. Pages precisa estar configurado com source **GitHub Actions**. Configuração baseada nos guias oficiais de [Vite](https://vite.dev/guide/static-deploy.html#github-pages) e [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-github-actions-for-github-pages).

As demos dos projetos têm suas próprias garantias e estágios. Nextage demonstra dados fictícios e é separado do piloto com servidor; Worklog simula o envio; Fitness usa um banco demonstrativo isolado. Essas demos e Weather têm URLs públicas verificadas. Gacha Cloud tem perfis compartilhados e não é oferecido como demo descartável; OCR é laboratório local. A assistência de IA está declarada, e a prática profissional é separada do aprendizado em projetos.

Código e conteúdo originais sob [MIT](LICENSE). Materiais de terceiros em [NOTICE.md](NOTICE.md). Este site foi implementado com assistência de IA a partir do escopo e das evidências fornecidas por Cristian.
