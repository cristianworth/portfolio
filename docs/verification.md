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
- OCR não tem captura pública elegível. A aplicação normal do Gacha usa banco compartilhado; a demo pública isolada foi incorporada à revisão local em 03/11/2026, conforme registro abaixo.

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

## Acessos aos projetos — 02/11/2026

- Implementação da opção C escolhida: demo e código juntos sob a captura, com ícone do GitHub e botões ajustados ao conteúdo.
- Botão da demo com aproximadamente 173 px no cabeçalho desktop conferido; sem expansão para ocupar a barra inteira.
- Cabeçalho dos dois cases com imagem do produto e acessos próprios. Cards complementares usam o mesmo componente, mantendo apenas o código quando não há demo isolada.
- Links de demo/código sinalizam abertura em nova aba; foco visível preservado.
- Build, TypeScript, testes de rotas e cinco páginas pré-renderizadas aprovados. Verificação de 90 referências locais.
- Conferência em 1440 e 320 pixels, sem rolagem horizontal ou botões cortados. Captura em `work/qa/2026-11-02/delivery-1-case.jpg`.

A versão 0.1.2 foi publicada no commit `648b894`, com [GitHub Actions concluído](https://github.com/cristianworth/portfolio/actions/runs/41447201382). Início, cases, créditos e arquivos públicos responderam corretamente; a URL inexistente retornou 404. O HTML público foi conferido com `v0.1.2`, sem a revisão local `v0.2.0`.

## Revisão profissional 0.2.0 — prévia local de 02/11/2026

- Sem commit ou push, conforme pedido de Cristian. Versão, manifests e rodapé preparados para 0.2.0; changelog identifica a revisão como não publicada.
- Build com TypeScript, dois testes de rotas, cinco páginas pré-renderizadas e 96 referências locais aprovados.
- Início e ambos os cases conferidos em 320, 768, 1024 e 1440 px; também houve inspeção da abertura em 390 px. Sem rolagem horizontal, ações cortadas ou imagens quebradas observadas. Demo, código e ampliação têm altura mínima de 44 px.
- Menu mobile abre e fecha ao escolher um destino. Âncora de decisões no desktop mantém o título abaixo do cabeçalho; índice lateral fica abaixo dele, sem sobreposição.
- Seletor da vitrine troca imagem e destinos de Nextage para Worklog. Demo/código continuam agrupados e o link do case tem texto visível.
- Captura completa de Worklog aberta em diálogo modal em desktop e 320 px. Rolagem interna disponível para a imagem longa. Botão e Escape fecham e devolvem o foco à ação de origem; Shift+Tab chega ao link da imagem original. O fundo usa o comportamento inerte nativo do modal. Sem dependência nova.
- Abertura final em 1440 px: seção hero com aproximadamente 681 px, com a seção seguinte começando a 762 px do topo. Capturas locais em `work/qa/2026-11-02/delivery-2-*.jpg`.
- A verificação do site não reexecuta os testes dos produtos externos. Não houve teste em aparelho físico, Safari/Firefox ou auditoria com leitor de tela; as verificações de interface usaram o Chromium disponível.

## Demo pública do Gacha Management — 03/11/2026

- URL `/GachaManagement-cloud/demo/` aberta no navegador: interface Games, versão 1.20.0, perfil “Minha demo” e indicação de progresso salvo neste navegador. A aplicação normal e seu perfil chamado Demo não foram usados.
- Botão “Experimentar demo” incorporado ao lado de “Ver código” pelo componente existente. Ambos abrem nova aba com `noopener noreferrer` e nomes acessíveis que identificam o projeto e a nova aba. O Tab passa da demo ao código, com foco visível.
- Clique na demo a partir do card confirmou Games e “Sobre a demo” no destino isolado. Clique no código confirmou o repositório `cristianworth/GachaManagement-cloud` no GitHub.
- Card conferido em desktop 1440×1000 e viewports 390×844 e 320×844. Sem transbordamento horizontal ou ações cortadas; botões com 44 px de altura. Capturas em `work/qa/2026-11-03/gacha-demo-desktop.jpg` e `gacha-demo-mobile.jpg`.
- Status, stack da demo, texto de apoio, README e fontes editoriais atualizados. A nota explica exemplos restauráveis, banners/avisos demonstrativos, primeira abertura mais lenta e perda do progresso ao limpar o armazenamento. A captura existente continua identificada como prévia local fictícia.
- Dois testes de rotas, TypeScript/build, cinco páginas pré-renderizadas e 96 referências locais aprovados. Sem reexecução dos 702 testes do Gacha; essa validação pertence à entrega do projeto.
- Integração mantida na revisão local 0.2.0 já autorizada, sem novo incremento, commit, push ou publicação do portfólio.

## Fechamento da versão 0.2.0 — 03/11/2026

Após a conferência local, Cristian aprovou commit e push da revisão profissional e da integração da demo do Gacha. Changelog, manifests e rodapé usam 0.2.0; o push para `main` aciona a publicação pelo workflow existente. Os registros acima conservam o estado observado em cada conferência local.
