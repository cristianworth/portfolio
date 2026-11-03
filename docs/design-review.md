# Revisão profissional — 0.2.0

Revisão iniciada em 02/11/2026, com a demo pública do Gacha incorporada em 03/11/2026. Cristian conferiu e aprovou o fechamento da versão 0.2.0 em 03/11/2026, incluindo commit, push e publicação pelo workflow existente.

## Critério

O visitante deve conseguir identificar nome, cargo e experiência, experimentar os projetos e entender a participação de Cristian sem ler todos os cases. O conteúdo detalhado continua disponível para avaliação técnica. A estrutura e a identidade azul, índigo e ciano foram preservadas; nenhum resultado, cargo, data de carreira ou métrica foi inventado.

## Diagnóstico e decisões

| Observação                                                                              | Decisão aplicada                                                                                                          | Resultado a conferir                                                           |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| A abertura consumia quase toda a tela desktop e repetia elementos decorativos.          | Reduzir espaçamento e altura da captura; retirar inclinação e anéis. Preservar nome, cargo, stack e produto real.         | A próxima seção começa mais cedo, sem perder a identidade.                     |
| A vitrine inicial levava somente ao case, enquanto os cards já ofereciam demo e código. | Usar o mesmo grupo compacto de acessos na vitrine. Dar nome visível ao link “Ler o case”.                                 | As mesmas ações têm a mesma aparência e significado em todo o site.            |
| Navegação sumia em páginas longas.                                                      | Fixar o cabeçalho e ajustar os destinos de âncora e o índice lateral.                                                     | Títulos continuam visíveis ao navegar; contato permanece acessível.            |
| Status, tecnologias e notas ficavam muito pequenos em telas intermediárias.             | Elevar o tamanho desses textos e manter alvos de ação confortáveis.                                                       | Contexto e limites podem ser lidos sem depender de zoom.                       |
| O papel de Cristian e o estágio da demonstração estavam espalhados por parágrafos.      | Acrescentar um resumo em três colunas nos cases, empilhado no celular.                                                    | É possível entender público, participação e versão antes da leitura longa.     |
| Capturas duplicadas alongavam os cases; o Worklog sofria corte na leitura.              | Oferecer “Ampliar” junto à prévia e mostrar a captura inteira em um diálogo nativo com rolagem.                           | Imagem completa sob demanda, fechamento por botão ou Escape e retorno do foco. |
| Algumas ressalvas repetiam o processo de montagem do portfólio.                         | Manter escopo, estágio, participação de IA e evidências; remover repetições sobre os testes não executados por este site. | Texto objetivo, com limites reais e sem desvalorizar habilidades.              |

## Referências consultadas

- [Brittany Chiang](https://brittanychiang.com/): hierarquia entre identidade, experiência e projetos selecionados. Referência de organização, sem reproduzir identidade visual, textos ou histórico.
- [Lee Robinson](https://leerob.com/): apresentação concisa e acesso direto à trajetória. A proposta aproveita concisão, sem importar os dados pessoais do autor.
- [Nielsen Norman Group — hierarquia visual](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/): contraste, escala e proximidade para orientar a atenção. Aplicado ao grupo demo/código e à redução de elementos concorrentes.
- [Nielsen Norman Group — escrita concisa e objetiva](https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/): base para resumos e textos diretos. Sem slogans promocionais.
- [W3C — tamanho mínimo de alvos](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) e [web.dev — foco](https://web.dev/learn/accessibility/focus/): referências para alvos, ordem de teclado e foco visível. Os botões de demo, código e ampliação usam altura mínima de 44 px; isso não representa certificação WCAG do site.
- [MDN — dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog): modal nativo, sem nova dependência, com fundo inerte e comportamento de Escape/foco fornecido pelo navegador.

## Próximas melhorias que dependem de evidência

- Uma trajetória com períodos e responsabilidades por experiência pode fortalecer a apresentação quando as datas e os limites estiverem confirmados.
- Resultados observados com usuários reais podem enriquecer os cases. Não substituir validação por contadores, depoimentos fictícios ou números estimados.
- Um currículo para download só deve ser incluído quando houver um documento atual aprovado.
- Conferência com visitantes externos pode mostrar se o primeiro clique segue para demo, case ou contato. Não há analytics ou coleta de dados nesta entrega.

## Validação

Os registros de build e conferência visual/funcional desta revisão ficam em `docs/verification.md`. Capturas locais ficam em `work/qa/2026-11-02/` e não integram o histórico Git.
