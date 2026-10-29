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

Repositórios, documentos dos cases e fontes de capturas responderam com HTTP 200. Worklog e Weather responderam e foram identificados como os produtos esperados. A checagem automatizada do LinkedIn retornou 999, bloqueio do serviço; o endereço é o fornecido por Cristian. As páginas do próprio portfólio serão reconferidas após o deploy.

Revisão independente das fontes conferiu separação demo/piloto, assistência de IA, uso de TeamCity, autoria pontual de testes e interesses futuros. Não há currículo presumido, anos, métricas ou resultados profissionais inventados.

## Limites

- Não houve execução em aparelho físico, Safari ou Firefox, nem auditoria por leitor de tela. A revisão responsiva usou viewport do navegador.
- Os testes do site não certificam os fluxos das aplicações externas.
- Nextage e Fitness têm trabalho de publicação em andamento em outros chats; não foram incluídas URLs presumidas.
- OCR não tem captura pública elegível. Gacha compartilhado não é apresentado como demo descartável.

## Publicação

GitHub Pages habilitado com source GitHub Actions no repositório público `cristianworth/portfolio`. O resultado da execução e a conferência pública são registrados após o primeiro push.
