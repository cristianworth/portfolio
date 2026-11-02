# Verificação da entrega 0.1.0

Data: 29/10/2026. Escopo: este portfólio, sem executar novamente as suítes dos produtos apresentados.

## Verificações locais

- `npm test`: dois testes de normalização das rotas, acesso por `index.html`, base do Pages e caminhos desconhecidos.
- `npm run build`: TypeScript estrito, build cliente Vite e renderização estática de início, dois cases, créditos e 404.
- `npm run verify`: cinco páginas e 90 referências locais de arquivos, links e âncoras verificadas. Cada página tem um H1, canonical válido e conteúdo renderizado.
- Auditoria após atualização das dependências: zero vulnerabilidades informadas pelo npm.
- Browser Chromium: desktop 1440×1000, celular 390×844 e conferência de largura mínima em 320 pixels. Menu, troca do projeto em destaque e recarga direta dos cases exercitados.
- Escape no menu móvel devolve o foco ao botão Menu. Skip link, foco e percurso por teclado conferidos na revisão do navegador.
- `prefers-reduced-motion` remove entrada da vitrine, inclinação, transições e rolagem suave; regra conferida no CSS.
- As capturas têm versões WebP 640/1280, proporção reservada, alt e carregamento adiado fora da abertura. Fontes locais, sem dependência de Google Fonts.
- Console sem erros/avisos observados no percurso local. Sem rolagem horizontal nas larguras conferidas.

## Links e conteúdo

Repositórios, documentos dos cases e fontes de capturas responderam com HTTP 200. Worklog, Weather, Nextage e Fitness foram abertos e identificados como os produtos esperados. Nextage e Fitness concluíram suas publicações durante esta entrega; as URLs documentadas foram verificadas antes da inclusão. A checagem automatizada do LinkedIn retornou 999, bloqueio do serviço; o endereço é o fornecido por Cristian.

Revisão independente das fontes conferiu separação demo/piloto, assistência de IA, uso de TeamCity, autoria pontual de testes e interesses futuros. Não há currículo presumido, anos, métricas ou resultados profissionais inventados.

## Limites

- Não houve execução em aparelho físico, Safari ou Firefox, nem auditoria por leitor de tela. A revisão responsiva usou viewport do navegador.
- Os testes do site não certificam os fluxos das aplicações externas.
- Os fluxos completos de Nextage e Fitness pertencem às validações dos respectivos projetos. Aqui foram conferidos entrada, identificação da demo e destinos dos links.
- OCR não tem captura pública elegível. Gacha compartilhado não é apresentado como demo descartável.

## Publicação

GitHub Pages habilitado com source GitHub Actions no repositório público `cristianworth/portfolio`. [Primeira publicação aprovada](https://github.com/cristianworth/portfolio/actions/runs/40930290331), a partir do commit `438a099`.

A [integração das demos públicas de Nextage e Fitness também passou no Actions](https://github.com/cristianworth/portfolio/actions/runs/40931212767). A checagem dos 36 endereços usados encontrou 35 respostas 200 e apenas o bloqueio automatizado 999 do LinkedIn. Capturas atualizadas recebem nomes novos para evitar que uma versão antiga permaneça no cache do navegador.

A conferência HTTP pública retornou 200 para início, os dois cases e créditos, com títulos/canonical específicos e conteúdo pré-renderizado. Um caminho inexistente retornou 404 com a página própria. JS, CSS, favicon e as cinco capturas responderam com 200. Os dois cases foram abertos diretamente e recarregados em desktop e celular. As seis imagens da página inicial carregaram no navegador, sem erros de console observados.

Capturas da revisão local ficam em `work/qa/` (ignoradas pelo Git): desktop, celular, página completa e os dois cases em ambas as larguras. Relatórios HTTP ficam em `work/link-report.json` e `work/public-report.json`. A entrega do chat inclui as capturas finais.

## Revisão de apresentação 0.1.1 — 01/11/2026

- Consulta à conversa “cristianworth readme” e ao README atual, apenas para leitura.
- Nome e cargo na abertura; descrições diretas em projetos, cases, experiência, Sobre e contato.
- Stacks profissionais e de projetos pessoais reunidas por área, incluindo Express, jQuery, NHibernate, Supabase e ferramentas de testes e entrega.
- Participação de IA descrita nos cases e créditos, sem ressalvas repetidas sobre as skills. Interesse em IA redigido como integração de LLMs em aplicações.
- E-mail público incorporado ao contato; metadados e nova imagem de compartilhamento alinhados ao perfil.
- Build, TypeScript, dois testes de rotas e 90 referências locais aprovados. Conferência no navegador em desktop e celular, incluindo largura mínima de 320 pixels, sem rolagem horizontal.
- Capturas da revisão em `work/qa/2026-11-01/`. Não houve execução em aparelho físico ou auditoria por leitor de tela.
